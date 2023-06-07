import React, { createContext, useState } from 'react';

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
};

type User = {
  id: number;
  email: string;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

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
    login,
    logout,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
