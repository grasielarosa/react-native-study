import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
interface AuthProviderProps {
  children: ReactNode;
}

// faltam as aulas 3, 4 e 5 de autenticação. Async storage de usuário na aula de rotas pub/priv
interface User {
  id: string;
  name: string;
  email: string;
  familyName?: string;
  photo?: string;
}

interface AuthContextData {
  userInfo: undefined | User;
  siginGoogle(): Promise<FirebaseAuthTypes.UserCredential>;
}

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userInfo, setUserInfo] = useState();

  const siginGoogle = async () => {
    try {
      const { idToken, user } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      if (idToken) {
        setUserInfo({
          id: user.id,
          name: user.givenName,
          familyName: user.familyName,
          email: user.email,
          photo: user.photo,
        });
      }
      return auth().signInWithCredential(googleCredential);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '663354818378-qe50fg56q3bepj7e5lhumck5raa3765n.apps.googleusercontent.com',
    });
  }, []);

  return (
    <AuthContext.Provider value={{ userInfo, siginGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
export { AuthProvider, useAuth };
