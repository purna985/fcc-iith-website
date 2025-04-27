import React from 'react';
import { Heart, MessageSquare } from 'lucide-react';

interface InstaPostProps {
  image: string;
  likes: number;
  comments: number;
}

const InstaPost: React.FC<InstaPostProps> = ({ image, likes, comments }) => {
  return (
    <div className="flex-shrink-0 w-64 bg-[#162844] rounded-lg overflow-hidden shadow-lg border border-blue-900 transition-all duration-300 hover:shadow-xl group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt="Instagram post" 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <div className="flex space-x-4">
            <div className="flex items-center text-white">
              <Heart size={18} className="mr-2" />
              <span>{likes}</span>
            </div>
            <div className="flex items-center text-white">
              <MessageSquare size={18} className="mr-2" />
              <span>{comments}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstaPost;