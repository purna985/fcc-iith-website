import React from 'react';
import AboutCard from './AboutCard';
import { LineChart, DollarSign, Users, Briefcase, GraduationCap, Globe } from 'lucide-react';

const AboutUs: React.FC = () => {
  const cards = [
    {
      title: "Market Analysis",
      description: "Our team analyzes market trends and provides comprehensive reports on various sectors and industries.",
      Icon: LineChart
    },
    {
      title: "Financial Advisory",
      description: "Get expert financial advice from our team of experienced consultants with deep industry knowledge.",
      Icon: DollarSign
    },
    {
      title: "Student Mentorship",
      description: "We mentor students interested in finance careers through workshops and one-on-one sessions.",
      Icon: Users
    },
    {
      title: "Corporate Partnerships",
      description: "We collaborate with leading financial institutions to bring industry expertise to campus.",
      Icon: Briefcase
    },
    {
      title: "Finance Education",
      description: "Regular seminars and workshops on investment strategies, market analysis, and financial literacy.",
      Icon: GraduationCap
    },
    {
      title: "Global Perspective",
      description: "Stay updated with global financial markets and international economic trends.",
      Icon: Globe
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">About Us</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
          At the Finance and Consulting Club (FCC) of IIT Hyderabad, we’re all about bringing finance, consulting, and product management to life. Our student-led community is driven by curiosity and a passion for learning.
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto">
          We’re here to help each other out, learn together, and make the path to careers in finance and consulting a little clearer (and a lot more fun). So, if you’re curious about the world of finance or want to explore what consulting and product management really mean, you’re in the right place.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <AboutCard 
              key={index}
              title={card.title}
              description={card.description}
              Icon={card.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;