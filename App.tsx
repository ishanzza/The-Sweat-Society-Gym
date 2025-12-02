import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Footer from './components/Footer';
import CTAWrapper from './components/CTAWrapper';
import Membership from './components/Membership';
import FloatingCTA from './components/FloatingCTA';

type Page = 'home' | 'membership';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Reset scroll when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateToMembership = () => setCurrentPage('membership');
  const navigateToHome = () => setCurrentPage('home');

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-brand-red selection:text-white overflow-x-hidden">
      <Navbar onNavigate={(page) => setCurrentPage(page)} />
      
      <main>
        {currentPage === 'home' ? (
          <>
            <div id="home">
              <Hero onNavigate={navigateToMembership} />
            </div>
            
            <div id="why-us">
              <Features />
            </div>

            <div id="services">
              <Services />
            </div>

            <div id="gallery">
              <Gallery />
            </div>

            <div id="reviews">
              <Testimonials />
            </div>

            <div id="location">
              <Location />
            </div>
            
            <CTAWrapper onNavigate={navigateToMembership} />
            <FloatingCTA onNavigate={navigateToMembership} />
          </>
        ) : (
          <Membership onBack={navigateToHome} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;