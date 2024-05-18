import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from '../services/api';
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
  signUp: (data: { username: string; email: string; password: string }) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['x-auth-token'] = token;
      axios.get('/auth/me')
        .then(response => {
          setUser(response.data);
          setLoading(false);
        })
        .catch(() => {
          localStorage.removeItem('token');
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const signIn = async ({ email, password }: { email: string; password: string }) => {
    try {
      const response = await axios.post('/auth/login', { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['x-auth-token'] = token;
      const userResponse = await axios.get('/auth/me');
      setUser(userResponse.data);
      navigate('/');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  const signUp = async ({ username, email, password }: { username: string; email: string; password: string }) => {
    try {
      const response = await axios.post('/auth/register', { username, email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['x-auth-token'] = token;
      const userResponse = await axios.get('/auth/me');
      setUser(userResponse.data);
      navigate('/');
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
    }
  };

  const signOut = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['x-auth-token'];
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthContext };
