import React from 'react';
import AIInsights from './AIInsights';
import Calendar from './Calendar';
import ClassManagement from './ClassManagement';
import MetricCard from './MetricCard';
import RetentionHeatmap from './RetentionHeatmap';
import RevenueAnalytics from './RevenueAnalytics';
import RevenueChart from './RevenueChart';
import StudentRetention from './StudentRetention';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface EducatorHomeProps {
  activeTab: string;
}

const EducatorHome: React.FC<EducatorHomeProps> = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <MetricCard
              title="Monthly Revenue"
              value="$12,340"
              change="12%"
              trend="up"
              icon={TrendingUp}
              color="success"
            />
            <MetricCard
              title="Student Retention"
              value="89%"
              change="4%"
              trend="down"
              icon={TrendingDown}
              color="primary"
            />
            <AIInsights />
            <RetentionHeatmap />
            <RevenueChart />
          </div>
        );
      case 'students':
        return <StudentRetention />;
      case 'revenue':
        return <RevenueAnalytics />;
      case 'courses':
        return <ClassManagement />;
      case 'calendar':
        return <Calendar />;
      default:
        return <div>Select a tab</div>;
    }
  };

  return <div className="p-6">{renderContent()}</div>;
};

export default EducatorHome;
