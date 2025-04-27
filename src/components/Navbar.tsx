import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0A192F] shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logo}
              alt="FCC Logo" 
              className="h-10 w-auto object-contain"
            />
            {/* <span className="text-white font-bold text-2xl">FCC IITH</span> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="https://fcc.gymkhana.iith.ac.in/horizon">Horizon</NavLink>
            <NavLink href="https://fcc.gymkhana.iith.ac.in/schedule">Events</NavLink>
            <NavLink href="https://fcc.gymkhana.iith.ac.in/team">Teams</NavLink>
            <NavLink href="https://fcc.gymkhana.iith.ac.in/resources">Resources</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden transition-all duration-300 bg-[#0A192F] shadow-lg`}
      >
        <div className="container mx-auto px-4 py-2 space-y-3">
          <MobileNavLink href="#home" onClick={toggleMenu}>Home</MobileNavLink>
          <MobileNavLink href="https://fcc.gymkhana.iith.ac.in/horizon" onClick={toggleMenu}>Horizon</MobileNavLink>
          <MobileNavLink href="https://fcc.gymkhana.iith.ac.in/schedule" onClick={toggleMenu}>Events</MobileNavLink>
          <MobileNavLink href="https://fcc.gymkhana.iith.ac.in/team" onClick={toggleMenu}>Teams</MobileNavLink>
          <MobileNavLink href="https://fcc.gymkhana.iith.ac.in/resources" onClick={toggleMenu}>Resources</MobileNavLink>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a 
      href={href}
      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-lg font-medium tracking-wide"
    >
      {children}
    </a>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, onClick, children }) => {
  return (
    <a 
      href={href}
      onClick={onClick}
      className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 py-2 text-lg font-medium tracking-wide"
    >
      {children}
    </a>
  );
};

export default Navbar;