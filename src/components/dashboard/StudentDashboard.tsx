import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Target, TrendingUp, Award, Star, Compass, Play } from 'lucide-react';
import { Card } from '../ui/Card';
import { ProgressBar } from '../ui/ProgressBar';
import { Button } from '../ui/Button';

export const StudentDashboard: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: 'Advanced Mathematics',
      progress: 78,
      instructor: 'Dr. Sarah Chen',
      nextLesson: 'Calculus Integration',
      image: 'https://images.pexels.com/photos/6256/water-hand-mathematics-geometry.jpg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Physics Fundamentals',
      progress: 65,
      instructor: 'Prof. Michael Thompson',
      nextLesson: 'Quantum Mechanics',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Computer Science',
      progress: 92,
      instructor: 'Dr. Alex Rivera',
      nextLesson: 'Algorithm Design',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ];

  const achievements = [
    { title: 'Problem Solver', description: 'Solved 100 practice problems', icon: Target },
    { title: 'Streak Master', description: '30-day learning streak', icon: TrendingUp },
    { title: 'Top Student', description: 'Top 5% in Mathematics', icon: Award }
  ];

  const suggestedCourses = [
    {
      title: 'Machine Learning Basics',
      instructor: 'Dr. Lisa Wang',
      rating: 4.9,
      students: 2847,
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=200&h=120&fit=crop',
      matchScore: 95
    },
    {
      title: 'Organic Chemistry',
      instructor: 'Prof. James Miller',
      rating: 4.7,
      students: 1923,
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=200&h=120&fit=crop',
      matchScore: 88
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white"
      >
        <h2 className="text-2xl font-bold mb-2">Welcome back, Alex! 🎓</h2>
        <p className="opacity-90">You're doing great! Keep up the momentum.</p>
        <div className="mt-4 flex items-center space-x-4">
          <div className="bg-white/20 rounded-lg p-3">
            <Clock className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm opacity-80">Study Time Today</p>
            <p className="text-xl font-semibold">2h 45m</p>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Courses Enrolled', value: '12', icon: BookOpen, color: 'blue' },
          { label: 'Completed', value: '8', icon: Target, color: 'green' },
          { label: 'Study Streak', value: '15 days', icon: TrendingUp, color: 'purple' },
          { label: 'Achievements', value: '24', icon: Award, color: 'orange' }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 hoverable">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Current Courses */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Continue Learning</h3>
            <div className="space-y-4">
              {courses.map((course) => (
                <div key={course.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{course.title}</h4>
                    <p className="text-sm text-gray-600">{course.instructor}</p>
                    <p className="text-xs text-blue-600 mt-1">Next: {course.nextLesson}</p>
                    <ProgressBar progress={course.progress} className="mt-2" showLabel={false} />
                  </div>
                  <Button size="sm">Continue</Button>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Suggested Courses */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center">
                <Compass className="h-5 w-5 mr-2 text-purple-600" />
                Suggested for You
              </h3>
              <Button variant="ghost" size="sm">View All</Button>
            </div>
            <div className="space-y-4">
              {suggestedCourses.map((course, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{course.title}</h4>
                    <p className="text-sm text-gray-600">{course.instructor}</p>
                    <div className="flex items-center mt-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                      <span className="text-xs text-gray-600">{course.rating} • {course.students.toLocaleString()} students</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {course.matchScore}% Match
                      </span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    <Play className="h-3 w-3 mr-1" />
                    Preview
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Achievements & Subscription */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Award className="h-5 w-5 mr-2 text-yellow-500" />
              Recent Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                  <achievement.icon className="h-8 w-8 text-yellow-600" />
                  <div>
                    <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Subscription Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Subscription Status</h3>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">Premium Plan</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Active</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-1">$79/month</p>
              <p className="text-sm text-gray-600 mb-4">Renews on March 15, 2024</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-700">
                  <Star className="h-4 w-4 mr-2 text-yellow-500" />
                  Unlimited course access
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Star className="h-4 w-4 mr-2 text-yellow-500" />
                  Priority support
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Star className="h-4 w-4 mr-2 text-yellow-500" />
                  Advanced analytics
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">Manage Subscription</Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};