import React from 'react';
import { ArrowRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

interface CTAWrapperProps {
  onNavigate: () => void;
}

const CTAWrapper: React.FC<CTAWrapperProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5 text-white relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-red/5 blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <RevealOnScroll width="100%">
            <h2 className="text-3xl md:text-5xl font-bold uppercase mb-6 leading-tight tracking-tight text-white">
            Ready to <span className="text-brand-red">Transform?</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
            Stop waiting for the "perfect time". Your future self is created by what you do today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
                onClick={onNavigate}
                className="bg-brand-red text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
                Claim Free Trial
                <ArrowRight size={20} />
            </button>
            <button 
                onClick={onNavigate}
                className="border border-white/20 text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:border-brand-red hover:text-brand-red transition-all duration-300"
            >
                View Plans
            </button>
            </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default CTAWrapper;