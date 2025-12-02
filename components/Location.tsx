import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const Location: React.FC = () => {
  return (
    <section className="py-20 bg-brand-gray">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-black rounded-lg overflow-hidden shadow-2xl">
          
          {/* Contact Info Side */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <RevealOnScroll>
                <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-brand-red pl-4 text-center md:text-left">Find Us</h2>
                
                <div className="space-y-8">
                <div className="flex items-start gap-4">
                    <MapPin className="text-brand-red shrink-0 mt-1" size={24} />
                    <div>
                    <h3 className="text-white font-bold mb-1">Address</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        1st Floor, B6/16, Gomti Greens by Emaar,<br />
                        7 Gomti Nagar Extension, Sultanpur Road,<br />
                        Arjunganj, Lucknow-226002,<br />
                        Uttar Pradesh, India.
                    </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <Phone className="text-brand-red shrink-0 mt-1" size={24} />
                    <div>
                    <h3 className="text-white font-bold mb-1">Phone</h3>
                    <a href="tel:9219393008" className="text-gray-400 text-sm hover:text-white transition-colors">
                        9219393008
                    </a>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <Clock className="text-brand-red shrink-0 mt-1" size={24} />
                    <div>
                    <h3 className="text-white font-bold mb-1">Opening Hours</h3>
                    <p className="text-gray-400 text-sm">
                        Mon - Sat: 6:00 AM - 10:00 PM<br />
                        Sun: 4:00 PM - 8:00 PM
                    </p>
                    </div>
                </div>
                </div>

                <div className="mt-10">
                <a 
                    href="https://maps.app.goo.gl/7mAZfzHLyVWjhQqS6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-sm font-bold uppercase text-sm hover:bg-brand-red hover:text-white transition-colors"
                >
                    <Navigation size={18} />
                    Get Directions
                </a>
                </div>
            </RevealOnScroll>
          </div>

          {/* Map Side */}
          <div className="h-[400px] lg:h-auto w-full relative">
            <iframe 
              src="https://maps.google.com/maps?q=The+Sweat+Society+Gomti+Nagar+Extension+Lucknow&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="The Sweat Society Location"
            ></iframe>
            {/* Custom overlay to style map dark mode manually if filter fails on some browsers */}
            <div className="absolute inset-0 bg-brand-red/10 pointer-events-none mix-blend-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;