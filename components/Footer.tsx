import React from 'react';
import { Instagram, Facebook, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          <div className="max-w-xs">
            <a href="#home" className="flex items-center gap-2 mb-6 group">
                <span className="text-2xl font-black italic tracking-tighter uppercase leading-none">
                    THE <span className="text-brand-red">SWEAT</span> SOCIETY
                </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Lucknow’s premium fitness destination. We are dedicated to helping you achieve your fitness goals in a clean, professional environment.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:gap-24">
            <div>
              <h4 className="font-bold text-white uppercase tracking-widest mb-6 text-sm text-brand-red">Quick Links</h4>
              <ul className="space-y-4 text-gray-400 text-sm font-medium">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#why-us" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white uppercase tracking-widest mb-6 text-sm text-brand-red">Connect</h4>
              <div className="flex gap-4 mb-8">
                <a 
                  href="https://instagram.com/thesweatsocietylko" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-zinc-900 p-3 hover:bg-brand-red transition-colors border border-white/10"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-zinc-900 p-3 hover:bg-brand-red transition-colors border border-white/10"
                >
                  <Facebook size={20} />
                </a>
              </div>
              
              <div>
                <h5 className="font-bold text-white text-xs uppercase tracking-widest mb-2">Call Us</h5>
                <a href="tel:9219393008" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Phone size={16} className="text-brand-red" />
                  <span className="font-bold tracking-wide">9219393008</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} The Sweat Society. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;