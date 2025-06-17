import React from 'react';
import { DivideIcon as LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: LucideIcon;
  color: 'primary' | 'success';
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  trend,
  icon: Icon,
  color,
}) => {
  const colorClasses = {
    primary: {
      bg: 'bg-primary-50 dark:bg-primary-900/20',
      iconBg: 'bg-primary-100 dark:bg-primary-800/30',
      iconColor: 'text-primary-600 dark:text-primary-400',
      border: 'border-primary-200 dark:border-primary-700',
    },
    success: {
      bg: 'bg-success-50 dark:bg-success-900/20',
      iconBg: 'bg-success-100 dark:bg-success-800/30',
      iconColor: 'text-success-600 dark:text-success-400',
      border: 'border-success-200 dark:border-success-700',
    },
  };

  const classes = colorClasses[color];

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-600 p-6 hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-1 transition-colors duration-300">{title}</p>
          <p className="text-3xl font-bold text-neutral-800 dark:text-white mb-2 transition-colors duration-300">{value}</p>
          <div className="flex items-center space-x-1">
            {trend === 'up' ? (
              <TrendingUp className="w-4 h-4 text-success-500" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-500" />
            )}
            <span
              className={`text-sm font-medium ${
                trend === 'up' ? 'text-success-600 dark:text-success-400' : 'text-red-600 dark:text-red-400'
              } transition-colors duration-300`}
            >
              {change}
            </span>
            <span className="text-sm text-neutral-500 dark:text-neutral-400 transition-colors duration-300">vs last month</span>
          </div>
        </div>
        <div className={`p-3 rounded-lg ${classes.iconBg} group-hover:scale-110 transition-all duration-200`}>
          <Icon className={`w-6 h-6 ${classes.iconColor}`} />
        </div>
      </div>
    </div>
  );
};

export default MetricCard;