import React from 'react';
// import logo from '../assets/logo.png';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-b from-[#0A192F] to-[#121212] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 h-40 w-40 rounded-full bg-blue-600 filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 h-60 w-60 rounded-full bg-purple-600 filter blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 py-16 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            {/* <img 
              src={logo}
              alt="FCC Logo" 
              className="w-24 md:w-40 h-auto object-contain"
            /> */}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Finance & Consulting Club
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-300 mb-8">
            Indian Institute of Technology Hyderabad
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Bridging the gap between academic finance and real-world markets through education, consultation, and research.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <button
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg transition-transform hover:scale-105"
              onClick={() => window.open("https://www.instagram.com/fcc_iith", "_blank", "noopener,noreferrer")}
            >
              Discover More
            </button>
            <button className="px-8 py-3 bg-transparent border border-blue-400 text-blue-400 font-medium rounded-lg transition-transform hover:scale-105" onClick={() => window.open("https://www.instagram.com/p/DIjCgWdTbGm/", "_blank", "noopener,noreferrer")} >
              Join Us
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;