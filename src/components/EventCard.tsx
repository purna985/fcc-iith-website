import React from 'react';

interface EventCardProps {
  title: string;
  date: string;
  image: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, description }) => {
  return (
    <div className="flex-shrink-0 w-72 bg-[#162844] rounded-lg overflow-hidden shadow-lg border border-blue-900 transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* <img 
        src={image} 
        alt={title} 
        className="w-full h-40 object-cover"
      /> */}
      <div className="p-5">
        <p className="text-blue-400 text-sm font-medium mb-2">{date}</p>
        <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <button className="text-blue-400 font-medium text-sm hover:text-blue-300 transition-colors duration-300">
          Read More →
        </button>
      </div>
    </div>
  );
};

export default EventCard;