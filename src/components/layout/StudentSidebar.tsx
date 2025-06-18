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
import { Calendar } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const StudentSidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
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
      { id: 'dashboard', label: 'Dashboard', icon: Home },
      { id: 'courses', label: 'My Courses', icon: BookOpen },
      { id: 'students', label: 'Students', icon: Users },
      { id: 'revenue', label: 'Revenue', icon: BarChart3 },
      { id: 'calendar', label: 'Calendar', icon: Calendar },
      { id: 'settings', label: 'Settings', icon: Settings },
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

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="bg-white border-r border-gray-200 w-64 min-h-screen p-6"
    >
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-blue-600 flex items-center">
          <Brain className="h-8 w-8 mr-2" />
          EdTechAI
        </h1>
        <p className="text-sm text-gray-500 mt-1">Smarter Learning Platform</p>
      </div>

      <nav className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <motion.button
              key={item.id}
              whileHover={{ x: 4 }}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="h-5 w-5 mr-3" />
              {item.label}
            </motion.button>
          );
        })}
      </nav>
    </motion.aside>
  );
};