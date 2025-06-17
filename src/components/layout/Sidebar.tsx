import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  BookOpen, 
  Users, 
  BarChart3, 
  Settings, 
  CreditCard,
  MessageSquare,
  Award,
  Brain,
  Compass,
  Star
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const { user } = useAuth();

  const menuItems = {
    student: [
      { id: 'dashboard', label: 'Dashboard', icon: Home },
      { id: 'courses', label: 'My Courses', icon: BookOpen },
      { id: 'suggested-courses', label: 'Suggested Courses', icon: Compass },
      { id: 'progress', label: 'Progress', icon: BarChart3 },
      { id: 'achievements', label: 'Achievements', icon: Award },
      { id: 'settings', label: 'Settings', icon: Settings }
    ],
    educator: [
      { id: 'dashboard', label: 'Overview', icon: Home },
      { id: 'students', label: 'Student Retention', icon: Users },
      { id: 'revenue', label: 'Revenue Analytics', icon: BarChart3 },
      { id: 'courses', label: 'Class Management', icon: BookOpen },
      { id: 'messages', label: 'Smart Scheduling', icon: MessageSquare },
      { id: 'ai-insights', label: 'AI Insights', icon: Brain },
      { id: 'settings', label: 'Settings', icon: Settings }
    ],
    admin: [
      { id: 'dashboard', label: 'Dashboard', icon: Home },
      { id: 'analytics', label: 'Analytics', icon: BarChart3 },
      { id: 'users', label: 'Users', icon: Users },
      { id: 'courses', label: 'Courses', icon: BookOpen },
      { id: 'ai-agents', label: 'AI Agents', icon: Brain },
      { id: 'settings', label: 'Settings', icon: Settings }
    ]
  };

  const items = menuItems[user?.role || 'student'];

  const getActiveStyles = (isActive: boolean) => {
    if (!isActive) {
      return {
        container: 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700',
        icon: 'text-gray-600 dark:text-gray-300',
        text: 'text-gray-600 dark:text-gray-300'
      };
    }

    // Active items: green icon, mode-specific text, transparent green background
    return {
      container: 'bg-green-600/20',
      icon: 'text-green-600', // Always green for active icon
      text: 'text-black dark:text-white' // Black in light mode, white in dark mode
    };
  };

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 w-64 min-h-screen p-6"
    >
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400 flex items-center">
          <Brain className="h-8 w-8 mr-2" />
          EdTechAI
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {user?.role === 'educator' ? 'Educator Portal' : 'Smarter Learning Platform'}
        </p>
      </div>

      <nav className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          const styles = getActiveStyles(isActive);
          
          return (
            <motion.button
              key={item.id}
              whileHover={{ x: isActive ? 0 : 4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-all duration-200 font-medium ${styles.container}`}
            >
              <Icon className={`h-5 w-5 mr-3 ${styles.icon}`} />
              <span className={styles.text}>{item.label}</span>
              {item.id === 'ai-insights' && (
                <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              )}
            </motion.button>
          );
        })}
      </nav>

      {/* User Profile Section */}
      <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
          <img
            src={user?.avatar || `https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop`}
            alt={user?.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
              {user?.name}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
              {user?.role}
            </p>
          </div>
        </div>
      </div>
    </motion.aside>
  );
};