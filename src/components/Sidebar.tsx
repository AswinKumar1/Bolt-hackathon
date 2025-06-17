import React from 'react';
import { 
  BarChart3, 
  Users, 
  Calendar, 
  BookOpen, 
  TrendingUp, 
  Target,
  Settings,
  HelpCircle,
  Sparkles
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, darkMode }) => {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'revenue', label: 'Revenue Analytics', icon: TrendingUp },
    { id: 'retention', label: 'Student Retention', icon: Users },
    { id: 'classes', label: 'Class Management', icon: BookOpen },
    { id: 'calendar', label: 'Smart Scheduling', icon: Calendar },
    { id: 'ai-insights', label: 'AI Insights', icon: Sparkles },
  ];

  const bottomItems = [
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'help', label: 'Help & Support', icon: HelpCircle },
  ];

  return (
    <aside className={`w-64 border-r h-screen flex flex-col transition-colors duration-300 ${
      darkMode 
        ? 'bg-neutral-800 border-neutral-700' 
        : 'bg-white border-neutral-200'
    }`}>
      <nav className="flex-1 px-4 py-6">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            const isAI = item.id === 'ai-insights';
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 group relative ${
                  isActive
                    ? darkMode
                      ? 'bg-success-500/20 text-white border-2 border-success-400 shadow-lg'
                      : 'bg-success-50 text-success-800 border-2 border-success-400 shadow-md'
                    : darkMode
                      ? 'hover:bg-neutral-700 text-neutral-300 hover:text-white'
                      : 'hover:bg-neutral-50 text-neutral-700 hover:text-neutral-900'
                }`}
              >
                {/* Active indicator bar */}
                {isActive && (
                  <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-r-full ${
                    darkMode ? 'bg-success-400' : 'bg-success-500'
                  }`}></div>
                )}
                
                <Icon 
                  className={`w-5 h-5 ${
                    isAI && isActive ? 'animate-sparkle' : ''
                  } ${
                    isActive 
                      ? darkMode 
                        ? 'text-success-400' 
                        : 'text-success-600'
                      : darkMode
                        ? 'text-neutral-400 group-hover:text-neutral-300'
                        : 'text-neutral-500 group-hover:text-neutral-700'
                  }`} 
                />
                <span className={`font-medium ${
                  isActive 
                    ? darkMode 
                      ? 'text-white font-semibold' 
                      : 'text-success-800 font-semibold'
                    : ''
                }`}>{item.label}</span>
                {isAI && (
                  <div className={`ml-auto w-2 h-2 rounded-full animate-pulse ${
                    isActive 
                      ? darkMode ? 'bg-success-300' : 'bg-success-600'
                      : 'bg-success-500'
                  }`}></div>
                )}
              </button>
            );
          })}
        </div>
      </nav>

      <div className={`px-4 py-4 border-t transition-colors duration-300 ${
        darkMode ? 'border-neutral-700' : 'border-neutral-200'
      }`}>
        <div className="space-y-2">
          {bottomItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 relative ${
                  isActive
                    ? darkMode
                      ? 'bg-success-500/20 text-white border-2 border-success-400 shadow-lg'
                      : 'bg-success-50 text-success-800 border-2 border-success-400 shadow-md'
                    : darkMode
                      ? 'hover:bg-neutral-700 text-neutral-300 hover:text-white'
                      : 'hover:bg-neutral-50 text-neutral-700 hover:text-neutral-900'
                }`}
              >
                {/* Active indicator bar */}
                {isActive && (
                  <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-r-full ${
                    darkMode ? 'bg-success-400' : 'bg-success-500'
                  }`}></div>
                )}
                
                <Icon className={`w-5 h-5 ${
                  isActive 
                    ? darkMode 
                      ? 'text-success-400' 
                      : 'text-success-600'
                    : darkMode
                      ? 'text-neutral-400'
                      : 'text-neutral-500'
                }`} />
                <span className={`font-medium ${
                  isActive 
                    ? darkMode 
                      ? 'text-white font-semibold' 
                      : 'text-success-800 font-semibold'
                    : ''
                }`}>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;