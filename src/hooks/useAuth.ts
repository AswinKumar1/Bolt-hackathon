import { useState, useEffect } from 'react';
import { User } from '../types';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate auth check
    setTimeout(() => {
      setUser({
        id: '1',
        name: 'Alex Johnson',
        email: 'alex@example.com',
        role: 'student',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      });
      setLoading(false);
    }, 1000);
  }, []);

  const login = (email: string, password: string) => {
    // Simulate login
    return new Promise((resolve) => {
      setTimeout(() => {
        setUser({
          id: '1',
          name: 'Alex Johnson',
          email,
          role: 'student'
        });
        resolve(true);
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
  };

  return { user, loading, login, logout };
};