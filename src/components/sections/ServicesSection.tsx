import * as React from 'react';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { Eyebrow } from '../ui/Eyebrow';
import { SERVICES } from '../../data/constants';
import { useLanguage } from '../../contexts/LanguageContext';

const ServicesSection = () => {
  const { language, t } = useLanguage();
  const isKa = language === 'ka';

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-brand-bg">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="mb-16 md:mb-20">
          <FadeIn>
            <Eyebrow>{t('services.eyebrow')}</Eyebrow>
            <h2 className="font-serif break-words font-light tracking-tight text-brand-text-main leading-[1.08] text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] max-w-4xl">
              {t('services.title')}
            </h2>
            <p className="mt-6 font-sans break-words hyphens-auto font-light text-brand-text-muted text-base sm:text-lg max-w-2xl">
              {t('services.desc')}
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-full">
          {SERVICES.map((service, idx) => (
            <FadeIn key={service.id} delay={idx * 0.1}>
              <div className="relative overflow-hidden group rounded-2xl aspect-[3/4] shadow-premium w-full">
                {/* Background Image */}
                <img
                  src={service.image}
                  alt={isKa ? service.titleGe : service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Contrast Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full p-8 lg:p-10 justify-end">
                  <span className="font-sans text-[0.75rem] font-bold tracking-[0.2em] text-white/50 uppercase mb-4 block">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif break-words font-normal text-2xl md:text-3xl text-white mb-4">
                    {isKa ? service.titleGe : service.title}
                  </h3>
                  <p className="font-sans break-words hyphens-auto font-light text-white/80 text-[1rem] leading-relaxed mb-8">
                    {isKa ? service.descriptionGe : service.description}
                  </p>
                  <a
                    href="#contact"
                    className="flex items-center gap-2 font-sans whitespace-nowrap font-semibold uppercase text-xs tracking-widest text-white group-hover:text-brand-accent transition-colors w-fit"
                  >
                    {t('services.learnMore')} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
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
