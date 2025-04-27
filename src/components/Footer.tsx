import React from 'react';
import logo from '../assets/logo.png';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin ,Youtube} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A192F] text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
            <img src={logo} alt="fcc icon" className="h-10 w-auto" />
              {/* <span className="text-xl font-bold">FCC IITH</span> */}
            </div>
            <p className="text-gray-400 mb-6">
              The Finance & Consulting Club at IIT Hyderabad is dedicated to fostering financial literacy and providing students with practical insights into the world of finance.
            </p>
            <div className="flex space-x-4">
              <SocialIcon Icon={Facebook} href="https://www.facebook.com/people/Finance-and-Consulting-Club-IIT-Hyderabad/100084998610177/" />
              <SocialIcon Icon={Youtube} href="https://www.youtube.com/@fcciith" />
              <SocialIcon Icon={Instagram} href="https://www.instagram.com/fcc_iith?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" />
              <SocialIcon Icon={Linkedin} href="https://www.linkedin.com/company/fcc-iith/" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
            <FooterLink href="#home">Home</FooterLink>
            <FooterLink href="https://fcc.gymkhana.iith.ac.in/horizon">Horizon</FooterLink>
            <FooterLink href="https://fcc.gymkhana.iith.ac.in/schedule">Events</FooterLink>
            <FooterLink href="https://fcc.gymkhana.iith.ac.in/team">Teams</FooterLink>
            <FooterLink href="https://fcc.gymkhana.iith.ac.in/resources">Resources</FooterLink>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <FooterLink href="#blogs">Finance Blogs</FooterLink>
              <FooterLink href="#research">Research Papers</FooterLink>
              <FooterLink href="#tutorials">Video Tutorials</FooterLink>
              <FooterLink href="#podcasts">Podcasts</FooterLink>
              <FooterLink href="#courses">Online Courses</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  IIT Hyderabad, Kandi, Sangareddy, Telangana, India - 502285
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <a href="mailto:fcc@iith.ac.in" className="text-gray-300 hover:text-blue-400 transition-colors">
                  fcc@iith.ac.in
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-blue-400 transition-colors">
                  +91 987 654 3210
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Finance Consultancy Club, IIT Hyderabad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  Icon: React.FC<{ className?: string }>;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ Icon, href }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-blue-900/50 p-2 rounded-full text-gray-300 hover:text-white hover:bg-blue-800 transition-colors"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <li>
      <a 
        href={href}
        className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
      >
        {children}
      </a>
    </li>
  );
};

export default Footer;