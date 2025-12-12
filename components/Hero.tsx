
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { IMAGES } from '../constants/images';

interface HeroProps {
  onNavigate: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero.bg}
          alt="Gym Interior"
          className="w-full h-full object-cover opacity-70"
        />
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-noise opacity-50 mix-blend-overlay"></div>
        {/* Bold Gradient Overlay - Darker at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/80 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto md:mx-0 text-center md:text-left">
            <RevealOnScroll width="100%">
                <div className="flex justify-center md:justify-start">
                    <div className="inline-block px-4 py-2 mb-8 border-l-4 border-brand-red bg-white/5 backdrop-blur-sm">
                        <span className="text-white font-bold text-xs md:text-sm uppercase tracking-[0.2em]">
                        We transform you, <span className="normal-case tracking-normal">अदब से|</span>
                        </span>
                    </div>
                </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200} width="100%">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] text-white mb-8 italic uppercase tracking-tighter drop-shadow-2xl">
                    Unleash <br />
                    <span className="text-brand-red">Your Beast.</span>
                </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={400} width="100%">
                <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-xl leading-relaxed mx-auto md:mx-0 font-medium drop-shadow-md">
                    State-of-the-art equipment, expert trainers, and a community driven by results. 
                    <span className="text-white block mt-2">Experience the hype in Gomti Nagar Extension.</span>
                </p>
            </RevealOnScroll>

            <RevealOnScroll delay={600} width="100%">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start w-full">
                    <button
                    onClick={onNavigate}
                    className="w-full sm:w-auto bg-brand-red text-white px-10 py-5 font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:bg-white hover:text-brand-red transition-all duration-300 skew-x-[-10deg] group shadow-lg shadow-brand-red/30"
                    >
                        <span className="skew-x-[10deg] flex items-center gap-2">
                            Start Free Trial
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                    <button
                    onClick={onNavigate}
                    className="w-full sm:w-auto px-10 py-5 font-black uppercase tracking-widest text-sm border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 skew-x-[-10deg]"
                    >
                        <span className="skew-x-[10deg]">View Packages</span>
                    </button>
                </div>
            </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Hero;
