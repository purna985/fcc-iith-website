import React, { useRef } from 'react';
import EventCard from './EventCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const RecentEvents: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const events = [
    {
      title: "Horizon 2025 - Day 1️⃣",
      date: "January 31, 2025",
      // image: "https://images.pexels.com/photos/7567557/pexels-photo-7567557.jpeg",
      description: "The most exciting management fest by FCC IITH is coming back bigger and better this year, loaded with inspiring talks, exciting events and ofcourse, Pronites!! We're Coming soon..."
    },
    {
      title: "Pre - Horizon",
      date: "January 11, 2025",
      // image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
      description: "Kickstarting the most exciting Management fest by FCC IITH🔥. Join us for aan inspiring talk by renowned Youtuber Mr. Pranjal Kamra and the theme launch for Horizon 2025"
    },
    {
      title: "Trading 101 : Master the basics of Stock Trading",
      date: "November 9, 2024",
      // image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg",
      description: "Join Us and kickstart your trading journey today📈"
    },
    {
      title: "Risk Management Seminar",
      date: "October 20, 2024",
      // image: "https://images.pexels.com/photos/7876303/pexels-photo-7876303.jpeg",
      description: "Comprehensive overview of market risk, credit risk, and operational risk management practices."
    },
    {
      title: "Intro to Finance and Stock Market",
      date: "December 10, 2024",
      // image: "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg",
      description: "Expert-led sessions on capital budgeting, financial modeling, and corporate valuation methods."
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="events" className="py-20 bg-[#0A192F]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Recent Events</h2>
            <div className="w-20 h-1 bg-blue-500 mb-4"></div>
            <p className="text-gray-300 max-w-2xl">
              Explore our recent workshops, seminars, and conferences that help students develop practical financial skills.
            </p>
          </div>
          <div className="hidden md:flex space-x-2">
            <button 
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-blue-900/30 text-white hover:bg-blue-800/50 transition-colors duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-blue-900/30 text-white hover:bg-blue-800/50 transition-colors duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto pb-8 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {events.map((event, index) => (
              <EventCard 
                key={index}
                title={event.title}
                date={event.date}
                image={event.image}
                description={event.description}
              />
            ))}
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0A192F] to-transparent pointer-events-none z-10 hidden md:block"></div>
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0A192F] to-transparent pointer-events-none z-10 hidden md:block"></div>
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <div className="inline-flex space-x-3">
            <button 
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-blue-900/30 text-white hover:bg-blue-800/50 transition-colors duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-blue-900/30 text-white hover:bg-blue-800/50 transition-colors duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentEvents;