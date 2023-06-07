import React, { createContext, useState } from 'react';
import ApiService from '@/services/ApiService';

type AuthContextType = {
  user: User | null;
  register: (firstName: string, lastName: string, email: string, password: string, passwordConfirmation: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
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

  const register = async (firstName: string, lastName: string, email: string, password: string, passwordConfirmation: string) => {
    try {
        const response = await ApiService.register({
          firstName,
          lastName,
          email,
          password,
          passwordConfirmation,
        });
        const newUser: User = response.data;
        setUser(newUser);
      } catch (error) {
        console.error('Failed to register:', error);
      }
  }

  const login = async (email: string, password: string) => {
    try {
        const response = await ApiService.login({ email, password });
        const newUser: User = response.data;
        setUser(newUser);
      } catch (error) {
        console.error('Failed to login:', error);
      }
  };

  const logout = async () => {
    try {
        await ApiService.logout(user?.token);
        setUser(null);
      } catch (error) {
        console.error('Failed to logout:', error);
      }
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
