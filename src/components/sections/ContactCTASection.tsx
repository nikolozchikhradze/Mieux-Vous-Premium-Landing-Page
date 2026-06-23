import * as React from 'react';
import { Phone } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { Eyebrow } from '../ui/Eyebrow';

const ContactCTASection = () => {
  return (
    <section id="contact" className="py-28 lg:py-40 text-center overflow-hidden" style={{ background: '#1A1814' }}>
      {/* Watermark */}
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          fontSize: 'clamp(3rem, 15vw, 15rem)',
          color: 'rgba(255,255,255,0.04)',
          letterSpacing: '-0.01em',
          lineHeight: 0.9,
          userSelect: 'none',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          textAlign: 'center',
          marginBottom: '-3rem'
        }}
        aria-hidden="true"
      >
        MIEUX VOUS
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <FadeIn>
          <Eyebrow>READY TO BEGIN</Eyebrow>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              lineHeight: 1.08,
              color: '#fff',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              marginBottom: '1.5rem'
            }}
          >
            Book Your Personal Consultation
          </h2>
          <p
            style={{
              fontFamily: "'Onest', sans-serif",
              fontWeight: 300,
              color: 'rgba(255,255,255,0.6)',
              fontSize: '1.05rem',
              lineHeight: 1.75,
              marginBottom: '3rem'
            }}
          >
            Located at Pekini 22, Tbilisi. Available Monday–Saturday, 10:00–19:00.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button
              style={{
                fontFamily: "'Onest', sans-serif",
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                borderRadius: '2px',
                background: '#D4AF37',
                color: '#1A1814'
              }}
              className="px-12 py-5 font-bold uppercase hover:bg-white transition-all duration-300"
            >
              Schedule Now
            </button>
            <a
              href="tel:+995555000000"
              style={{
                fontFamily: "'Onest', sans-serif",
                fontSize: '1rem',
                color: '#fff'
              }}
              className="flex items-center gap-3 hover:text-[#D4AF37] transition-colors"
            >
              <Phone size={18} />
              <span>+995 555 000 000</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactCTASection;
