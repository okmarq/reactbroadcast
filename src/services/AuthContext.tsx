import React, { createContext, useState } from 'react';

type AuthContextType = {
  user: User | null;
  register: (firstName: string, lastName: string, email: string, password: string, passwordConfirmation: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
};

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  token: string;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const register = (firstName: string, lastName: string, email: string, password: string, passwordConfirmation: string) => {
    // Perform register logic and update user state
    // setUser(userObject);
  }

  const login = (email: string, password: string) => {
    // Perform login logic and update user state
    // setUser(userObject);
  };

  const logout = () => {
    // Perform logout logic and update user state
    // setUser(null);
  };

  const authContextValue: AuthContextType = {
    user,
    register,
    login,
    logout,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
