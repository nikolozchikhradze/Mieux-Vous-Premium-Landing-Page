import * as React from 'react';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { Eyebrow } from '../ui/Eyebrow';
import { SERVICES } from '../../data/constants';

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 lg:py-40 bg-brand-bg-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <FadeIn>
            <Eyebrow>OUR EXPERTISE</Eyebrow>
            <h2 className="font-serif font-light tracking-tight text-brand-text-main leading-[1.08] text-[clamp(2.5rem,4vw,3.5rem)] max-w-3xl">
              Curated Treatments for Lasting Elegance
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SERVICES.map((service, idx) => (
            <FadeIn key={service.id} delay={idx * 0.1}>
              <div className="group relative bg-white rounded-xl overflow-hidden p-10 lg:p-12 shadow-premium hover:shadow-xl transition-shadow duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-bl-full -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-150" />
                <div className="relative z-10 flex flex-col h-full">
                  <span className="font-serif text-5xl text-brand-gold opacity-40 mb-6 block">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif font-normal text-3xl text-brand-text-main mb-4">
                    {service.title}
                  </h3>
                  <p className="font-sans font-light text-brand-text-muted text-[1.05rem] leading-relaxed mb-10 flex-1">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="flex items-center gap-2 font-sans font-semibold uppercase text-xs tracking-widest text-brand-text-main group-hover:text-brand-gold transition-colors w-fit"
                  >
                    Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
