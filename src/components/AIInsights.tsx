import React from 'react';
import { Sparkles, TrendingUp, Users, DollarSign, AlertCircle, Target } from 'lucide-react';

const AIInsights: React.FC = () => {
  const insights = [
    {
      type: 'revenue',
      title: 'Revenue Optimization Opportunity',
      description: 'Consider offering premium tutoring sessions for Calculus I students. 73% show interest in additional support.',
      impact: '+$2,400/month potential',
      confidence: 92,
      action: 'Create Premium Package',
      priority: 'high',
    },
    {
      type: 'retention',
      title: 'Student Retention Alert',
      description: 'Geometry class showing 15% decline in engagement. Recommend interactive problem-solving sessions.',
      impact: 'Prevent 12 student departures',
      confidence: 88,
      action: 'Schedule Engagement Boost',
      priority: 'urgent',
    },
    {
      type: 'upsell',
      title: 'Upsell Opportunity',
      description: 'Students completing Algebra Fundamentals have 85% likelihood of enrolling in Pre-Calculus.',
      impact: '+$1,800/month potential',
      confidence: 96,
      action: 'Send Targeted Offers',
      priority: 'medium',
    },
    {
      type: 'performance',
      title: 'Performance Bonus Eligible',
      description: 'You\'ve exceeded retention targets by 12%. Bonus calculation shows $320 additional earnings this month.',
      impact: '+$320 this month',
      confidence: 100,
      action: 'Claim Bonus',
      priority: 'low',
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'revenue': return DollarSign;
      case 'retention': return Users;
      case 'upsell': return TrendingUp;
      case 'performance': return Target;
      default: return Sparkles;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'border-red-200 dark:border-red-700 bg-red-50 dark:bg-red-900/20';
      case 'high': return 'border-yellow-200 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-900/20';
      case 'medium': return 'border-primary-200 dark:border-primary-700 bg-primary-50 dark:bg-primary-900/20';
      case 'low': return 'border-success-200 dark:border-success-700 bg-success-50 dark:bg-success-900/20';
      default: return 'border-neutral-200 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-800';
    }
  };

  const getPriorityDot = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-500';
      case 'high': return 'bg-yellow-500';
      case 'medium': return 'bg-primary-500';
      case 'low': return 'bg-success-500';
      default: return 'bg-neutral-500';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Sparkles className="w-8 h-8 text-primary-500 animate-sparkle" />
            <div className="absolute inset-0 w-8 h-8 bg-primary-500 rounded-full opacity-20 animate-pulse-glow"></div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-neutral-800 dark:text-white transition-colors duration-300">AI Insights</h2>
            <p className="text-neutral-600 dark:text-neutral-300 transition-colors duration-300">Personalized recommendations to optimize your teaching business</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-neutral-600 dark:text-neutral-300 transition-colors duration-300">Last updated</p>
          <p className="text-sm font-medium text-neutral-800 dark:text-white transition-colors duration-300">2 minutes ago</p>
        </div>
      </div>

      {/* AI Insights Cards */}
      <div className="space-y-4">
        {insights.map((insight, index) => {
          const Icon = getIcon(insight.type);
          return (
            <div
              key={index}
              className={`border rounded-xl p-6 transition-all duration-200 hover:shadow-md ${getPriorityColor(insight.priority)}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="p-3 bg-white dark:bg-neutral-700 rounded-lg shadow-sm transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-neutral-800 dark:text-white transition-colors duration-300">{insight.title}</h3>
                      <div className="flex items-center space-x-1">
                        <div className={`w-2 h-2 rounded-full ${getPriorityDot(insight.priority)}`}></div>
                        <span className="text-xs font-medium text-neutral-600 dark:text-neutral-300 capitalize transition-colors duration-300">{insight.priority}</span>
                      </div>
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-200 mb-3 transition-colors duration-300">{insight.description}</p>
                    <div className="flex items-center space-x-6 text-sm">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-success-600" />
                        <span className="font-medium text-success-700 dark:text-success-400 transition-colors duration-300">{insight.impact}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <div className="w-12 bg-neutral-200 dark:bg-neutral-600 rounded-full h-2 transition-colors duration-300">
                            <div
                              className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${insight.confidence}%` }}
                            ></div>
                          </div>
                          <span className="ml-2 text-neutral-600 dark:text-neutral-300 transition-colors duration-300">{insight.confidence}% confidence</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all duration-200 shadow-sm hover:shadow-md">
                  {insight.action}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* AI Performance Summary */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-600 p-6 transition-colors duration-300">
        <h3 className="text-xl font-semibold text-neutral-800 dark:text-white mb-4 transition-colors duration-300">AI Performance Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-3 transition-colors duration-300">
              <Target className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <p className="text-2xl font-bold text-neutral-800 dark:text-white transition-colors duration-300">94%</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 transition-colors duration-300">Prediction Accuracy</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mx-auto mb-3 transition-colors duration-300">
              <DollarSign className="w-8 h-8 text-success-600 dark:text-success-400" />
            </div>
            <p className="text-2xl font-bold text-neutral-800 dark:text-white transition-colors duration-300">$12.5K</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 transition-colors duration-300">Revenue Generated</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-3 transition-colors duration-300">
              <Users className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
            </div>
            <p className="text-2xl font-bold text-neutral-800 dark:text-white transition-colors duration-300">127</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 transition-colors duration-300">Students Retained</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;