import React, { createContext, ReactNode, useContext } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '987819051962-95pdvuvdj9lb201e51svlindeo2kcrcm.apps.googleusercontent.com',
});

interface AuthProviderProps {
  children: ReactNode;
}

// faltam as aulas 3, 4 e 5 de autenticação. Async storage de usuário na aula de rotas pub/priv
interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface AuthContextData {
  user: User;
  siginGoogle(): Promise<FirebaseAuthTypes.UserCredential>;
}

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const user = {
    id: 'abshgsk,ks',
    name: 'Grasi',
    email: 'huahuhauahu',
  };

  const siginGoogle = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      return auth().signInWithCredential(googleCredential);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, siginGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
export { AuthProvider, useAuth };
