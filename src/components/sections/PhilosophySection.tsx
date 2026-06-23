import * as React from 'react';
import { motion, useInView } from 'framer-motion';
import { Eyebrow } from '../ui/Eyebrow';
import { EASE_LUXURY } from '../../data/constants';

const PhilosophySection = () => {
  const leftRef = React.useRef(null);
  const rightRef = React.useRef(null);
  const isLeftInView = useInView(leftRef, { once: true, margin: '-100px' });
  const isRightInView = useInView(rightRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-28 lg:py-40" style={{ background: '#FAF9F6' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left — overlapping images */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -40 }}
            animate={isLeftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.9, ease: EASE_LUXURY }}
            className="relative w-full lg:w-1/2 shrink-0"
            style={{ height: '520px' }}
          >
            <img
              src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&q=90"
              alt="Aesthetic medicine specialist at work"
              loading="lazy"
              className="rounded-2xl object-cover"
              style={{ width: '70%', height: '90%', objectPosition: 'center top' }}
            />
            <img
              src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=500&q=85"
              alt="Luxury skincare products"
              loading="lazy"
              className="rounded-2xl object-cover"
              style={{
                width: '45%',
                height: '55%',
                position: 'absolute',
                bottom: 0,
                right: 0,
                border: '6px solid #FAF9F6',
                objectPosition: 'center'
              }}
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
            <Eyebrow>NOTRE PHILOSOPHIE</Eyebrow>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                lineHeight: 1.08,
                color: '#1A1814',
                fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                marginBottom: '1.5rem'
              }}
            >
              Beauty rooted in harmony, not alteration.
            </h2>
            <div className="w-8 h-px bg-[#D4AF37] mb-8" />
            <p
              style={{
                fontFamily: "'Onest', sans-serif",
                fontWeight: 300,
                color: '#7A7065',
                lineHeight: 1.8,
                fontSize: '1rem',
                marginBottom: '1.25rem'
              }}
            >
              We believe aesthetic medicine is a deeply personal art. Our approach begins with listening — understanding not just how you wish to look, but how you wish to feel. Every treatment is designed to enhance your natural architecture, never to impose an external ideal.
            </p>
            <p
              style={{
                fontFamily: "'Onest', sans-serif",
                fontWeight: 300,
                color: '#7A7065',
                lineHeight: 1.8,
                fontSize: '1rem',
                marginBottom: '2.5rem'
              }}
            >
              Our specialists combine European medical training with an artist's sensitivity. The result is care that is precise, thoughtful, and unmistakably human.
            </p>
            <p
              style={{
                fontFamily: "'Onest', sans-serif",
                fontWeight: 400,
                color: '#1A1814',
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase'
              }}
            >
              Est. 2024 · Tbilisi, Georgia
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
