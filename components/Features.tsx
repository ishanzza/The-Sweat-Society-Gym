import React from 'react';
import { Star, Clock, ShieldCheck, Trophy } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const features = [
  {
    icon: <Star className="w-8 h-8 text-brand-red" />,
    title: "Top Rated",
    description: "Rated 4.8★ by over 110+ members on Justdial for our quality and community."
  },
  {
    icon: <Clock className="w-8 h-8 text-brand-red" />,
    title: "Open Early",
    description: "Doors open at 6:00 AM daily, perfect for your early morning routine."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand-red" />,
    title: "Hygienic Space",
    description: "Spotless interiors and sanitized equipment. Cleanliness is our priority."
  },
  {
    icon: <Trophy className="w-8 h-8 text-brand-red" />,
    title: "Expert Trainers",
    description: "Certified professionals dedicated to your personal growth and safety."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Subtle background striping */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-striped opacity-5 pointer-events-none transform -skew-x-12"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <RevealOnScroll width="100%">
                <div className="text-center md:text-left w-full">
                    <h2 className="text-brand-red font-black uppercase tracking-[0.2em] mb-4 text-sm">Why Choose Us</h2>
                    <h3 className="text-4xl md:text-6xl font-black text-white uppercase italic leading-none">
                        Redefining <br/>
                        <span className="text-outline">Fitness</span> Standards.
                    </h3>
                </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200} width="100%">
                <p className="text-gray-400 max-w-md text-center md:text-right w-full md:w-auto mx-auto md:mx-0 font-medium leading-relaxed">
                    We don't just provide equipment; we provide an environment engineered for your success. No excuses, just results.
                </p>
            </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
                <div className="group p-8 border border-white/10 bg-black/50 hover:bg-brand-red hover:border-brand-red transition-all duration-300 h-full flex flex-col items-center md:items-start text-center md:text-left relative overflow-hidden">
                  <div className="mb-6 bg-zinc-900 w-fit p-4 group-hover:bg-black transition-colors skew-x-[-10deg]">
                      <div className="skew-x-[10deg]">{feature.icon}</div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 uppercase italic tracking-wide">{feature.title}</h4>
                  <p className="text-gray-400 group-hover:text-white/90 leading-relaxed text-sm transition-colors">
                      {feature.description}
                  </p>
                </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;