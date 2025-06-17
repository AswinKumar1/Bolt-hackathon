import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../../hooks/useDarkMode';

interface DarkModeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ 
  className = '', 
  showLabel = false 
}) => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`flex items-center ${className}`}>
      {showLabel && (
        <div className="flex items-center mr-3">
          <Sun className="h-4 w-4 mr-2 text-gray-600 dark:text-gray-300" />
          <span className="text-sm text-gray-700 dark:text-gray-200">Light</span>
        </div>
      )}
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleDarkMode}
        className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          darkMode ? 'bg-blue-600' : 'bg-gray-300'
        }`}
        title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {/* Toggle Circle */}
        <motion.span
          animate={{ 
            x: darkMode ? 24 : 2  // FIXED: Right (24px) when dark mode ON, Left (2px) when OFF
          }}
          transition={{ 
            type: 'spring', 
            stiffness: 500, 
            damping: 30
          }}
          className="inline-block h-5 w-5 transform rounded-full bg-white shadow-lg flex items-center justify-center"
        >
          {/* Dark Mode Icon (Moon) - Shows when dark mode is ON */}
          <motion.div
            animate={{ 
              scale: darkMode ? 1 : 0,
              opacity: darkMode ? 1 : 0
            }}
            transition={{ duration: 0.15 }}
            className="absolute"
          >
            <Moon className="h-3 w-3 text-blue-600" />
          </motion.div>
          
          {/* Light Mode Icon (Sun) - Shows when dark mode is OFF */}
          <motion.div
            animate={{ 
              scale: darkMode ? 0 : 1,
              opacity: darkMode ? 0 : 1
            }}
            transition={{ duration: 0.15 }}
            className="absolute"
          >
            <Sun className="h-3 w-3 text-yellow-500" />
          </motion.div>
        </motion.span>
      </motion.button>

      {showLabel && (
        <div className="flex items-center ml-3">
          <span className="text-sm text-gray-700 dark:text-gray-200">Dark</span>
          <Moon className="h-4 w-4 ml-2 text-gray-600 dark:text-gray-300" />
        </div>
      )}
    </div>
  );
};