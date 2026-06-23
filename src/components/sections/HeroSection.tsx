import * as React from 'react';
import { motion } from 'framer-motion';
import { HERO_IMAGE } from '../../data/constants';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full bg-brand-bg pt-28 lg:pt-32 pb-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start text-left"
          >
            <span className="font-sans font-bold uppercase tracking-[0.2em] text-[0.7rem] text-brand-accent block mb-8">
              Parisian Elegance · Georgian Warmth
            </span>
            <h1 className="font-serif font-light tracking-tight text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] text-brand-text-main mb-8">
              The Art of<br />
              <span className="italic text-brand-secondary">Subtle</span> Refinement
            </h1>
            <p className="font-sans font-light text-brand-text-muted text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed max-w-md mb-12">
              Experience the pinnacle of aesthetic medicine, where advanced European techniques meet a deep respect for your natural beauty.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <button className="w-full sm:w-auto font-sans text-[0.75rem] tracking-[0.15em] rounded-sm bg-brand-primary text-brand-text-light px-10 py-4 font-bold uppercase hover:bg-brand-secondary transition-colors duration-300">
                Discover Treatments
              </button>
              <button className="w-full sm:w-auto font-sans text-[0.75rem] tracking-[0.15em] rounded-sm px-10 py-4 font-bold uppercase border-b border-brand-primary text-brand-primary hover:text-brand-accent hover:border-brand-accent transition-colors duration-300">
                Our Philosophy
              </button>
            </div>
          </motion.div>

          {/* Right Column: Floating Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative w-full aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-brand-primary/5"
          >
            <img
              src={HERO_IMAGE}
              alt="Quiet Luxury Aesthetics"
              loading="eager"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
            {/* Subtle inner shadow/border for premium feel */}
            <div className="absolute inset-0 border border-brand-primary/5 rounded-2xl pointer-events-none" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
