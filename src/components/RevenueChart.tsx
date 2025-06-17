import React from 'react';

const RevenueChart: React.FC = () => {
  const data = [
    { month: 'Jan', revenue: 18500, students: 180 },
    { month: 'Feb', revenue: 19200, students: 195 },
    { month: 'Mar', revenue: 21800, students: 220 },
    { month: 'Apr', revenue: 20100, students: 205 },
    { month: 'May', revenue: 23400, students: 240 },
    { month: 'Jun', revenue: 24750, students: 247 },
  ];

  const maxRevenue = Math.max(...data.map(d => d.revenue));

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-end h-64">
        {data.map((item, index) => {
          const height = (item.revenue / maxRevenue) * 100;
          return (
            <div key={index} className="flex flex-col items-center space-y-2 group cursor-pointer">
              <div className="relative">
                <div
                  className="w-12 bg-gradient-to-t from-primary-500 to-primary-400 rounded-t-md transition-all duration-300 group-hover:from-primary-600 group-hover:to-primary-500"
                  style={{ height: `${height * 2}px` }}
                ></div>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="bg-neutral-800 dark:bg-neutral-700 text-white text-xs rounded-lg px-2 py-1 whitespace-nowrap border border-neutral-600">
                    <div className="font-medium">${item.revenue.toLocaleString()}</div>
                    <div className="text-neutral-300 dark:text-neutral-400">{item.students} students</div>
                  </div>
                </div>
              </div>
              <span className="text-sm text-neutral-600 dark:text-neutral-300 font-medium transition-colors duration-300">{item.month}</span>
            </div>
          );
        })}
      </div>
      
      <div className="flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-300 transition-colors duration-300">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
            <span>Monthly Revenue</span>
          </div>
        </div>
        <div className="text-right">
          <p className="font-medium text-neutral-800 dark:text-white transition-colors duration-300">Average Growth</p>
          <p className="text-success-600 dark:text-success-400 transition-colors duration-300">+8.3% month over month</p>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;