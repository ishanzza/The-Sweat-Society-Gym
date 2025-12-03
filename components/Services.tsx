
import React from 'react';
import { Dumbbell, HeartPulse, Users, Activity } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { IMAGES } from '../constants/images';

const services = [
  {
    title: "Strength Training",
    icon: <Dumbbell />,
    desc: "Free weights, squat racks, and resistance machines designed for building raw power.",
    features: ["Olympic Lifting Platforms", "Dumbbells up to 50kg", "Hammer Strength Machines"],
    image: IMAGES.services.strength
  },
  {
    title: "Cardio & HIIT",
    icon: <HeartPulse />,
    desc: "Boost endurance with our premium treadmill fleet and high-intensity interval zones.",
    features: ["Advanced Treadmills", "Rowing Machines", "Stair Masters"],
    image: IMAGES.services.cardio
  },
  {
    title: "Personal Training",
    icon: <Users />,
    desc: "1-on-1 coaching customized to your specific body type, goals, and lifestyle.",
    features: ["Custom Diet Plans", "Form Correction", "Progress Tracking"],
    image: IMAGES.services.personalTraining
  },
  {
    title: "Body Transformation",
    icon: <Activity />,
    desc: "Holistic weight management programs focusing on sustainable fat loss and muscle gain.",
    features: ["Body Composition Analysis", "Weekly Check-ins", "Nutritional Guidance"],
    image: IMAGES.services.transformation
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <RevealOnScroll width="100%">
                <div className="text-center md:text-left w-full">
                    <span className="text-brand-red font-black uppercase tracking-[0.2em] text-sm block mb-4">Our Expertise</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic leading-none">
                        Comprehensive <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Training.</span>
                    </h2>
                </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200} width="100%">
                <p className="text-gray-400 max-w-md text-center md:text-right w-full md:w-auto mx-auto md:mx-0 font-medium leading-relaxed">
                    From specialized strength zones to high-energy cardio decks, we provide every tool you need to sculpt your ultimate physique.
                </p>
            </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {services.map((service, index) => (
            <RevealOnScroll key={index} delay={index * 100} className="h-full">
                <div className="flex flex-col p-8 md:p-12 border border-white/10 hover:border-brand-red transition-all duration-300 group text-center md:text-left h-full items-center md:items-stretch relative overflow-hidden rounded-sm bg-black">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src={service.image} 
                            alt={service.title} 
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
                        />
                        {/* Gradient overlay to ensure text is readable against the bright image */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/80 transition-all duration-500"></div>
                    </div>

                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/10 rounded-full blur-3xl group-hover:bg-brand-red/20 transition-colors z-0"></div>
                    
                    <div className="flex flex-col md:flex-row items-center md:justify-between mb-8 gap-4 md:gap-0 w-full relative z-10">
                        <h3 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter order-2 md:order-1 drop-shadow-lg">{service.title}</h3>
                        <div className="text-gray-400 group-hover:text-brand-red transition-colors order-1 md:order-2 scale-125 drop-shadow-md">
                            {service.icon}
                        </div>
                    </div>
                    
                    <p className="text-gray-200 mb-8 flex-grow font-medium leading-relaxed relative z-10 drop-shadow-md">
                        {service.desc}
                    </p>
                    
                    <ul className="space-y-4 mt-auto inline-block md:block text-left w-full max-w-xs md:max-w-none relative z-10">
                        {service.features.map((feat, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-white justify-start font-bold uppercase tracking-wide drop-shadow-md">
                                <div className="w-1.5 h-1.5 bg-brand-red rotate-45 shrink-0 shadow-[0_0_10px_rgba(210,0,0,1)]"></div>
                                {feat}
                            </li>
                        ))}
                    </ul>
                </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;