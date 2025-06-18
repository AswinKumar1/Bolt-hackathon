import { useState } from 'react';
import { User } from '../types';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false); // no initial load simulation now
  const login = async (role: 'student' | 'educator') => {
  const mockUser: User = {
    id: '1',
    name: role === 'student' ? 'Jane Student' : 'Dr. Educator', // ✅ name based on role
    email: `${role}@edtech.ai`,
    avatar: role === 'student'
      ? 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      : 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    role,
  };
  setUser(mockUser);
};

  const logout = () => {
    setUser(null);
  };

  return { user, loading, login, logout };
};
