import React, { useState } from 'react';
import { Plus, BookOpen, Users, Calendar, Clock, Edit, Trash2, Eye } from 'lucide-react';

const ClassManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const classes = [
    {
      id: 1,
      name: 'Algebra Fundamentals',
      students: 32,
      schedule: 'Mon, Wed, Fri - 10:00 AM',
      duration: '1 hour',
      status: 'active',
      nextSession: '2024-01-15',
      price: '$45/session',
      revenue: '$1,440',
    },
    {
      id: 2,
      name: 'Calculus I',
      students: 28,
      schedule: 'Tue, Thu - 2:00 PM',
      duration: '1.5 hours',
      status: 'active',
      nextSession: '2024-01-16',
      price: '$60/session',
      revenue: '$1,680',
    },
    {
      id: 3,
      name: 'Statistics',
      students: 24,
      schedule: 'Mon, Wed - 4:00 PM',
      duration: '1 hour',
      status: 'active',
      nextSession: '2024-01-15',
      price: '$50/session',
      revenue: '$1,200',
    },
    {
      id: 4,
      name: 'Geometry Advanced',
      students: 18,
      schedule: 'Sat - 9:00 AM',
      duration: '2 hours',
      status: 'draft',
      nextSession: null,
      price: '$75/session',
      revenue: '$0',
    },
  ];

  const filteredClasses = classes.filter(cls => {
    if (activeTab === 'all') return true;
    return cls.status === activeTab;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-300';
      case 'draft': return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300';
      case 'archived': return 'bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300';
      default: return 'bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-white transition-colors duration-300">Class Management</h2>
          <p className="text-neutral-600 dark:text-neutral-300 mt-1 transition-colors duration-300">Manage your courses, students, and schedules</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all duration-200 shadow-sm hover:shadow-md">
          <Plus className="w-5 h-5" />
          <span>Create New Class</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-neutral-100 dark:bg-neutral-700 p-1 rounded-lg w-fit transition-colors duration-300">
        {[
          { id: 'all', label: 'All Classes', count: classes.length },
          { id: 'active', label: 'Active', count: classes.filter(c => c.status === 'active').length },
          { id: 'draft', label: 'Draft', count: classes.filter(c => c.status === 'draft').length },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-white dark:bg-neutral-600 text-primary-700 dark:text-white shadow-sm'
                : 'text-neutral-600 dark:text-white hover:text-neutral-800 dark:hover:text-neutral-200'
            }`}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredClasses.map(cls => (
          <div key={cls.id} className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-600 p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg transition-colors duration-300">
                  <BookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 dark:text-white transition-colors duration-300">{cls.name}</h3>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(cls.status)} transition-colors duration-300`}>
                    {cls.status}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-neutral-600 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all duration-200">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 text-neutral-600 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all duration-200">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-neutral-600 dark:text-neutral-200 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-neutral-600 dark:text-neutral-200 transition-colors duration-300">
                  <Users className="w-4 h-4" />
                  <span>{cls.students} students enrolled</span>
                </div>
                <div className="text-sm font-medium text-neutral-800 dark:text-white transition-colors duration-300">{cls.price}</div>
              </div>

              <div className="flex items-center space-x-2 text-sm text-neutral-600 dark:text-neutral-200 transition-colors duration-300">
                <Calendar className="w-4 h-4" />
                <span>{cls.schedule}</span>
              </div>

              <div className="flex items-center space-x-2 text-sm text-neutral-600 dark:text-neutral-200 transition-colors duration-300">
                <Clock className="w-4 h-4" />
                <span>Duration: {cls.duration}</span>
              </div>

              {cls.nextSession && (
                <div className="flex items-center justify-between p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg transition-colors duration-300">
                  <div>
                    <p className="text-sm font-medium text-primary-800 dark:text-white transition-colors duration-300">Next Session</p>
                    <p className="text-sm text-primary-600 dark:text-primary-300 transition-colors duration-300">{new Date(cls.nextSession).toLocaleDateString()}</p>
                  </div>
                  <button className="px-3 py-1 bg-primary-500 text-white text-sm rounded-md hover:bg-primary-600 transition-all duration-200">
                    Join
                  </button>
                </div>
              )}

              <div className="pt-3 border-t border-neutral-200 dark:border-neutral-600 transition-colors duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600 dark:text-neutral-200 transition-colors duration-300">Monthly Revenue</span>
                  <span className="text-lg font-semibold text-success-600 dark:text-success-400 transition-colors duration-300">{cls.revenue}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-600 p-6 transition-colors duration-300">
        <h3 className="text-xl font-semibold text-neutral-800 dark:text-white mb-4 transition-colors duration-300">Class Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary-600 dark:text-primary-400 transition-colors duration-300">{classes.filter(c => c.status === 'active').length}</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-200 transition-colors duration-300">Active Classes</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-success-600 dark:text-success-400 transition-colors duration-300">{classes.reduce((sum, c) => sum + c.students, 0)}</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-200 transition-colors duration-300">Total Students</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 transition-colors duration-300">12.5</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-200 transition-colors duration-300">Avg Hours/Week</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 transition-colors duration-300">$4,320</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-200 transition-colors duration-300">Monthly Revenue</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassManagement;