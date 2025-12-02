import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'membership') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    onNavigate('home');
    // Allow state update to happen then scroll
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const navLinks = [
    { name: 'Why Us', href: '#why-us' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md border-white/10 py-4 shadow-lg' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2 group">
          <span className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase leading-none">
            THE <span className="text-brand-red">SWEAT</span> SOCIETY
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.href)}
              className="text-sm uppercase tracking-wide font-medium text-white/80 hover:text-brand-red transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-red after:transition-all hover:after:w-full"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => onNavigate('membership')}
            className="bg-brand-red text-white px-6 py-2 rounded-sm font-bold uppercase text-sm tracking-wide hover:bg-red-700 transition-colors"
          >
            Join Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-brand-red transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col items-center justify-center space-y-8`}
        style={{ top: '0', height: '100vh' }}
      >
        <button 
            className="absolute top-6 right-6 text-white/60 hover:text-brand-red"
            onClick={() => setIsOpen(false)}
        >
            <X size={32} />
        </button>

        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => handleLinkClick(link.href)}
            className="text-2xl font-bold uppercase tracking-wider text-white hover:text-brand-red transition-colors"
          >
            {link.name}
          </button>
        ))}
        <button
          onClick={() => {
            setIsOpen(false);
            onNavigate('membership');
          }}
          className="bg-brand-red text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest mt-4"
        >
          Start Free Trial
        </button>
      </div>
    </nav>
  );
};

export default Navbar;