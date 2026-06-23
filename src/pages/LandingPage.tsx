import * as React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import PhilosophySection from '../components/sections/PhilosophySection';
import JourneySection from '../components/sections/JourneySection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FAQSection from '../components/sections/FAQSection';
import ContactCTASection from '../components/sections/ContactCTASection';

const LandingPage = () => {
  return (
    <div className="bg-[#FAF9F6]">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PhilosophySection />
      <JourneySection />
      <TestimonialsSection />
      <FAQSection />
      <ContactCTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;
