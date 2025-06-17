import React, { useState } from 'react';
import { Users, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Clock, Target } from 'lucide-react';
import RetentionHeatmap from './RetentionHeatmap';

const StudentRetention: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('6months');

  const retentionData = [
    {
      course: 'Algebra Fundamentals',
      totalStudents: 145,
      retained: 138,
      retentionRate: 95.2,
      trend: 'up',
      change: '+2.1%',
      riskFactors: ['Low engagement in week 3-4', 'Missed assignments'],
      strengths: ['Interactive problem solving', 'Peer collaboration'],
    },
    {
      course: 'Calculus I',
      totalStudents: 128,
      retained: 115,
      retentionRate: 89.8,
      trend: 'down',
      change: '-1.5%',
      riskFactors: ['Complex concepts', 'Insufficient practice time'],
      strengths: ['Visual learning aids', 'Step-by-step guidance'],
    },
    {
      course: 'Statistics',
      totalStudents: 112,
      retained: 106,
      retentionRate: 94.6,
      trend: 'up',
      change: '+3.2%',
      riskFactors: ['Data interpretation challenges'],
      strengths: ['Real-world applications', 'Interactive simulations'],
    },
    {
      course: 'Geometry',
      totalStudents: 98,
      retained: 85,
      retentionRate: 86.7,
      trend: 'down',
      change: '-4.1%',
      riskFactors: ['Spatial reasoning difficulties', 'Proof writing challenges'],
      strengths: ['Visual demonstrations', 'Hands-on activities'],
    },
  ];

  const keyFactors = [
    {
      factor: 'Engagement Level',
      impact: 'High',
      description: 'Students with >80% engagement have 95% retention rate',
      recommendation: 'Implement gamification and interactive elements',
    },
    {
      factor: 'Assignment Completion',
      impact: 'High',
      description: 'Regular assignment submission correlates with 92% retention',
      recommendation: 'Provide timely feedback and support for struggling students',
    },
    {
      factor: 'Peer Interaction',
      impact: 'Medium',
      description: 'Students in study groups show 15% higher retention',
      recommendation: 'Facilitate peer learning opportunities and group projects',
    },
    {
      factor: 'Instructor Feedback',
      impact: 'Medium',
      description: 'Weekly feedback increases retention by 12%',
      recommendation: 'Establish regular check-ins and personalized guidance',
    },
  ];

  const overallStats = {
    totalStudents: 1247,
    averageRetention: 91.2,
    atRiskStudents: 87,
    improvedCourses: 4,
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-white transition-colors duration-300">Student Retention Analytics</h2>
          <p className="text-neutral-600 dark:text-neutral-300 mt-1 transition-colors duration-300">Comprehensive analysis of student retention patterns and key factors</p>
        </div>
        <div className="flex items-center space-x-3">
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 border border-neutral-300 dark:border-neutral-500 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white transition-colors duration-300"
          >
            <option value="3months">Last 3 months</option>
            <option value="6months">Last 6 months</option>
            <option value="12months">Last 12 months</option>
          </select>
          <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all duration-200">
            Export Report
          </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-600 p-6 transition-colors duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-neutral-600 dark:text-neutral-300 transition-colors duration-300">Total Students</p>
              <p className="text-2xl font-bold text-neutral-800 dark:text-white transition-colors duration-300">{overallStats.totalStudents.toLocaleString()}</p>
            </div>
            <Users className="w-8 h-8 text-primary-500" />
          </div>
        </div>
        <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-600 p-6 transition-colors duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-neutral-600 dark:text-neutral-300 transition-colors duration-300">Average Retention</p>
              <p className="text-2xl font-bold text-success-600 dark:text-success-400 transition-colors duration-300">{overallStats.averageRetention}%</p>
            </div>
            <Target className="w-8 h-8 text-success-500" />
          </div>
        </div>
        <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-600 p-6 transition-colors duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-neutral-600 dark:text-neutral-300 transition-colors duration-300">At-Risk Students</p>
              <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 transition-colors duration-300">{overallStats.atRiskStudents}</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-600 p-6 transition-colors duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-neutral-600 dark:text-neutral-300 transition-colors duration-300">Improved Courses</p>
              <p className="text-2xl font-bold text-primary-600 dark:text-primary-400 transition-colors duration-300">{overallStats.improvedCourses}</p>
            </div>
            <TrendingUp className="w-8 h-8 text-primary-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Retention Heatmap */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-600 p-6 transition-colors duration-300">
          <h3 className="text-xl font-semibold text-neutral-800 dark:text-white mb-6 transition-colors duration-300">Retention Heatmap</h3>
          <RetentionHeatmap />
        </div>

        {/* Key Factors Analysis */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-600 p-6 transition-colors duration-300">
          <h3 className="text-xl font-semibold text-neutral-800 dark:text-white mb-6 transition-colors duration-300">Key Retention Factors</h3>
          <div className="space-y-4">
            {keyFactors.map((factor, index) => (
              <div key={index} className="border border-neutral-200 dark:border-neutral-600 rounded-lg p-4 transition-colors duration-300">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-neutral-800 dark:text-white transition-colors duration-300">{factor.factor}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    factor.impact === 'High' ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                  } transition-colors duration-300`}>
                    {factor.impact} Impact
                  </span>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2 transition-colors duration-300">{factor.description}</p>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-success-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-success-700 dark:text-success-400 transition-colors duration-300">{factor.recommendation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Course Retention Table */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-600 p-6 transition-colors duration-300">
        <h3 className="text-xl font-semibold text-neutral-800 dark:text-white mb-6 transition-colors duration-300">Course-by-Course Analysis</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200 dark:border-neutral-600 transition-colors duration-300">
                <th className="text-left py-3 px-4 font-medium text-neutral-700 dark:text-neutral-200 transition-colors duration-300">Course</th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700 dark:text-neutral-200 transition-colors duration-300">Students</th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700 dark:text-neutral-200 transition-colors duration-300">Retained</th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700 dark:text-neutral-200 transition-colors duration-300">Rate</th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700 dark:text-neutral-200 transition-colors duration-300">Trend</th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700 dark:text-neutral-200 transition-colors duration-300">Risk Factors</th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700 dark:text-neutral-200 transition-colors duration-300">Strengths</th>
              </tr>
            </thead>
            <tbody>
              {retentionData.map((course, index) => (
                <tr key={index} className="border-b border-neutral-100 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors duration-300">
                  <td className="py-4 px-4">
                    <div className="font-medium text-neutral-800 dark:text-white transition-colors duration-300">{course.course}</div>
                  </td>
                  <td className="py-4 px-4 text-neutral-600 dark:text-neutral-300 transition-colors duration-300">{course.totalStudents}</td>
                  <td className="py-4 px-4 text-neutral-600 dark:text-neutral-300 transition-colors duration-300">{course.retained}</td>
                  <td className="py-4 px-4">
                    <span className={`font-medium ${
                      course.retentionRate >= 90 ? 'text-success-600 dark:text-success-400' : 
                      course.retentionRate >= 85 ? 'text-yellow-600 dark:text-yellow-400' : 'text-red-600 dark:text-red-400'
                    } transition-colors duration-300`}>
                      {course.retentionRate}%
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-1">
                      {course.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4 text-success-500" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-500" />
                      )}
                      <span className={`text-sm font-medium ${
                        course.trend === 'up' ? 'text-success-600 dark:text-success-400' : 'text-red-600 dark:text-red-400'
                      } transition-colors duration-300`}>
                        {course.change}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="space-y-1">
                      {course.riskFactors.map((risk, riskIndex) => (
                        <div key={riskIndex} className="flex items-center space-x-1">
                          <AlertTriangle className="w-3 h-3 text-yellow-500" />
                          <span className="text-xs text-neutral-600 dark:text-neutral-300 transition-colors duration-300">{risk}</span>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="space-y-1">
                      {course.strengths.map((strength, strengthIndex) => (
                        <div key={strengthIndex} className="flex items-center space-x-1">
                          <CheckCircle className="w-3 h-3 text-success-500" />
                          <span className="text-xs text-neutral-600 dark:text-neutral-300 transition-colors duration-300">{strength}</span>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentRetention;