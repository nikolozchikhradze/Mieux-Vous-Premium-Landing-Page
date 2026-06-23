import * as React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { Eyebrow } from '../ui/Eyebrow';
import { TESTIMONIALS } from '../../data/constants';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-28 lg:py-40" style={{ background: '#FAF9F6' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center">
          <FadeIn>
            <Eyebrow>CLIENT STORIES</Eyebrow>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                lineHeight: 1.08,
                color: '#1A1814',
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)'
              }}
            >
              What Our Clients Say
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-0">
          {TESTIMONIALS.map((item, idx) => (
            <FadeIn key={item.id} delay={idx * 0.1}>
              <div className="flex flex-col py-12" style={{ borderBottom: '1px solid #EAE6DF' }}>
                {/* Decorative quote mark */}
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 300,
                    fontSize: '5rem',
                    color: '#D4AF37',
                    opacity: 0.6,
                    lineHeight: 0.8,
                    display: 'block',
                    marginBottom: '1rem',
                    userSelect: 'none'
                  }}
                  aria-hidden="true"
                >
                  "
                </span>

                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {[1, 2, 3, 4, 5].map(star => (
                    <span key={star} className="text-[#D4AF37] text-sm">★</span>
                  ))}
                </div>

                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 400,
                    fontSize: '1.15rem',
                    color: '#1A1814',
                    lineHeight: 1.7,
                    marginBottom: '1.5rem',
                    flex: 1
                  }}
                >
                  {item.text}
                </p>

                {/* Gold line */}
                <div className="w-8 h-px bg-[#D4AF37] mb-5" />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: '50%',
                      background: '#1A1814',
                      color: '#D4AF37',
                      fontSize: '0.7rem',
                      fontFamily: "'Onest', sans-serif",
                      fontWeight: 600,
                      letterSpacing: '0.05em'
                    }}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Onest', sans-serif",
                        fontWeight: 500,
                        fontSize: '0.85rem',
                        color: '#1A1814',
                        lineHeight: 1.2
                      }}
                    >
                      {item.author}
                    </p>
                    <span
                      style={{
                        fontFamily: "'Onest', sans-serif",
                        fontWeight: 300,
                        fontSize: '0.7rem',
                        color: '#7A7065',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em'
                      }}
                    >
                      {item.treatment}
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
