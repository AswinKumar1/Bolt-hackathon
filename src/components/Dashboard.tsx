import React from 'react';
import { DollarSign, Users, TrendingUp, Award } from 'lucide-react';
import MetricCard from './MetricCard';
import RevenueChart from './RevenueChart';
import RetentionHeatmap from './RetentionHeatmap';

const Dashboard: React.FC = () => {
  const metrics = [
    {
      title: 'Monthly Revenue',
      value: '$24,750',
      change: '+12.5%',
      trend: 'up' as const,
      icon: DollarSign,
      color: 'primary',
    },
    {
      title: 'Active Students',
      value: '1,247',
      change: '+8.2%',
      trend: 'up' as const,
      icon: Users,
      color: 'success',
    },
    {
      title: 'Retention Rate',
      value: '94.2%',
      change: '+2.1%',
      trend: 'up' as const,
      icon: TrendingUp,
      color: 'primary',
    },
    {
      title: 'Performance Bonus',
      value: '$3,200',
      change: '+15.4%',
      trend: 'up' as const,
      icon: Award,
      color: 'success',
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-white transition-colors duration-300">Dashboard Overview</h2>
          <p className="text-neutral-600 dark:text-neutral-300 mt-1 transition-colors duration-300">Welcome back, Sarah! Here's your performance summary.</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 text-neutral-700 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-500 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all duration-200">
            Export Data
          </button>
          <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all duration-200 shadow-sm hover:shadow-md">
            View Reports
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-600 p-6 transition-colors duration-300">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-white transition-colors duration-300">Revenue Analytics</h3>
            <select className="px-3 py-1 border border-neutral-300 dark:border-neutral-500 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white transition-colors duration-300">
              <option>Last 6 months</option>
              <option>Last 12 months</option>
              <option>This year</option>
            </select>
          </div>
          <RevenueChart />
        </div>

        <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-600 p-6 transition-colors duration-300">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-white transition-colors duration-300">Student Retention</h3>
            <div className="flex items-center space-x-2 text-sm text-neutral-600 dark:text-neutral-300 transition-colors duration-300">
              <div className="w-3 h-3 bg-success-500 rounded-full"></div>
              <span>High retention</span>
              <div className="w-3 h-3 bg-yellow-400 rounded-full ml-3"></div>
              <span>At risk</span>
            </div>
          </div>
          <RetentionHeatmap />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;