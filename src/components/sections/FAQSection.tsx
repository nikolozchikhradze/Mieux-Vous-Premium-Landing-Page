import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { Eyebrow } from '../ui/Eyebrow';
import { FAQS } from '../../data/constants';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="py-28 lg:py-40 bg-brand-bg-light">
      <div className="max-w-[760px] mx-auto px-6">
        <div className="mb-20 text-center">
          <FadeIn>
            <Eyebrow>FREQUENTLY ASKED</Eyebrow>
            <h2 className="font-serif font-light tracking-tight text-brand-text-main text-[clamp(2.5rem,4vw,3rem)] leading-[1.08]">
              Your Questions, Answered
            </h2>
          </FadeIn>
        </div>

        <div>
          {FAQS.map((faq, idx) => (
            <FadeIn key={faq.id} delay={idx * 0.05}>
              <div className="border-b border-black/5">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full py-7 flex items-center justify-between text-left group"
                  aria-expanded={openIndex === idx}
                >
                  <span className="font-sans font-medium text-base text-brand-text-main leading-[1.4] group-hover:text-brand-gold transition-colors duration-300">
                    {faq.question}
                  </span>
                  <div className="ml-4 shrink-0 text-brand-gold">
                    {openIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans font-light text-brand-text-muted leading-[1.75] text-[0.95rem] pb-7">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
