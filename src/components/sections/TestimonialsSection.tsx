import * as React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { Eyebrow } from '../ui/Eyebrow';
import { TESTIMONIALS } from '../../data/constants';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-28 lg:py-40 bg-brand-bg-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center">
          <FadeIn>
            <Eyebrow>CLIENT STORIES</Eyebrow>
            <h2 className="font-serif font-light tracking-tight text-brand-text-main text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.08]">
              What Our Clients Say
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-0">
          {TESTIMONIALS.map((item, idx) => (
            <FadeIn key={item.id} delay={idx * 0.1}>
              <div className="flex flex-col py-12 border-b border-black/5">
                {/* Decorative quote mark */}
                <span
                  className="font-serif font-light text-[5rem] text-brand-gold/60 leading-[0.8] block mb-4 select-none"
                  aria-hidden="true"
                >
                  "
                </span>

                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {[1, 2, 3, 4, 5].map(star => (
                    <span key={star} className="text-brand-gold text-sm">★</span>
                  ))}
                </div>

                <p className="font-serif font-normal text-[1.15rem] text-brand-text-main leading-[1.7] mb-6 flex-1">
                  {item.text}
                </p>

                {/* Gold line */}
                <div className="w-8 h-px bg-brand-gold mb-5" />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center shrink-0 w-10 h-10 rounded-full bg-brand-text-main text-brand-gold text-[0.7rem] font-sans font-semibold tracking-[0.05em]">
                    {item.initials}
                  </div>
                  <div>
                    <p className="font-sans font-medium text-[0.85rem] text-brand-text-main leading-[1.2]">
                      {item.author}
                    </p>
                    <span className="font-sans font-light text-[0.7rem] text-brand-text-muted uppercase tracking-[0.1em]">
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
