import * as React from 'react';
import { motion, useInView } from 'framer-motion';
import { Eyebrow } from '../ui/Eyebrow';
import { EASE_LUXURY } from '../../data/constants';
import { useLanguage } from '../../contexts/LanguageContext';

const PhilosophySection = () => {
  const { t } = useLanguage();
  const leftRef = React.useRef(null);
  const rightRef = React.useRef(null);
  const isLeftInView = useInView(leftRef, { once: true, margin: '-100px' });
  const isRightInView = useInView(rightRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-28 lg:py-40 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left — overlapping images */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -40 }}
            animate={isLeftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.9, ease: EASE_LUXURY }}
            className="relative w-full lg:w-1/2 shrink-0 h-[520px]"
          >
            <img
              src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&q=90"
              alt="Aesthetic medicine specialist at work"
              loading="lazy"
              className="rounded-2xl object-cover shadow-premium w-[70%] h-[90%] object-[center_top]"
            />
            <img
              src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=500&q=85"
              alt="Luxury skincare products"
              loading="lazy"
              className="absolute bottom-0 right-0 rounded-2xl object-cover w-[45%] h-[55%] object-center border-8 border-brand-bg shadow-premium"
            />
          </motion.div>

          {/* Right — text */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 40 }}
            animate={isRightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.9, ease: EASE_LUXURY, delay: 0.15 }}
            className="w-full lg:w-1/2"
          >
            <Eyebrow>{t('philosophy.eyebrow')}</Eyebrow>
            <h2 className="font-serif break-words font-light tracking-tight text-brand-text-main text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.08] mb-6">
              {t('philosophy.title')}
            </h2>
            <div className="w-8 h-px bg-brand-accent mb-8" />
            <p className="font-sans break-words hyphens-auto font-light text-brand-text-muted text-base leading-[1.8] mb-5">
              {t('philosophy.p1')}
            </p>
            <p className="font-sans break-words hyphens-auto font-light text-brand-text-muted text-base leading-[1.8] mb-10">
              {t('philosophy.p2')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <button className="whitespace-nowrap font-sans text-[0.75rem] tracking-[0.15em] rounded-sm border border-brand-primary text-brand-primary px-8 py-3 font-bold uppercase hover:bg-brand-primary hover:text-brand-surface transition-colors duration-300">
                {t('philosophy.cta')}
              </button>
            </div>
            <p className="font-sans font-normal text-[0.7rem] text-brand-text-muted tracking-[0.12em] uppercase mt-8">
              Est. 2024 · Tbilisi, Georgia
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
