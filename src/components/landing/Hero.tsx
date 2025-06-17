import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Users, BookOpen, Brain } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                <span className="block">Smarter Learning.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Sustainable Earning.
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                AI-powered education platform that optimizes student outcomes and educator revenue. 
                Join thousands of learners and teachers transforming education together.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex items-center justify-center">
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                ✨ Free trial • No credit card required • Cancel anytime
              </p>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12"
            >
              <div className="flex items-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-600" />
                  <span className="font-medium text-gray-900">50K+</span> Students
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-green-600" />
                  <span className="font-medium text-gray-900">2K+</span> Educators
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-500" />
                  <span className="font-medium text-gray-900">4.9</span> Rating
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mx-auto w-full lg:max-w-md"
            >
              {/* Main Dashboard Preview */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">AI Tutor</p>
                      <p className="text-sm text-gray-600">Online</p>
                    </div>
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="space-y-2">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">How can I help you learn today?</p>
                    </div>
                    <div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs ml-auto">
                      <p className="text-sm">Explain quantum mechanics</p>
                    </div>
                  </div>
                  
                  {/* Progress Bars */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Mathematics</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '85%' }}
                          transition={{ duration: 1.5, delay: 1 }}
                          className="bg-blue-600 h-2 rounded-full"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Physics</span>
                        <span>72%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '72%' }}
                          transition={{ duration: 1.5, delay: 1.2 }}
                          className="bg-green-600 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-6 -right-6 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
              >
                94% Success Rate
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
              >
                AI-Powered
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};