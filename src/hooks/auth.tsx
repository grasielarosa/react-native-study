import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface AuthProviderProps {
  children: ReactNode;
}
interface User {
  id: string;
  name: string;
  email: string;
  familyName?: string;
  photo?: string;
}

interface AuthContextData {
  userInfo: undefined | User;
  setUserInfo: (arg: any) => void;
  siginGoogle(): Promise<FirebaseAuthTypes.UserCredential>;
  signOut(): Promise<void>;
}

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userInfo, setUserInfo] = useState();
  const dataKey = '@gofinances:users';

  const siginGoogle = async () => {
    try {
      const { idToken, user } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      if (idToken) {
        const userLogged = {
          id: user.id,
          name: user.givenName,
          familyName: user.familyName,
          email: user.email,
          photo: user.photo,
        };
        setUserInfo(userLogged);
        await AsyncStorage.setItem(dataKey, JSON.stringify(userLogged));
      }
      return auth().signInWithCredential(googleCredential);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const signOut = async () => {
    setUserInfo({} as User);
    await AsyncStorage.removeItem(dataKey);
  };

  async function loadUserStorageData() {
    const userData = await AsyncStorage.getItem(dataKey);
    if (userData) {
      const userStorage = JSON.parse(userData) as User;
      setUserInfo(userStorage);
    } else {
      GoogleSignin.configure({
        webClientId:
          '663354818378-qe50fg56q3bepj7e5lhumck5raa3765n.apps.googleusercontent.com',
      });
    }
  }

  useEffect(() => {
    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ userInfo, setUserInfo, siginGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
export { AuthProvider, useAuth };
