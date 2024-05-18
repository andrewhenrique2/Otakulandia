import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  username: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (credentials: { email: string; password: string }) => Promise<void>;
  signOut: () => void;
  signUp: (data: { username: string; email: string; password: string }) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      api.get('/auth/me').then(response => {
        setUser(response.data);
      }).catch(() => {
        localStorage.removeItem('token');
        delete api.defaults.headers.common['Authorization'];
      });
    }
  }, []);

  const signIn = async ({ email, password }: { email: string; password: string }) => {
    setLoading(true);
    try {
      const response = await api.post('/auth/login', { email, password });
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser(user);
      navigate('/'); // Redirect to home page after successful login
    } catch (error) {
      throw new Error('Login failed');
    } finally {
      setLoading(false);
    }
  };

  const signUp = async ({ username, email, password }: { username: string; email: string; password: string }) => {
    setLoading(true);
    try {
      await api.post('/auth/register', { username, email, password });
      await signIn({ email, password });
    } catch (error) {
      throw new Error('Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    localStorage.removeItem('token');
    delete api.defaults.headers.common['Authorization'];
    setUser(null);
    navigate('/login'); // Redirect to login page after sign out
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthContext };
