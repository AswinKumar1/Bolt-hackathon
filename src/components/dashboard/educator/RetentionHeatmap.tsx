import React from 'react';

const RetentionHeatmap: React.FC = () => {
  const courses = [
    'Algebra Fundamentals',
    'Calculus I',
    'Statistics',
    'Geometry',
    'Trigonometry',
    'Pre-Calculus',
  ];

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  // Mock retention data (percentage)
  const retentionData = [
    [95, 92, 89, 91, 94, 96],
    [88, 85, 90, 93, 91, 89],
    [92, 94, 91, 88, 90, 93],
    [96, 93, 95, 92, 94, 91],
    [87, 89, 92, 94, 88, 90],
    [93, 91, 88, 90, 92, 95],
  ];

  const getIntensityClass = (value: number) => {
    if (value >= 95) return 'bg-success-500';
    if (value >= 90) return 'bg-success-400';
    if (value >= 85) return 'bg-yellow-400';
    return 'bg-red-400';
  };

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <div className="min-w-full">
          {/* Header */}
          <div className="flex items-center mb-3">
            <div className="w-32"></div>
            {months.map(month => (
              <div key={month} className="flex-1 text-center text-sm font-medium text-neutral-600 min-w-16">
                {month}
              </div>
            ))}
          </div>
          
          {/* Heatmap */}
          {courses.map((course, courseIndex) => (
            <div key={course} className="flex items-center mb-2 group">
              <div className="w-32 text-sm font-medium text-neutral-700 pr-4 truncate">
                {course}
              </div>
              {retentionData[courseIndex].map((value, monthIndex) => (
                <div key={monthIndex} className="flex-1 px-1">
                  <div
                    className={`h-8 rounded-md ${getIntensityClass(value)} transition-all duration-200 hover:scale-110 cursor-pointer relative group/cell`}
                    title={`${course} - ${months[monthIndex]}: ${value}%`}
                  >
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover/cell:opacity-100 transition-opacity duration-200 z-10">
                      <div className="bg-neutral-800 text-white text-xs rounded-lg px-2 py-1 whitespace-nowrap">
                        <div className="font-medium">{value}% retention</div>
                        <div className="text-neutral-300">{course}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-4">
          <span className="text-neutral-600">Retention Rate:</span>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-success-500 rounded-sm"></div>
            <span>95%+</span>
            <div className="w-3 h-3 bg-success-400 rounded-sm"></div>
            <span>90-94%</span>
            <div className="w-3 h-3 bg-yellow-400 rounded-sm"></div>
            <span>85-89%</span>
            <div className="w-3 h-3 bg-red-400 rounded-sm"></div>
            <span>&lt;85%</span>
          </div>
        </div>
        <div className="text-neutral-600">
          Overall Average: <span className="font-medium text-success-600">91.2%</span>
        </div>
      </div>
    </div>
  );
};

export default RetentionHeatmap;