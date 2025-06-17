import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Search, User, Menu } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { DarkModeToggle } from '../ui/DarkModeToggle';

export const Header: React.FC = () => {
  const { user } = useAuth();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="lg:hidden">
            <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Search courses, tutors..."
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle - Using the proper component */}
          <DarkModeToggle />

          {/* Notifications */}
          <button className="relative p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          
          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <img
              src={user?.avatar || `https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop`}
              alt={user?.name}
              className="h-8 w-8 rounded-full"
            />
            <span className="font-medium text-gray-700 dark:text-gray-200">{user?.name}</span>
          </div>
        </div>
      </div>
    </motion.header>
  );
};