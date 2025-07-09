import React from 'react';
import { Clock } from 'lucide-react';

const Timeline: React.FC = () => {
  const events = [
    {
      time: '7:30 - 8:30 AM',
      title: 'Arrival & Welcome',
      description: 'Arrival, welcome, and breakfast',
    },
    {
      time: '8:30 - 10:30 AM',
      title: 'Wedding Ceremony',
      description: 'Wedding ceremony',
    },
    {
      time: '10:30 - 1:00 PM',
      title: 'Reception & Lunch',
      description: 'Reception and Lunch',
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
      <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6 text-center">
        Wedding Timeline
      </h2>
      
      <div className="space-y-6">
        {events.map((event, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mr-4">
              <Clock className="w-6 h-6 text-gold-600" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {event.title}
                  </h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-sm font-medium">
                    {event.time}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;