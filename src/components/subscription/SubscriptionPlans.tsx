import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Crown, Zap } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const SubscriptionPlans: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      price: 29,
      description: 'Perfect for getting started',
      icon: Zap,
      color: 'blue',
      features: [
        '5 AI tutoring sessions/month',
        'Basic progress tracking',
        'Email support',
        'Mobile app access',
        'Community forums'
      ]
    },
    {
      name: 'Premium',
      price: 79,
      description: 'Most popular choice',
      icon: Sparkles,
      color: 'purple',
      popular: true,
      features: [
        'Unlimited AI tutoring sessions',
        'Advanced analytics',
        'Priority support',
        'Custom study plans',
        'Offline content access',
        'Video conferencing',
        'Progress certificates'
      ]
    },
    {
      name: 'Unlimited',
      price: 149,
      description: 'For serious learners',
      icon: Crown,
      color: 'gold',
      features: [
        'Everything in Premium',
        '1-on-1 expert sessions',
        'Personalized coaching',
        'Advanced AI insights',
        'Custom curriculum',
        'Family sharing (up to 5)',
        'Priority scheduling',
        'Scholarship recommendations'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Choose Your Learning Journey
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 mb-8"
        >
          AI-powered education plans tailored to your goals
        </motion.p>
        
        {/* Scholarship Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center space-x-2">
            <Sparkles className="h-5 w-5 text-green-600" />
            <span className="font-medium text-green-800">
              🎓 You may qualify for up to 40% scholarship! 
            </span>
            <Button variant="outline" size="sm">Check Eligibility</Button>
          </div>
        </motion.div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="relative"
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}
            
            <Card className={`p-8 h-full ${plan.popular ? 'ring-2 ring-purple-600 shadow-lg' : ''} hoverable`}>
              <div className="text-center mb-6">
                <div className={`inline-flex p-3 rounded-full mb-4 ${
                  plan.color === 'blue' ? 'bg-blue-100' :
                  plan.color === 'purple' ? 'bg-purple-100' :
                  'bg-yellow-100'
                }`}>
                  <plan.icon className={`h-8 w-8 ${
                    plan.color === 'blue' ? 'text-blue-600' :
                    plan.color === 'purple' ? 'text-purple-600' :
                    'text-yellow-600'
                  }`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? 'primary' : 'outline'}
                className="w-full"
              >
                {plan.popular ? 'Start Premium Trial' : `Choose ${plan.name}`}
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Features Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            All plans include our core AI features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'AI Tutor Agent', description: 'Personalized tutoring sessions' },
              { title: 'Pricing Agent', description: 'Smart subscription optimization' },
              { title: 'Retention Agent', description: 'Learning engagement tracking' },
              { title: 'Matching Agent', description: 'Perfect course recommendations' }
            ].map((feature, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <Sparkles className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Enterprise Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-12 text-center"
      >
        <Card className="p-8 bg-gradient-to-r from-gray-50 to-blue-50">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Enterprise & Family Plans
          </h3>
          <p className="text-gray-600 mb-6">
            Custom solutions for schools, organizations, and families
          </p>
          <div className="space-x-4">
            <Button variant="outline">Contact Sales</Button>
            <Button>Family Plan (Save 30%)</Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};