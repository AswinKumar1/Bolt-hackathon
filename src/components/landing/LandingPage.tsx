import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from './Hero';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { 
  Brain, 
  TrendingUp, 
  Users, 
  Award, 
  CheckCircle, 
  Star,
  ArrowRight,
  DollarSign,
  BookOpen,
  MessageSquare
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Tutor Agent',
      description: 'Personalized learning with advanced AI that adapts to your pace and style',
      color: 'blue'
    },
    {
      icon: DollarSign,
      title: 'Revenue Optimization',
      description: 'Smart pricing and retention strategies that maximize educator earnings',
      color: 'green'
    },
    {
      icon: TrendingUp,
      title: 'Learning Analytics',
      description: 'Deep insights into progress, strengths, and areas for improvement',
      color: 'purple'
    },
    {
      icon: Users,
      title: 'Smart Matching',
      description: 'AI-powered matching between students and the perfect courses or tutors',
      color: 'orange'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Mathematics Student',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The AI tutor helped me improve my calculus grade from C to A+ in just 3 months. The personalized approach made all the difference.',
      rating: 5
    },
    {
      name: 'Dr. Michael Rodriguez',
      role: 'Physics Educator',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'My revenue increased by 45% after using EdTechAI. The retention insights helped me keep more students engaged.',
      rating: 5
    },
    {
      name: 'Emma Thompson',
      role: 'High School Student',
      image: 'https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The scholarship recommendations saved my family thousands of dollars. EdTechAI made quality education accessible.',
      rating: 5
    }
  ];

  const stats = [
    { label: 'Success Rate', value: '94%', description: 'Students improve grades' },
    { label: 'Revenue Growth', value: '45%', description: 'Average educator increase' },
    { label: 'Retention Rate', value: '91%', description: 'Students stay engaged' },
    { label: 'Satisfaction', value: '4.9/5', description: 'User rating' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Hero />

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 sm:text-4xl"
            >
              Powered by Advanced AI Agents
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-xl text-gray-600"
            >
              Our AI agents work together to optimize every aspect of your learning journey
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full hoverable">
                  <div className={`inline-flex p-4 rounded-full mb-4 ${
                    feature.color === 'blue' ? 'bg-blue-100' :
                    feature.color === 'green' ? 'bg-green-100' :
                    feature.color === 'purple' ? 'bg-purple-100' :
                    'bg-orange-100'
                  }`}>
                    <feature.icon className={`h-8 w-8 ${
                      feature.color === 'blue' ? 'text-blue-600' :
                      feature.color === 'green' ? 'text-green-600' :
                      feature.color === 'purple' ? 'text-purple-600' :
                      'text-orange-600'
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-gray-900 sm:text-4xl"
            >
              Success Stories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-xl text-gray-600"
            >
              See how EdTechAI transforms learning and earning
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white sm:text-4xl"
          >
            Ready to Transform Your Learning Experience?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-blue-100"
          >
            Join thousands of students and educators already succeeding with EdTechAI
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" variant="secondary" className="text-lg">
              Start Learning Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-blue-600">
              Become a Tutor
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};