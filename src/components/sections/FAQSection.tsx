import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { Eyebrow } from '../ui/Eyebrow';
import { FAQS } from '../../data/constants';
import { useLanguage } from '../../contexts/LanguageContext';

const FAQSection = () => {
  const { language, t } = useLanguage();
  const isKa = language === 'ka';
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="py-28 lg:py-40 bg-brand-bg">
      <div className="max-w-[760px] mx-auto px-6">
        <div className="mb-20 text-center">
          <FadeIn>
            <Eyebrow>{t('faq.eyebrow')}</Eyebrow>
            <h2 className="font-serif break-words font-light tracking-tight text-brand-text-main text-[clamp(2.5rem,4vw,3rem)] leading-[1.08]">
              {t('faq.title')}
            </h2>
            <p className="mt-6 mx-auto font-sans break-words hyphens-auto font-light text-brand-text-muted text-base sm:text-lg max-w-2xl">
              {t('faq.desc')}
            </p>
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
                  <span className="font-sans break-words hyphens-auto font-medium text-base text-brand-text-main leading-[1.4] group-hover:text-brand-accent transition-colors duration-300">
                    {isKa ? faq.questionGe : faq.question}
                  </span>
                  <div className="ml-4 shrink-0 text-brand-accent">
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
                      <p className="font-sans break-words hyphens-auto font-light text-brand-text-muted leading-[1.75] text-[0.95rem] pb-7">
                        {isKa ? faq.answerGe : faq.answer}
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
