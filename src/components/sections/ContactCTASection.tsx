import * as React from 'react';
import { Phone } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { Eyebrow } from '../ui/Eyebrow';
import { useLanguage } from '../../contexts/LanguageContext';

const ContactCTASection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-28 lg:py-40 text-center overflow-hidden bg-brand-primary">
      {/* Watermark */}
      <div
        className="font-serif font-light text-[clamp(3rem,15vw,15rem)] text-white/[0.04] tracking-tight leading-[0.9] select-none pointer-events-none whitespace-nowrap text-center -mb-12"
        aria-hidden="true"
      >
        MIEUX VOUS
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <FadeIn>
          <Eyebrow>{t('contact.eyebrow')}</Eyebrow>
          <h2 className="font-serif break-words font-light tracking-tight leading-[1.08] text-brand-text-light text-[clamp(2.5rem,5vw,4.5rem)] mb-6">
            {t('contact.title')}
          </h2>
          <p className="font-sans break-words hyphens-auto font-light text-brand-text-light/60 text-[1.05rem] leading-[1.75] mb-12">
            {t('contact.desc')}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button className="font-sans whitespace-nowrap text-[0.7rem] tracking-[0.15em] rounded-[2px] bg-brand-accent text-brand-text-light px-12 py-5 font-bold uppercase hover:bg-brand-surface hover:text-brand-primary transition-all duration-300">
              {t('contact.btn')}
            </button>
            <a
              href="tel:+995555000000"
              className="flex items-center gap-3 font-sans text-base text-brand-text-light hover:text-brand-accent transition-colors whitespace-nowrap"
            >
              <Phone size={18} />
              <span>+995 555 123 456</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactCTASection;
