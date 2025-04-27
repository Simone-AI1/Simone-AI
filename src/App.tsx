import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import WhyChooseSection from './components/WhyChooseSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <FeaturesSection />
          <WhyChooseSection />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;