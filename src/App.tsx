import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from './hooks/useAuth';
import { StudentSidebar } from './components/layout/StudentSidebar';
import { EducatorSidebar } from './components/layout/EducatorSidebar';
import StudentDashboard from './components/dashboard/student/StudentDashboard';
import EducatorHome from './components/dashboard/educator/EducatorHome';
import { LandingPage } from './components/landing/LandingPage';
import { AuthModal } from './components/auth/AuthModal';
import { SuggestedCourses } from './components/courses/SuggestedCourses';
import { SettingsPage } from './components/settings/SettingsPage';
import { Button } from './components/ui/Button';
import { Card } from './components/ui/Card';
import { ProgressBar } from './components/ui/ProgressBar';

// Import both headers
import { StudentHeader } from './components/layout/StudentHeader';
import { EducatorHeader } from './components/layout/EducatorHeader';

function App() {
  const { user, loading, login } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showLanding, setShowLanding] = useState(!user);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // optional for EducatorHeader

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your learning dashboard...</p>
        </div>
      </div>
    );
  }

  const handleAuth = async (role: 'student' | 'educator') => {
    await login(role); // pass role only
    setShowLanding(false);
  };

  if (showLanding) {
    return (
      <div>
        <nav className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">EdTechAI</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <Button onClick={() => setShowAuthModal(true)}>Sign In</Button>
            </div>
          </div>
        </nav>
        <LandingPage />
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          onAuth={handleAuth}
        />
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return user?.role === 'educator'
          ? <EducatorHome activeTab={activeTab} />
          : <StudentDashboard />;
      case 'suggested-courses':
        return <SuggestedCourses />;
      case 'settings':
        return <SettingsPage />;
      case 'courses':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Advanced Mathematics',
                  progress: 78,
                  instructor: 'Dr. Sarah Chen',
                  image: 'https://images.pexels.com/photos/6256/water-hand-mathematics-geometry.jpg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
                },
                {
                  title: 'Physics Fundamentals',
                  progress: 65,
                  instructor: 'Prof. Michael Thompson',
                  image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
                },
                {
                  title: 'Computer Science',
                  progress: 92,
                  instructor: 'Dr. Alex Rivera',
                  image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
                }
              ].map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hoverable">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                      <p className="text-gray-600 mb-4">{course.instructor}</p>
                      <ProgressBar progress={course.progress} className="mb-4" />
                      <Button className="w-full">Continue Learning</Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-gray-600">This section is under development.</p>
          </div>
        );
    }
  };

  return (
    <div className={`min-h-screen flex ${user?.role === 'educator' && darkMode ? 'bg-neutral-900' : 'bg-gray-50'}`}>
      {user?.role === 'educator' ? (
        <EducatorSidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          darkMode={darkMode} 
        />
      ) : (
        <StudentSidebar 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
      )}
      <div className="flex-1 flex flex-col">
        {/* Switch headers */}
        {user?.role === 'educator' ? (
          <EducatorHeader darkMode={darkMode} setDarkMode={setDarkMode} />
        ) : (
          <StudentHeader role={user?.role} />
        )}

        <main className="flex-1 p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default App;
