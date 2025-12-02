import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';

const Gallery: React.FC = () => {
  // Using picsum with specific dimensions to create a masonry-like feel
  // Added 6th image as requested
  const images = [
    { src: "https://picsum.photos/600/600?grayscale", span: "md:col-span-1 md:row-span-2", alt: "Strength Zone" },
    { src: "https://picsum.photos/800/400?grayscale", span: "md:col-span-2 md:row-span-1", alt: "Cardio Deck" },
    { src: "https://picsum.photos/400/400?grayscale", span: "md:col-span-1 md:row-span-1", alt: "Free Weights" },
    { src: "https://picsum.photos/400/401?grayscale", span: "md:col-span-1 md:row-span-1", alt: "Personal Training" },
    { src: "https://picsum.photos/800/401?grayscale", span: "md:col-span-2 md:row-span-1", alt: "Group Classes" },
    { src: "https://picsum.photos/600/300?grayscale", span: "md:col-span-3 md:row-span-1", alt: "Recovery Lounge" },
  ];

  return (
    <section className="py-20 bg-brand-gray">
      <div className="container mx-auto px-6">
        <RevealOnScroll width="100%">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                <div className="text-center md:text-left w-full md:w-auto">
                    <span className="text-brand-red font-bold uppercase tracking-widest text-sm block mb-2">The Space</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">Inside The Sweat Society</h2>
                </div>
                <p className="text-gray-400 text-sm max-w-xs text-center md:text-right w-full md:w-auto mx-auto md:mx-0 font-medium">
                    A look at our premium facility in Gomti Greens. Designed for focus, built for results.
                </p>
            </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {images.map((img, index) => (
            <RevealOnScroll key={index} delay={index * 100} width="100%">
                <div className={`relative group overflow-hidden rounded-sm h-full w-full ${img.span}`}>
                    <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-brand-red/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                        <span className="text-white font-bold text-xl uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center">
                        {img.alt}
                        </span>
                    </div>
                </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;