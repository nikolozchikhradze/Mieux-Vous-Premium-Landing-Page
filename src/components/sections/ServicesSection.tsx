import * as React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';
import { Eyebrow } from '../ui/Eyebrow';
import { SERVICES, EASE_LUXURY } from '../../data/constants';

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 lg:py-40" style={{ background: '#FAF9F6' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center">
          <FadeIn>
            <Eyebrow>OUR EXPERTISE</Eyebrow>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                lineHeight: 1.08,
                color: '#1A1814',
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)'
              }}
            >
              Precision. Artistry. Results.
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, idx) => (
            <FadeIn key={service.id} delay={idx * 0.15}>
              <div
                className="group cursor-default overflow-hidden"
                style={{
                  borderRadius: '1.5rem',
                  aspectRatio: '3/4',
                  position: 'relative',
                  background: '#F5F2ED'
                }}
              >
                <motion.img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  style={{ position: 'absolute', inset: 0 }}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.8, ease: EASE_LUXURY }}
                />
                {/* Gradient overlay */}
                <div
                  style={{
                    background: 'linear-gradient(to top, rgba(26,24,20,0.88) 0%, rgba(26,24,20,0.2) 50%, transparent 100%)',
                    position: 'absolute',
                    inset: 0
                  }}
                />
                {/* Card text */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <span
                    style={{
                      fontFamily: "'Onest', sans-serif",
                      fontWeight: 300,
                      fontSize: '0.65rem',
                      letterSpacing: '0.18em',
                      color: '#D4AF37',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {service.titleGe}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 400,
                      fontSize: '1.6rem',
                      color: '#fff',
                      lineHeight: 1.15
                    }}
                  >
                    {service.title}
                  </h3>
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    style={{
                      fontFamily: "'Onest', sans-serif",
                      fontWeight: 300,
                      fontSize: '0.85rem',
                      color: 'rgba(255,255,255,0.75)',
                      lineHeight: 1.65,
                      marginTop: '0.75rem'
                    }}
                  >
                    {service.description}
                  </motion.p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
