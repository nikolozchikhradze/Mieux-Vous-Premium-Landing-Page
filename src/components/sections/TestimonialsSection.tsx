import * as React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { Eyebrow } from '../ui/Eyebrow';
import { TESTIMONIALS } from '../../data/constants';
import { cn } from '../../lib/utils';

const IMG_1 = "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80";
const IMG_2 = "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80";

type GridCell = 
  | { type: 'testimonial'; data: typeof TESTIMONIALS[0]; className: string }
  | { type: 'image'; src: string; className: string };

const layoutCells: GridCell[] = [
  { type: 'testimonial', data: TESTIMONIALS[0], className: 'md:col-span-1 lg:col-span-1' },
  { type: 'testimonial', data: TESTIMONIALS[1], className: 'md:col-span-1 lg:col-span-2' },
  { type: 'image', src: IMG_1, className: 'md:col-span-2 lg:col-span-1' },
  { type: 'testimonial', data: TESTIMONIALS[2], className: 'md:col-span-1 lg:col-span-1' },
  { type: 'testimonial', data: TESTIMONIALS[3], className: 'md:col-span-1 lg:col-span-1' },
  { type: 'testimonial', data: TESTIMONIALS[4], className: 'md:col-span-1 lg:col-span-1' },
  { type: 'image', src: IMG_2, className: 'md:col-span-1 lg:col-span-2' },
  { type: 'testimonial', data: TESTIMONIALS[5], className: 'md:col-span-2 lg:col-span-3' },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-28 lg:py-40 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center">
          <FadeIn>
            <Eyebrow>CLIENT STORIES</Eyebrow>
            <h2 className="font-serif font-light tracking-tight text-brand-text-main text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.08]">
              What Our Clients Say
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {layoutCells.map((cell, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className={cell.className}>
              {cell.type === 'image' ? (
                <div className="relative overflow-hidden rounded-2xl h-full min-h-[320px] shadow-premium group">
                  <img
                    src={cell.src}
                    alt="Quiet Luxury Aesthetics Interior"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Subtle inner border */}
                  <div className="absolute inset-0 border border-brand-primary/10 rounded-2xl pointer-events-none" />
                </div>
              ) : (
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-premium flex flex-col justify-between border border-brand-primary/5 h-full">
                  <div>
                    <span
                      className="font-serif text-brand-accent/20 text-6xl leading-none block mb-2"
                      aria-hidden="true"
                    >
                      "
                    </span>
                    <div className="flex gap-0.5 mb-5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-brand-accent text-sm">★</span>
                      ))}
                    </div>
                    <p className="font-serif font-normal text-[1.2rem] text-brand-text-main leading-[1.7] mb-6">
                      {cell.data.text}
                    </p>
                  </div>

                  <div className="mt-auto pt-6 border-t border-brand-primary/5 flex items-center gap-4">
                    <div className="flex items-center justify-center shrink-0 w-11 h-11 rounded-full bg-brand-bg text-brand-accent text-[0.7rem] font-sans font-bold tracking-[0.05em]">
                      {cell.data.initials}
                    </div>
                    <div>
                      <p className="font-sans font-medium text-[0.9rem] text-brand-text-main leading-[1.2]">
                        {cell.data.author}
                      </p>
                      <span className="font-sans font-light text-[0.75rem] text-brand-text-muted uppercase tracking-[0.1em] block mt-0.5">
                        {cell.data.treatment}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
