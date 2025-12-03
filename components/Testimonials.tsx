
import React from 'react';
import { Quote, Star } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-brand-gray border-t border-white/5 relative">
        <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>
        
      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll width="100%">
            <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase italic">What Our Members Say</h2>
            <div className="flex items-center justify-center gap-4 bg-black/50 w-fit mx-auto px-6 py-3 border border-white/10 skew-x-[-10deg]">
                <div className="skew-x-[10deg] flex items-center gap-4">
                    <span className="text-3xl font-bold text-white">4.8</span>
                    <div className="flex text-brand-red gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={20} fill={i === 5 ? "none" : "#d20000"} className={i === 5 ? "text-brand-red" : ""} />
                    ))}
                    </div>
                </div>
            </div>
            <p className="text-gray-500 text-sm mt-4 uppercase tracking-widest font-bold">Based on 113 Reviews on Justdial</p>
            </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RevealOnScroll delay={0}>
                <div className="bg-black p-10 relative mt-6 border border-white/10 hover:border-brand-red transition-all duration-300 group h-full">
                    <div className="absolute -top-5 -left-2 text-brand-red opacity-50 group-hover:opacity-100 transition-opacity">
                        <Quote size={60} />
                    </div>
                    <p className="text-gray-300 font-medium mb-8 pt-6 relative z-10 leading-relaxed">
                    "Hands down the best gym in Gomti Nagar Extension. The vibe is amazing, very spacious, and the Jerai equipment is top-notch. It's clean and never feels too crowded."
                    </p>
                    <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                    <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center font-bold text-brand-red border border-white/10">A</div>
                    <div>
                        <h4 className="font-bold text-white text-sm uppercase tracking-wider">Aditya Verma</h4>
                        <span className="text-xs text-gray-500">Member since 2023</span>
                    </div>
                    </div>
                </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
                <div className="bg-black p-10 relative mt-6 border border-white/10 hover:border-brand-red transition-all duration-300 group h-full">
                    <div className="absolute -top-5 -left-2 text-brand-red opacity-50 group-hover:opacity-100 transition-opacity">
                        <Quote size={60} />
                    </div>
                    <p className="text-gray-300 font-medium mb-8 pt-6 relative z-10 leading-relaxed">
                    "I've been to many gyms in Lucknow, but The Sweat Society stands out. The trainers are knowledgeable and actually pay attention to your form. Highly recommended!"
                    </p>
                    <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                    <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center font-bold text-brand-red border border-white/10">P</div>
                    <div>
                        <h4 className="font-bold text-white text-sm uppercase tracking-wider">Priya Singh</h4>
                        <span className="text-xs text-gray-500">Member since 2024</span>
                    </div>
                    </div>
                </div>
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
                <div className="bg-black p-10 relative mt-6 border border-white/10 hover:border-brand-red transition-all duration-300 group h-full">
                    <div className="absolute -top-5 -left-2 text-brand-red opacity-50 group-hover:opacity-100 transition-opacity">
                        <Quote size={60} />
                    </div>
                    <p className="text-gray-300 font-medium mb-8 pt-6 relative z-10 leading-relaxed">
                    "Great environment for serious workouts. The crowd is decent, and the facilities are always well-maintained. Perfect place to focus on your goals."
                    </p>
                    <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                    <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center font-bold text-brand-red border border-white/10">R</div>
                    <div>
                        <h4 className="font-bold text-white text-sm uppercase tracking-wider">Rohan Kapoor</h4>
                        <span className="text-xs text-gray-500">Member since 2023</span>
                    </div>
                    </div>
                </div>
            </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;