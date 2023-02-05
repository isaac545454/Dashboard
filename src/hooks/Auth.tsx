import React, { createContext, useState, useContext } from "react";

interface IAuthContext {
  logged: boolean;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
}

interface Props {
  children?: React.ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: Props) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem("@minha-carteira:logged");
    return !!isLogged;
  });

  const signIn = (email: string, password: string): void => {
    localStorage.setItem("@minha-carteira:logged", "true");
    setLogged(true);
  };

  const signOut = () => {
    localStorage.removeItem("@minha-carteira:logged");
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);

  return context;
};

// eslint-disable-next-line import/no-anonymous-default-export
export { AuthProvider, useAuth };
