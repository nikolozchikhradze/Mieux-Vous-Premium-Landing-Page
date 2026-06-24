import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Instagram, ChevronDown } from 'lucide-react';
import { BOOKING_OPTIONS } from '../../data/constants';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../contexts/LanguageContext';
import { TranslationKey } from '../../data/translations';

const Footer = () => {
  const { t } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState('Book a Service');
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsBookingOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const footerLinks = ['Services', 'Process', 'FAQ', 'Contact'];

  return (
    <footer className="pt-24 pb-12 text-sm bg-brand-primary text-white/45">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-1.5">
              <span className="font-serif font-normal text-2xl text-white tracking-wide break-words">
                Mieux Vous
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent translate-y-0.5" />
            </div>
            <p className="font-sans break-words hyphens-auto font-light leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-brand-accent/30 hover:border-brand-accent hover:text-brand-accent transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-sans font-semibold text-white text-[0.9rem] break-words">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-4 font-sans font-light">
              {footerLinks.map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-brand-accent transition-colors break-words">
                    {t(`nav.${link.toLowerCase()}` as TranslationKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-sans font-semibold text-white text-[0.9rem] break-words">
              {t('footer.contactUs')}
            </h4>
            <ul className="space-y-4 font-sans font-light">
              <li className="break-words hyphens-auto">{t('footer.address')}</li>
              <li className="break-words">{t('footer.email')}</li>
              <li className="break-words whitespace-nowrap">{t('footer.phone')}</li>
            </ul>
          </div>

          {/* Booking Dropdown */}
          <div className="space-y-6">
            <h4 className="font-sans font-semibold text-white text-[0.9rem] break-words">
              {t('nav.book')}
            </h4>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsBookingOpen(!isBookingOpen)}
                className="w-full px-5 py-4 flex items-center justify-between border border-brand-accent/20 hover:border-brand-accent transition-all font-sans font-light"
              >
                <span className={selectedService !== 'Book a Service' ? 'text-white truncate' : 'truncate'}>{selectedService}</span>
                <ChevronDown
                  className={cn('transition-transform duration-300 text-brand-accent flex-shrink-0 ml-2', isBookingOpen && 'rotate-180')}
                  size={16}
                />
              </button>
              <AnimatePresence>
                {isBookingOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-full mb-2 left-0 w-full z-20 bg-brand-primary border border-brand-accent/20"
                  >
                    {BOOKING_OPTIONS.map(opt => (
                      <button
                        key={opt}
                        onClick={() => {
                          setSelectedService(opt);
                          setIsBookingOpen(false);
                        }}
                        className="w-full px-5 py-4 text-left hover:text-brand-accent transition-colors font-sans font-light text-white/60 truncate"
                      >
                        {opt}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5">
          <p className="font-sans break-words font-light text-[0.8rem]">
            {t('footer.rights')}
          </p>
          <div className="flex gap-8 font-sans font-light text-[0.8rem]">
            <a href="#" className="hover:text-brand-accent transition-colors break-words">
              {t('footer.privacy')}
            </a>
            <a href="#" className="hover:text-brand-accent transition-colors break-words">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
