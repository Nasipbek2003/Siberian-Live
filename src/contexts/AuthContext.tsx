import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { api } from '../services/api';

interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  date_joined: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (userData: RegisterData) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
}

interface RegisterData {
  username: string;
  email: string;
  password: string;
  password2: string;
  first_name: string;
  last_name: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = !!user;

  // Проверяем статус аутентификации при загрузке
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await api.get('/users/profile/');
      if (response.data.user) {
        setUser(response.data.user);
      }
    } catch (error) {
      // Пользователь не авторизован
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (username: string, password: string) => {
    try {
      const response = await api.post('/users/login/', {
        username,
        password,
      });
      
      if (response.data.user) {
        setUser(response.data.user);
        return { success: true };
      }
      return { success: false, error: 'Ошибка входа' };
    } catch (error: any) {
      const errorMessage = error.response?.data?.non_field_errors?.[0] || 
                          error.response?.data?.username?.[0] ||
                          error.response?.data?.password?.[0] ||
                          'Ошибка входа';
      return { success: false, error: errorMessage };
    }
  };

  const register = async (userData: RegisterData) => {
    try {
      console.log('Sending registration data:', userData); // Логирование
      const response = await api.post('/users/register/', userData);
      console.log('Registration response:', response.data); // Логирование
      
      if (response.data.user) {
        setUser(response.data.user);
        return { success: true };
      }
      return { success: false, error: 'Ошибка регистрации' };
    } catch (error: any) {
      console.error('Registration error:', error); // Логирование
      console.error('Error response:', error.response?.data); // Логирование
      const errorMessage = error.response?.data?.username?.[0] ||
                          error.response?.data?.email?.[0] ||
                          error.response?.data?.password?.[0] ||
                          error.response?.data?.password2?.[0] ||
                          'Ошибка регистрации';
      return { success: false, error: errorMessage };
    }
  };

  const logout = async () => {
    try {
      await api.post('/users/logout/');
    } catch (error) {
      console.error('Ошибка при выходе:', error);
    } finally {
      setUser(null);
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 