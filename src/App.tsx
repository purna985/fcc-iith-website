import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import RecentEvents from './components/RecentEvents';
import InstagramSection from './components/InstagramSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0A192F] min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <RecentEvents />
      <InstagramSection />
      <Footer />
    </div>
  );
}

export default App;