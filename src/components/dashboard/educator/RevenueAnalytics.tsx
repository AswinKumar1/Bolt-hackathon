import React, { useState } from 'react';
import { DollarSign, TrendingUp, TrendingDown, Users, Calendar, Target, PieChart, BarChart3 } from 'lucide-react';
import RevenueChart from './RevenueChart';

const RevenueAnalytics: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('6months');
  const [selectedView, setSelectedView] = useState('overview');

  const revenueMetrics = [
    {
      title: 'Total Revenue',
      value: '$148,500',
      change: '+12.5%',
      trend: 'up',
      period: 'Last 6 months',
    },
    {
      title: 'Monthly Recurring Revenue',
      value: '$24,750',
      change: '+8.3%',
      trend: 'up',
      period: 'This month',
    },
    {
      title: 'Average Revenue Per Student',
      value: '$119',
      change: '+5.2%',
      trend: 'up',
      period: 'Per month',
    },
    {
      title: 'Revenue Growth Rate',
      value: '15.4%',
      change: '+2.1%',
      trend: 'up',
      period: 'Month over month',
    },
  ];

  const revenueBySource = [
    { source: 'Group Classes', amount: 18750, percentage: 75.8, students: 892 },
    { source: 'One-on-One Tutoring', amount: 4200, percentage: 17.0, students: 84 },
    { source: 'Premium Packages', amount: 1350, percentage: 5.5, students: 27 },
    { source: 'Workshop Sessions', amount: 450, percentage: 1.8, students: 18 },
  ];

  const courseProfitability = [
    {
      course: 'Algebra Fundamentals',
      revenue: '$6,750',
      students: 145,
      avgPrice: '$47',
      profitMargin: '68%',
      trend: 'up',
      change: '+12%',
    },
    {
      course: 'Calculus I',
      revenue: '$7,680',
      students: 128,
      avgPrice: '$60',
      profitMargin: '72%',
      trend: 'up',
      change: '+8%',
    },
    {
      course: 'Statistics',
      revenue: '$5,600',
      students: 112,
      avgPrice: '$50',
      profitMargin: '65%',
      trend: 'up',
      change: '+15%',
    },
    {
      course: 'Geometry',
      revenue: '$4,410',
      students: 98,
      avgPrice: '$45',
      profitMargin: '62%',
      trend: 'down',
      change: '-3%',
    },
  ];

  const projectedRevenue = [
    { month: 'Jul', projected: 26200, actual: null },
    { month: 'Aug', projected: 27800, actual: null },
    { month: 'Sep', projected: 29100, actual: null },
    { month: 'Oct', projected: 30500, actual: null },
    { month: 'Nov', projected: 32000, actual: null },
    { month: 'Dec', projected: 33800, actual: null },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-neutral-800">Revenue Analytics</h2>
          <p className="text-neutral-600 mt-1">Comprehensive revenue analysis and financial insights</p>
        </div>
        <div className="flex items-center space-x-3">
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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

      {/* Revenue Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {revenueMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="w-8 h-8 text-primary-500" />
              <div className="flex items-center space-x-1">
                {metric.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4 text-success-500" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-500" />
                )}
                <span className={`text-sm font-medium ${
                  metric.trend === 'up' ? 'text-success-600' : 'text-red-600'
                }`}>
                  {metric.change}
                </span>
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-neutral-800 mb-1">{metric.value}</p>
              <p className="text-sm font-medium text-neutral-600 mb-1">{metric.title}</p>
              <p className="text-xs text-neutral-500">{metric.period}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-xl border border-neutral-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-neutral-800">Revenue Trend</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedView('overview')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                  selectedView === 'overview'
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-neutral-600 hover:text-neutral-800'
                }`}
              >
                Historical
              </button>
              <button
                onClick={() => setSelectedView('projected')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                  selectedView === 'projected'
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-neutral-600 hover:text-neutral-800'
                }`}
              >
                Projected
              </button>
            </div>
          </div>
          <RevenueChart />
        </div>

        {/* Revenue by Source */}
        <div className="bg-white rounded-xl border border-neutral-200 p-6">
          <h3 className="text-xl font-semibold text-neutral-800 mb-6">Revenue by Source</h3>
          <div className="space-y-4">
            {revenueBySource.map((source, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-neutral-800">{source.source}</h4>
                    <span className="text-lg font-bold text-primary-600">${source.amount.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-neutral-600">
                    <span>{source.students} students</span>
                    <span>{source.percentage}% of total</span>
                  </div>
                  <div className="mt-2">
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div
                        className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${source.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Course Profitability Analysis */}
      <div className="bg-white rounded-xl border border-neutral-200 p-6">
        <h3 className="text-xl font-semibold text-neutral-800 mb-6">Course Profitability Analysis</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="text-left py-3 px-4 font-medium text-neutral-700">Course</th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">Revenue</th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">Students</th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">Avg Price</th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">Profit Margin</th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">Trend</th>
              </tr>
            </thead>
            <tbody>
              {courseProfitability.map((course, index) => (
                <tr key={index} className="border-b border-neutral-100 hover:bg-neutral-50">
                  <td className="py-4 px-4">
                    <div className="font-medium text-neutral-800">{course.course}</div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-semibold text-primary-600">{course.revenue}</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-600">{course.students}</td>
                  <td className="py-4 px-4 text-neutral-600">{course.avgPrice}</td>
                  <td className="py-4 px-4">
                    <span className="font-medium text-success-600">{course.profitMargin}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-1">
                      {course.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4 text-success-500" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-500" />
                      )}
                      <span className={`text-sm font-medium ${
                        course.trend === 'up' ? 'text-success-600' : 'text-red-600'
                      }`}>
                        {course.change}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Revenue Projections */}
      <div className="bg-white rounded-xl border border-neutral-200 p-6">
        <h3 className="text-xl font-semibold text-neutral-800 mb-6">Revenue Projections</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-neutral-800 mb-4">6-Month Forecast</h4>
            <div className="space-y-3">
              {projectedRevenue.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-primary-50 rounded-lg">
                  <span className="font-medium text-neutral-800">{item.month} 2024</span>
                  <span className="font-bold text-primary-600">${item.projected.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium text-neutral-800 mb-4">Key Insights</h4>
            <div className="space-y-4">
              <div className="p-4 bg-success-50 border border-success-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Target className="w-5 h-5 text-success-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-success-800">Growth Opportunity</p>
                    <p className="text-sm text-success-700">Premium packages showing 25% month-over-month growth</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-primary-50 border border-primary-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <BarChart3 className="w-5 h-5 text-primary-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-primary-800">Seasonal Trend</p>
                    <p className="text-sm text-primary-700">Revenue typically increases 15% during exam seasons</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <PieChart className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-yellow-800">Diversification</p>
                    <p className="text-sm text-yellow-700">Consider expanding workshop offerings for additional revenue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueAnalytics;