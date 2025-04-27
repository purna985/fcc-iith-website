import React, { useRef } from 'react';
import InstaPost from './InstaPost';
import { Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import images from '../assets/images';

const InstagramSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const posts = [
    {
      image: "../src/assets/images/img_0.jpg",
      likes: 40,
      comments: 0
    },
    {
      image: "../src/assets/images/img_1.jpg",
      likes: 153,
      comments: 0
    },
    {
      image: "../src/assets/images/img_2.jpg",
      likes: 56,
      comments: 2
    },
    {
      image: "../src/assets/images/img_3.jpg",
      likes: 138,
      comments: 0
    },
    {
      image: "../src/assets/images/img_4.jpg",
      likes: 49,
      comments: 0
    },
    {
      image: "../src/assets/images/img_5.jpg",
      likes: 70,
      comments: 4
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
    <section className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <div className="flex items-center mb-4">
              <Instagram className="text-pink-500 mr-3" size={28} />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Follow Us</h2>
            </div>
            <p className="text-gray-300 max-w-2xl mb-6 md:mb-0">
              Stay updated with our latest events, workshops, and finance insights on Instagram.
            </p>
          </div>
          <a 
            href="https://www.instagram.com/fcc_iith" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium transition-transform hover:scale-105"
          >
            Follow
          </a>
        </div>
        
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto pb-8 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {posts.map((post, index) => (
              <InstaPost 
                key={index}
                image={post.image}
                likes={post.likes}
                comments={post.comments}
              />
            ))}
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#121212] to-transparent pointer-events-none z-10 hidden md:block"></div>
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#121212] to-transparent pointer-events-none z-10 hidden md:block"></div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-flex space-x-3">
            <button 
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;