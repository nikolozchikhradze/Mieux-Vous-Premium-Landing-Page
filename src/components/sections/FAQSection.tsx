import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { Eyebrow } from '../ui/Eyebrow';
import { FAQS } from '../../data/constants';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="py-28 lg:py-40" style={{ background: '#FAF9F6' }}>
      <div className="max-w-[760px] mx-auto px-6">
        <div className="mb-20 text-center">
          <FadeIn>
            <Eyebrow>FREQUENTLY ASKED</Eyebrow>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                lineHeight: 1.08,
                color: '#1A1814',
                fontSize: 'clamp(2.5rem, 4vw, 3rem)'
              }}
            >
              Your Questions, Answered
            </h2>
          </FadeIn>
        </div>

        <div>
          {FAQS.map((faq, idx) => (
            <FadeIn key={faq.id} delay={idx * 0.05}>
              <div style={{ borderBottom: '1px solid #EAE6DF' }}>
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full py-7 flex items-center justify-between text-left group"
                  aria-expanded={openIndex === idx}
                >
                  <span
                    style={{
                      fontFamily: "'Onest', sans-serif",
                      fontWeight: 500,
                      fontSize: '1rem',
                      color: '#1A1814',
                      lineHeight: 1.4
                    }}
                    className="group-hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {faq.question}
                  </span>
                  <div className="ml-4 shrink-0 text-[#D4AF37]">
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
                      <p
                        style={{
                          fontFamily: "'Onest', sans-serif",
                          fontWeight: 300,
                          color: '#7A7065',
                          lineHeight: 1.75,
                          fontSize: '0.95rem',
                          paddingBottom: '1.75rem'
                        }}
                      >
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
