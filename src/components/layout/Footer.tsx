import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Instagram, ChevronDown } from 'lucide-react';
import { BOOKING_OPTIONS } from '../../data/constants';

// Simple utility since we moved away from the monolithic file
const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');

const Footer = () => {
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
    <footer
      style={{
        background: '#111009',
        color: 'rgba(255,255,255,0.45)'
      }}
      className="pt-24 pb-12 text-sm"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-1.5">
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                  fontSize: '1.5rem',
                  color: '#fff',
                  letterSpacing: '0.04em'
                }}
              >
                Mieux Vous
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] translate-y-0.5" />
            </div>
            <p style={{ fontFamily: "'Onest', sans-serif", fontWeight: 300, lineHeight: 1.75 }}>
              Refined Aesthetics. Real Results.<br />
              Tbilisi's premier luxury medical cosmetic clinic.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  style={{
                    border: '1px solid rgba(212,175,55,0.3)',
                    borderRadius: '50%'
                  }}
                  className="w-10 h-10 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
              <a
                href="#"
                style={{
                  border: '1px solid rgba(212,175,55,0.3)',
                  borderRadius: '50%'
                }}
                className="w-10 h-10 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.12 5-.35 10-.72 14.99-.23 3.12-2.3 6.07-5.52 6.49-3.08.47-6.24-1.14-7.5-3.95-1.57-3.21.13-7.55 3.51-8.59.3-.09.62-.16.93-.2v4.03c-1.92.51-3.1 2.69-2.3 4.54.67 1.63 2.53 2.55 4.22 2.11 1.78-.4 2.82-2.3 2.72-4.08-.26-4.91-.49-9.82-.72-14.73 1.42-.02 2.84-.01 4.26-.02.04-.52.02-1.04.02-1.56V.02z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 style={{ fontFamily: "'Onest', sans-serif", fontWeight: 600, color: '#fff', fontSize: '0.9rem' }}>
              Quick Links
            </h4>
            <ul className="space-y-4" style={{ fontFamily: "'Onest', sans-serif", fontWeight: 300 }}>
              {footerLinks.map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-[#D4AF37] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 style={{ fontFamily: "'Onest', sans-serif", fontWeight: 600, color: '#fff', fontSize: '0.9rem' }}>
              Get in Touch
            </h4>
            <ul className="space-y-4" style={{ fontFamily: "'Onest', sans-serif", fontWeight: 300 }}>
              <li>Pekini 22, Tbilisi, Georgia</li>
              <li>info@mieuxvous.ge</li>
              <li>+995 555 000 000</li>
            </ul>
          </div>

          {/* Booking Dropdown */}
          <div className="space-y-6">
            <h4 style={{ fontFamily: "'Onest', sans-serif", fontWeight: 600, color: '#fff', fontSize: '0.9rem' }}>
              Booking
            </h4>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsBookingOpen(!isBookingOpen)}
                className="w-full px-5 py-4 flex items-center justify-between hover:border-[#D4AF37] transition-all"
                style={{
                  border: '1px solid rgba(212,175,55,0.2)',
                  fontFamily: "'Onest', sans-serif",
                  fontWeight: 300
                }}
              >
                <span className={selectedService !== 'Book a Service' ? 'text-white' : ''}>{selectedService}</span>
                <ChevronDown
                  className={cn('transition-transform duration-300', isBookingOpen && 'rotate-180')}
                  size={16}
                  style={{ color: '#D4AF37' }}
                />
              </button>
              <AnimatePresence>
                {isBookingOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-full mb-2 left-0 w-full z-20"
                    style={{
                      background: '#1A1814',
                      border: '1px solid rgba(212,175,55,0.2)'
                    }}
                  >
                    {BOOKING_OPTIONS.map(opt => (
                      <button
                        key={opt}
                        onClick={() => {
                          setSelectedService(opt);
                          setIsBookingOpen(false);
                        }}
                        className="w-full px-5 py-4 text-left hover:text-[#D4AF37] transition-colors"
                        style={{
                          fontFamily: "'Onest', sans-serif",
                          fontWeight: 300,
                          color: 'rgba(255,255,255,0.6)'
                        }}
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
        <div
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
          className="pt-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p style={{ fontFamily: "'Onest', sans-serif", fontWeight: 300, fontSize: '0.8rem' }}>
            © 2024 Mieux Vous. All rights reserved.
          </p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service'].map(link => (
              <a
                key={link}
                href="#"
                style={{ fontFamily: "'Onest', sans-serif", fontWeight: 300, fontSize: '0.8rem' }}
                className="hover:text-[#D4AF37] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
