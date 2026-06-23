import * as React from 'react';
import { Phone } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { Eyebrow } from '../ui/Eyebrow';

const ContactCTASection = () => {
  return (
    <section id="contact" className="py-28 lg:py-40 text-center overflow-hidden bg-brand-bg-dark">
      {/* Watermark */}
      <div
        className="font-serif font-light text-[clamp(3rem,15vw,15rem)] text-white/[0.04] tracking-tight leading-[0.9] select-none pointer-events-none whitespace-nowrap text-center -mb-12"
        aria-hidden="true"
      >
        MIEUX VOUS
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <FadeIn>
          <Eyebrow>READY TO BEGIN</Eyebrow>
          <h2 className="font-serif font-light tracking-tight leading-[1.08] text-white text-[clamp(2.5rem,5vw,4.5rem)] mb-6">
            Book Your Personal Consultation
          </h2>
          <p className="font-sans font-light text-white/60 text-[1.05rem] leading-[1.75] mb-12">
            Located at Pekini 22, Tbilisi. Available Monday–Saturday, 10:00–19:00.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button className="font-sans text-[0.7rem] tracking-[0.15em] rounded-[2px] bg-brand-gold text-brand-text-main px-12 py-5 font-bold uppercase hover:bg-white transition-all duration-300">
              Schedule Now
            </button>
            <a
              href="tel:+995555000000"
              className="flex items-center gap-3 font-sans text-base text-white hover:text-brand-gold transition-colors"
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
