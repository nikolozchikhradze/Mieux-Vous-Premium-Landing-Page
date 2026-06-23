import * as React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Eyebrow } from '../ui/Eyebrow';
import { EASE_LUXURY } from '../../data/constants';

const HeroSection = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 30]);

  const items = [
    { content: 'eyebrow', delay: 0 },
    { content: 'h1', delay: 0.18 },
    { content: 'line', delay: 0.36 },
    { content: 'sub', delay: 0.54 },
    { content: 'cta', delay: 0.72 }
  ];

  return (
    <section ref={containerRef} className="relative flex min-h-screen overflow-hidden pt-20" style={{ background: '#FAF9F6' }}>
      {/* ── Left Column ── */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-[55%] px-8 lg:pl-16 lg:pr-0 py-24 lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_LUXURY, delay: items[0].delay }}
        >
          <Eyebrow>LUXURY AESTHETIC MEDICINE · TBILISI</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_LUXURY, delay: items[1].delay }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            lineHeight: 1.05,
            fontSize: 'clamp(4rem, 8vw, 7rem)',
            color: '#1A1814',
            letterSpacing: '-0.01em',
            position: 'relative',
            zIndex: 20
          }}
          className="mb-8 lg:mr-[-60px]"
        >
          Your Best<br />Self Awaits
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, ease: EASE_LUXURY, delay: items[2].delay }}
          style={{ transformOrigin: 'left' }}
          className="w-20 h-px bg-[#D4AF37] mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_LUXURY, delay: items[3].delay }}
          style={{
            fontFamily: "'Onest', sans-serif",
            fontWeight: 300,
            maxWidth: '400px',
            color: '#7A7065',
            lineHeight: 1.75,
            fontSize: '1.05rem'
          }}
          className="mb-12"
        >
          At Mieux Vous, we blend French elegance with cutting-edge aesthetics to reveal the most refined version of you. Located in the heart of Tbilisi.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_LUXURY, delay: items[4].delay }}
          className="flex flex-col sm:flex-row items-start gap-6"
        >
          <button
            style={{
              fontFamily: "'Onest', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              borderRadius: '2px',
              background: '#1A1814',
              color: '#D4AF37'
            }}
            className="px-10 py-5 font-bold uppercase hover:bg-[#D4AF37] hover:text-[#1A1814] transition-all duration-500"
          >
            Book Your Consultation
          </button>
          <a
            href="#services"
            style={{
              fontFamily: "'Onest', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              color: '#D4AF37'
            }}
            className="font-semibold uppercase hover:opacity-70 transition-opacity flex flex-col items-center gap-2 pt-3"
          >
            <span>Explore Our Services</span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.span>
          </a>
        </motion.div>
      </div>

      {/* ── Right Column — Hero Image ── */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[48%] overflow-hidden">
        <motion.div style={{ y: bgY }} className="w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=90"
            alt="Luxury aesthetic treatment in an elegant clinic setting"
            loading="lazy"
            className="ken-burns w-full h-full object-cover"
          />
        </motion.div>
        {/* Feather left edge */}
        <div
          style={{ background: 'linear-gradient(to right, #FAF9F6 0%, transparent 100%)' }}
          className="absolute inset-y-0 left-0 w-24 pointer-events-none"
        />
      </div>

      {/* Mobile: top image strip */}
      <div className="lg:hidden w-full h-[45vh] overflow-hidden" style={{ order: -1 }}>
        <img
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=90"
          alt="Luxury aesthetic treatment"
          loading="lazy"
          className="ken-burns w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
