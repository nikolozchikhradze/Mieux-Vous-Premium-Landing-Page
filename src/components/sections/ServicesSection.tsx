import * as React from 'react';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { Eyebrow } from '../ui/Eyebrow';
import { SERVICES } from '../../data/constants';

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 lg:py-40 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <FadeIn>
            <Eyebrow>OUR EXPERTISE</Eyebrow>
            <h2 className="font-serif font-light tracking-tight text-brand-text-main leading-[1.08] text-[clamp(2.5rem,4vw,3.5rem)] max-w-3xl">
              Curated Treatments for Lasting Elegance
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <FadeIn key={service.id} delay={idx * 0.1}>
              <div className="relative overflow-hidden group rounded-2xl aspect-[3/4] shadow-premium">
                {/* Background Image */}
                <img
                  src={service.image}
                  alt={service.title}
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
                  <h3 className="font-serif font-normal text-3xl text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="font-sans font-light text-white/80 text-[1.05rem] leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="flex items-center gap-2 font-sans font-semibold uppercase text-xs tracking-widest text-white group-hover:text-brand-accent transition-colors w-fit"
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
