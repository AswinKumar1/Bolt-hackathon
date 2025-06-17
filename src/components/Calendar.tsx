import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Clock, Users, Video, MapPin } from 'lucide-react';

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 0, 15)); // January 15, 2024
  
  const events = [
    {
      id: 1,
      title: 'Algebra Fundamentals',
      time: '10:00 AM',
      duration: '1 hour',
      students: 32,
      type: 'class',
      location: 'Room A',
      date: new Date(2024, 0, 15),
    },
    {
      id: 2,
      title: 'One-on-One: John Smith',
      time: '2:00 PM',
      duration: '30 mins',
      students: 1,
      type: 'tutoring',
      location: 'Online',
      date: new Date(2024, 0, 15),
    },
    {
      id: 3,
      title: 'Calculus I',
      time: '2:00 PM',
      duration: '1.5 hours',
      students: 28,
      type: 'class',
      location: 'Room B',
      date: new Date(2024, 0, 16),
    },
    {
      id: 4,
      title: 'Statistics Review',
      time: '4:00 PM',
      duration: '1 hour',
      students: 24,
      type: 'class',
      location: 'Room A',
      date: new Date(2024, 0, 17),
    },
  ];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + (direction === 'next' ? 1 : -1));
      return newDate;
    });
  };

  const isToday = (day: number) => {
    const today = new Date();
    return day === today.getDate() && 
           currentDate.getMonth() === today.getMonth() && 
           currentDate.getFullYear() === today.getFullYear();
  };

  const getEventsForDay = (day: number) => {
    return events.filter(event => 
      event.date.getDate() === day &&
      event.date.getMonth() === currentDate.getMonth() &&
      event.date.getFullYear() === currentDate.getFullYear()
    );
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'class': return 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-white border-primary-200 dark:border-primary-600';
      case 'tutoring': return 'bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-white border-success-200 dark:border-success-600';
      default: return 'bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-white border-neutral-200 dark:border-neutral-600';
    }
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-white transition-colors duration-300">Smart Scheduling</h2>
          <p className="text-neutral-600 dark:text-neutral-300 mt-1 transition-colors duration-300">Manage your classes and tutoring sessions</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all duration-200 shadow-sm hover:shadow-md">
          <Plus className="w-5 h-5" />
          <span>Schedule Session</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-2 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-600 p-6 transition-colors duration-300">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-white transition-colors duration-300">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => navigateMonth('prev')}
                className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5 text-neutral-600 dark:text-white" />
              </button>
              <button
                onClick={() => navigateMonth('next')}
                className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5 text-neutral-600 dark:text-white" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="p-2 text-center text-sm font-medium text-neutral-600 dark:text-white transition-colors duration-300">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {/* Empty cells for days before the first day of the month */}
            {Array.from({ length: firstDay }, (_, i) => (
              <div key={`empty-${i}`} className="p-2 h-24"></div>
            ))}
            
            {/* Days of the month */}
            {Array.from({ length: daysInMonth }, (_, i) => {
              const day = i + 1;
              const dayEvents = getEventsForDay(day);
              const today = isToday(day);
              
              return (
                <div
                  key={day}
                  className={`p-2 h-24 border border-neutral-100 dark:border-neutral-600 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 cursor-pointer transition-all duration-200 ${
                    today ? 'bg-primary-50 dark:bg-primary-900/30 border-primary-200 dark:border-primary-700' : ''
                  }`}
                >
                  <div className={`text-sm font-medium ${today ? 'text-primary-700 dark:text-white' : 'text-neutral-800 dark:text-white'} transition-colors duration-300`}>
                    {day}
                  </div>
                  <div className="mt-1 space-y-1">
                    {dayEvents.slice(0, 2).map(event => (
                      <div
                        key={event.id}
                        className={`text-xs px-2 py-1 rounded border ${getEventTypeColor(event.type)} truncate transition-colors duration-300`}
                      >
                        {event.time}
                      </div>
                    ))}
                    {dayEvents.length > 2 && (
                      <div className="text-xs text-neutral-500 dark:text-neutral-300 transition-colors duration-300">+{dayEvents.length - 2} more</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-600 p-6 transition-colors duration-300">
          <h3 className="text-xl font-semibold text-neutral-800 dark:text-white mb-4 transition-colors duration-300">Today's Schedule</h3>
          <div className="space-y-4">
            {getEventsForDay(15).map(event => (
              <div key={event.id} className="border border-neutral-200 dark:border-neutral-600 rounded-lg p-4 hover:shadow-md transition-all duration-200">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-neutral-800 dark:text-white transition-colors duration-300">{event.title}</h4>
                    <div className="flex items-center space-x-2 text-sm text-neutral-600 dark:text-neutral-200 mt-1 transition-colors duration-300">
                      <Clock className="w-4 h-4" />
                      <span>{event.time} ({event.duration})</span>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-200 transition-colors duration-300">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{event.students} student{event.students > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {event.location === 'Online' ? (
                      <Video className="w-4 h-4" />
                    ) : (
                      <MapPin className="w-4 h-4" />
                    )}
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-neutral-200 dark:border-neutral-600 transition-colors duration-300">
                  <button className="w-full px-3 py-2 bg-primary-500 text-white text-sm rounded-md hover:bg-primary-600 transition-all duration-200">
                    {event.location === 'Online' ? 'Join Meeting' : 'Mark Present'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* AI Scheduling Suggestion */}
          <div className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-success-50 dark:from-primary-900/20 dark:to-success-900/20 border border-primary-200 dark:border-primary-700 rounded-lg transition-colors duration-300">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-primary-500 rounded-lg">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-neutral-800 dark:text-white mb-1 transition-colors duration-300">AI Suggestion</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-200 mb-2 transition-colors duration-300">
                  Consider scheduling a follow-up session for John Smith. His recent performance suggests he'd benefit from additional support.
                </p>
                <button className="text-sm font-medium text-primary-600 dark:text-primary-300 hover:text-primary-700 dark:hover:text-primary-200 transition-colors duration-300">
                  Schedule Follow-up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;