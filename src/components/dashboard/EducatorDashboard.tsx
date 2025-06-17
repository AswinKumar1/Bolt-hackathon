import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Users, TrendingUp, BookOpen, Calendar, MessageSquare } from 'lucide-react';
import { Card } from '../ui/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

export const EducatorDashboard: React.FC = () => {
  const revenueData = [
    { month: 'Jan', revenue: 4200, students: 45 },
    { month: 'Feb', revenue: 4800, students: 52 },
    { month: 'Mar', revenue: 5600, students: 61 },
    { month: 'Apr', revenue: 6200, students: 68 },
    { month: 'May', revenue: 7100, students: 78 },
    { month: 'Jun', revenue: 8300, students: 89 }
  ];

  const retentionData = [
    { course: 'Math 101', retention: 92 },
    { course: 'Physics', retention: 88 },
    { course: 'Chemistry', retention: 95 },
    { course: 'Biology', retention: 90 }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 text-white"
      >
        <h2 className="text-2xl font-bold mb-2">Educator Dashboard 📈</h2>
        <p className="opacity-90">Track your impact and optimize your earning potential</p>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="bg-white/20 rounded-lg p-3">
            <DollarSign className="h-6 w-6 mb-2" />
            <p className="text-sm opacity-80">This Month</p>
            <p className="text-xl font-semibold">$8,300</p>
          </div>
          <div className="bg-white/20 rounded-lg p-3">
            <Users className="h-6 w-6 mb-2" />
            <p className="text-sm opacity-80">Active Students</p>
            <p className="text-xl font-semibold">89</p>
          </div>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Monthly Revenue', value: '$8,300', change: '+18%', icon: DollarSign, color: 'green' },
          { label: 'Total Students', value: '89', change: '+12%', icon: Users, color: 'blue' },
          { label: 'Avg. Retention', value: '91%', change: '+3%', icon: TrendingUp, color: 'purple' },
          { label: 'Active Courses', value: '4', change: '0%', icon: BookOpen, color: 'orange' }
        ].map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 hoverable">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{metric.label}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
                  <p className={`text-sm ${
                    metric.change.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-gray-600 dark:text-gray-300'
                  }`}>
                    {metric.change} from last month
                  </p>
                </div>
                <div className={`p-3 rounded-full bg-${metric.color}-100 dark:bg-${metric.color}-900/30`}>
                  <metric.icon className={`h-6 w-6 text-${metric.color}-600 dark:text-${metric.color}-400`} />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Revenue & Student Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis dataKey="month" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }} 
                />
                <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={3} />
                <Line type="monotone" dataKey="students" stroke="#3B82F6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        {/* Retention Rates */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Course Retention Rates</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={retentionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis dataKey="course" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }} 
                />
                <Bar dataKey="retention" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      </div>

      {/* Recent Activity & Upcoming */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Messages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-900 dark:text-white">
              <MessageSquare className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
              Recent Messages
            </h3>
            <div className="space-y-4">
              {[
                { student: 'Emma Wilson', message: 'Question about Chapter 5...', time: '2 min ago' },
                { student: 'James Miller', message: 'Thank you for the feedback!', time: '1 hour ago' },
                { student: 'Sarah Chen', message: 'When is the next session?', time: '3 hours ago' }
              ].map((msg, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <img
                    src={`https://images.pexels.com/photos/${1000000 + index}/pexels-photo-${1000000 + index}.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop`}
                    alt={msg.student}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-white">{msg.student}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{msg.message}</p>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{msg.time}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Upcoming Sessions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-900 dark:text-white">
              <Calendar className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
              Upcoming Sessions
            </h3>
            <div className="space-y-4">
              {[
                { course: 'Advanced Math', time: '2:00 PM - 3:00 PM', students: 15, date: 'Today' },
                { course: 'Physics Lab', time: '10:00 AM - 11:30 AM', students: 12, date: 'Tomorrow' },
                { course: 'Chemistry', time: '3:00 PM - 4:00 PM', students: 18, date: 'Friday' }
              ].map((session, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{session.course}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{session.time}</p>
                    <p className="text-xs text-blue-600 dark:text-blue-400">{session.students} students enrolled</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{session.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};