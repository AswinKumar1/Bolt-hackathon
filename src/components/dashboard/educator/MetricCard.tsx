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
      bg: 'bg-primary-50',
      iconBg: 'bg-primary-100',
      iconColor: 'text-primary-600',
      border: 'border-primary-200',
    },
    success: {
      bg: 'bg-success-50',
      iconBg: 'bg-success-100',
      iconColor: 'text-success-600',
      border: 'border-success-200',
    },
  };

  const classes = colorClasses[color];

  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-neutral-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-neutral-800 mb-2">{value}</p>
          <div className="flex items-center space-x-1">
            {trend === 'up' ? (
              <TrendingUp className="w-4 h-4 text-success-500" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-500" />
            )}
            <span
              className={`text-sm font-medium ${
                trend === 'up' ? 'text-success-600' : 'text-red-600'
              }`}
            >
              {change}
            </span>
            <span className="text-sm text-neutral-500">vs last month</span>
          </div>
        </div>
        <div className={`p-3 rounded-lg ${classes.iconBg} group-hover:scale-110 transition-transform duration-200`}>
          <Icon className={`w-6 h-6 ${classes.iconColor}`} />
        </div>
      </div>
    </div>
  );
};

export default MetricCard;