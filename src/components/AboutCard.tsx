import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface AboutCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const AboutCard: React.FC<AboutCardProps> = ({ title, description, Icon }) => {
  return (
    <div className="bg-[#162844] rounded-lg shadow-lg p-6 border border-blue-900 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="rounded-full bg-blue-900/30 p-3 w-fit mb-4">
        <Icon className="h-8 w-8 text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};

export default AboutCard;