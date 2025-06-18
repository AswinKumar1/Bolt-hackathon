import React from 'react';
import { Bell, Search, Settings, User, Sparkles, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export const EducatorHeader: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  return (
    <header className={`border-b transition-colors duration-300 px-6 py-4 ${
      darkMode 
        ? 'bg-neutral-800 border-neutral-700' 
        : 'bg-white border-neutral-200'
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-primary-500 animate-sparkle" />
              <div className="absolute inset-0 w-8 h-8 bg-primary-500 rounded-full opacity-20 animate-pulse-glow"></div>
            </div>
            <h1 className={`text-2xl font-bold transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-neutral-800'
            }`}>
              EdTechAI
            </h1>
          </div>
          <span className="px-3 py-1 bg-success-100 text-success-700 text-sm font-medium rounded-full">
            Educator Portal
          </span>
        </div>

        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
              darkMode ? 'text-neutral-400' : 'text-neutral-400'
            }`} />
            <input
              type="text"
              placeholder="Search students, classes, analytics..."
              className={`w-full pl-10 pr-4 py-2 border rounded-lg transition-all duration-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                darkMode 
                  ? 'bg-neutral-700 border-neutral-600 text-white placeholder-neutral-400' 
                  : 'bg-white border-neutral-300 text-neutral-900 placeholder-neutral-500'
              }`}
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Advanced Dark Mode Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setDarkMode(!darkMode)}
            className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              darkMode ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {/* Toggle Circle */}
            <motion.span
              animate={{ 
                x: darkMode ? 24 : 2  // Right (24px) when dark mode ON, Left (2px) when OFF
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

          <button className={`relative p-2 rounded-lg transition-all duration-300 ${
            darkMode 
              ? 'text-neutral-300 hover:text-white hover:bg-neutral-700' 
              : 'text-neutral-600 hover:text-primary-500 hover:bg-primary-50'
          }`}>
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-success-500 rounded-full"></span>
          </button>

          <button className={`p-2 rounded-lg transition-all duration-300 ${
            darkMode 
              ? 'text-neutral-300 hover:text-white hover:bg-neutral-700' 
              : 'text-neutral-600 hover:text-primary-500 hover:bg-primary-50'
          }`}>
            <Settings className="w-5 h-5" />
          </button>

          <div className={`flex items-center space-x-3 pl-4 border-l transition-colors duration-300 ${
            darkMode ? 'border-neutral-700' : 'border-neutral-200'
          }`}>
            <div className="text-right">
              <p className={`text-sm font-medium transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-neutral-800'
              }`}>
                Sarah Johnson
              </p>
              <p className={`text-xs transition-colors duration-300 ${
                darkMode ? 'text-neutral-400' : 'text-neutral-500'
              }`}>
                Mathematics Educator
              </p>
            </div>
            <div className="relative">
              <User className="w-8 h-8 p-1 bg-primary-100 text-primary-600 rounded-full" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-success-500 border-2 border-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
