import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Clock, 
  Users, 
  BookOpen, 
  TrendingUp, 
  Award,
  Filter,
  Search,
  Heart,
  Play
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ProgressBar } from '../ui/ProgressBar';

export const SuggestedCourses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Courses', count: 24 },
    { id: 'mathematics', label: 'Mathematics', count: 8 },
    { id: 'science', label: 'Science', count: 6 },
    { id: 'technology', label: 'Technology', count: 5 },
    { id: 'language', label: 'Languages', count: 3 },
    { id: 'business', label: 'Business', count: 2 }
  ];

  const suggestedCourses = [
    {
      id: 1,
      title: 'Advanced Calculus Mastery',
      instructor: 'Dr. Sarah Chen',
      rating: 4.9,
      students: 2847,
      duration: '12 weeks',
      level: 'Advanced',
      price: 89,
      originalPrice: 129,
      category: 'mathematics',
      image: 'https://images.pexels.com/photos/6256/water-hand-mathematics-geometry.jpg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Master advanced calculus concepts with AI-powered personalized learning paths.',
      tags: ['Calculus', 'Mathematics', 'Problem Solving'],
      matchScore: 95,
      trending: true
    },
    {
      id: 2,
      title: 'Quantum Physics Fundamentals',
      instructor: 'Prof. Michael Rodriguez',
      rating: 4.8,
      students: 1923,
      duration: '10 weeks',
      level: 'Intermediate',
      price: 79,
      originalPrice: 99,
      category: 'science',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Explore the fascinating world of quantum mechanics with interactive simulations.',
      tags: ['Physics', 'Quantum', 'Theory'],
      matchScore: 88,
      trending: false
    },
    {
      id: 3,
      title: 'Machine Learning with Python',
      instructor: 'Dr. Alex Rivera',
      rating: 4.9,
      students: 3456,
      duration: '16 weeks',
      level: 'Intermediate',
      price: 149,
      originalPrice: 199,
      category: 'technology',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Build real-world ML applications with hands-on projects and AI mentorship.',
      tags: ['Python', 'AI', 'Machine Learning'],
      matchScore: 92,
      trending: true
    },
    {
      id: 4,
      title: 'Organic Chemistry Lab',
      instructor: 'Dr. Emma Thompson',
      rating: 4.7,
      students: 1567,
      duration: '14 weeks',
      level: 'Advanced',
      price: 119,
      originalPrice: 159,
      category: 'science',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Master organic chemistry through virtual lab experiments and AI-guided practice.',
      tags: ['Chemistry', 'Lab Work', 'Organic'],
      matchScore: 85,
      trending: false
    },
    {
      id: 5,
      title: 'Spanish Conversation Mastery',
      instructor: 'Maria Gonzalez',
      rating: 4.8,
      students: 2134,
      duration: '8 weeks',
      level: 'Beginner',
      price: 59,
      originalPrice: 79,
      category: 'language',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Achieve fluency through AI-powered conversation practice and cultural immersion.',
      tags: ['Spanish', 'Conversation', 'Culture'],
      matchScore: 78,
      trending: false
    },
    {
      id: 6,
      title: 'Digital Marketing Strategy',
      instructor: 'James Wilson',
      rating: 4.6,
      students: 1876,
      duration: '6 weeks',
      level: 'Beginner',
      price: 69,
      originalPrice: 89,
      category: 'business',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Learn modern digital marketing techniques with real campaign analysis.',
      tags: ['Marketing', 'Digital', 'Strategy'],
      matchScore: 82,
      trending: true
    }
  ];

  const filteredCourses = suggestedCourses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300';
      case 'Intermediate': return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300';
      case 'Advanced': return 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300';
      default: return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white"
      >
        <h1 className="text-3xl font-bold mb-2">Suggested Courses 🎯</h1>
        <p className="opacity-90">AI-curated courses based on your interests and learning goals</p>
        <div className="mt-4 flex items-center space-x-6">
          <div className="flex items-center">
            <Star className="h-5 w-5 mr-2" />
            <span className="text-sm">Personalized matches</span>
          </div>
          <div className="flex items-center">
            <TrendingUp className="h-5 w-5 mr-2" />
            <span className="text-sm">Trending topics</span>
          </div>
          <div className="flex items-center">
            <Award className="h-5 w-5 mr-2" />
            <span className="text-sm">Expert instructors</span>
          </div>
        </div>
      </motion.div>

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Search courses, instructors, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.label} ({category.count})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden hoverable h-full flex flex-col">
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                {course.trending && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Trending
                  </div>
                )}
                <button className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors">
                  <Heart className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                </button>
                <div className="absolute bottom-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {course.matchScore}% Match
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 flex-1">
                    {course.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center mb-3">
                  <img
                    src={`https://images.pexels.com/photos/${1000000 + course.id}/pexels-photo-${1000000 + course.id}.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop`}
                    alt={course.instructor}
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{course.instructor}</p>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                      <span className="text-xs text-gray-600 dark:text-gray-300">{course.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {course.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students.toLocaleString()}
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">${course.price}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 line-through">${course.originalPrice}</span>
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                      {Math.round((1 - course.price / course.originalPrice) * 100)}% off
                    </span>
                  </div>
                </div>

                <div className="mt-auto space-y-2">
                  <Button className="w-full flex items-center justify-center">
                    <Play className="h-4 w-4 mr-2" />
                    Start Learning
                  </Button>
                  <button className="w-full flex items-center justify-center px-4 py-2 border-2 border-blue-300 dark:border-blue-400 text-blue-400 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors font-medium">
                    Preview Course
                  </button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No courses found</h3>
          <p className="text-gray-600 dark:text-gray-300">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Interest-based Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Based on Your Learning History
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { subject: 'Advanced Mathematics', confidence: 92, reason: 'High performance in Calculus' },
              { subject: 'Data Science', confidence: 88, reason: 'Interest in Python programming' },
              { subject: 'Physics', confidence: 85, reason: 'Strong analytical skills' }
            ].map((recommendation, index) => (
              <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">{recommendation.subject}</h4>
                <div className="mb-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{recommendation.confidence}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${recommendation.confidence}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-2 rounded-full bg-purple-600"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{recommendation.reason}</p>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
};