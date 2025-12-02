import React from 'react';

interface FloatingCTAProps {
  onNavigate: () => void;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({ onNavigate }) => {
  return (
    <button
      onClick={onNavigate}
      className="fixed top-1/2 right-0 transform -translate-y-1/2 z-40 bg-brand-red text-white py-6 px-2 rounded-l-md shadow-lg hover:bg-red-700 transition-all duration-300 hover:pr-4 group"
      style={{ writingMode: 'vertical-rl' }}
    >
      <span className="uppercase font-bold tracking-widest text-xs whitespace-nowrap flex items-center gap-2">
        View Packages
      </span>
    </button>
  );
};

export default FloatingCTA;