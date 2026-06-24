import * as React from 'react';
import { motion } from 'framer-motion';
import { HERO_IMAGE } from '../../data/constants';
import { useLanguage } from '../../contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-screen lg:h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center overflow-hidden py-6 lg:py-0 bg-brand-bg">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 w-full h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center">
          
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start text-left lg:pr-10"
          >
            <span className="font-sans break-words font-bold uppercase tracking-[0.2em] text-[0.65rem] sm:text-[0.7rem] text-brand-accent block mb-6 sm:mb-8">
              {t('hero.eyebrow')}
            </span>
            <h1 className="font-serif break-words font-light tracking-tight text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] leading-[0.95] text-brand-text-main mb-6 md:mb-8">
              {t('hero.title.1')}<br />
              <span className="italic text-brand-secondary">{t('hero.title.2').split(' ')[0]}</span> {t('hero.title.2').split(' ').slice(1).join(' ')}
            </h1>
            <p className="font-sans break-words hyphens-auto font-light text-brand-text-muted text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mb-10 md:mb-12">
              {t('hero.desc')}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <button className="w-full sm:w-auto whitespace-nowrap font-sans text-[0.75rem] tracking-[0.15em] rounded-sm bg-brand-primary text-brand-text-light px-10 py-4 font-bold uppercase hover:bg-brand-secondary transition-colors duration-300">
                {t('hero.cta')}
              </button>
              <button className="w-full sm:w-auto whitespace-nowrap font-sans text-[0.75rem] tracking-[0.15em] rounded-sm px-10 py-4 font-bold uppercase border-b border-brand-primary text-brand-primary hover:text-brand-accent hover:border-brand-accent transition-colors duration-300">
                {t('philosophy.title')}
              </button>
            </div>
          </motion.div>

          {/* Right Column: Floating Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative w-full h-[45vh] lg:h-[80%] rounded-2xl overflow-hidden shadow-premium bg-brand-primary/5"
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
