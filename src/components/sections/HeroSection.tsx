import * as React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-brand-bg-light pt-20">
      {/* Background Image / Pattern */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <img
          src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=2000&q=90"
          alt="Abstract calm textures"
          loading="eager"
          className="w-full h-full object-cover opacity-30 ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg-light/60 via-brand-bg-light/40 to-brand-bg-light" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6">
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl"
        >
          <span className="font-sans font-bold uppercase tracking-[0.2em] text-[0.7rem] text-brand-gold block mb-8">
            Parisian Elegance · Georgian Warmth
          </span>
          <h1 className="font-serif font-light tracking-tight text-[clamp(3.5rem,8vw,7rem)] leading-[0.95] text-brand-text-main mb-8">
            The Art of<br />
            <span className="italic">Subtle</span> Refinement
          </h1>
          <p className="font-sans font-light text-brand-text-muted text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed max-w-2xl mx-auto mb-12">
            Experience the pinnacle of aesthetic medicine, where advanced European techniques meet a deep respect for your natural beauty.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto font-sans text-[0.75rem] tracking-[0.15em] rounded-sm bg-brand-text-main text-brand-bg-light px-10 py-4 font-bold uppercase hover:bg-brand-gold hover:text-brand-text-main transition-colors duration-300">
              Discover Treatments
            </button>
            <button className="w-full sm:w-auto font-sans text-[0.75rem] tracking-[0.15em] rounded-sm px-10 py-4 font-bold uppercase border-b border-brand-text-main text-brand-text-main hover:text-brand-gold hover:border-brand-gold transition-colors duration-300">
              Our Philosophy
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-sans font-medium text-[0.6rem] uppercase tracking-widest text-brand-text-muted">
          Scroll
        </span>
        <ChevronDown size={16} className="text-brand-gold animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
