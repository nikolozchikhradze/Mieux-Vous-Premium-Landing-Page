import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../data/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50"
      style={{
        background: 'rgba(250,249,246,0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(212,175,55,0.12)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1.5 cursor-pointer group">
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              letterSpacing: '0.04em',
              fontSize: '1.5rem',
              color: '#1A1814'
            }}
          >
            Mieux Vous
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] translate-y-0.5 group-hover:scale-150 transition-transform duration-300" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "'Onest', sans-serif",
                fontSize: '0.85rem'
              }}
              className="font-medium text-[#1A1814] hover:text-[#D4AF37] transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button
            style={{
              fontFamily: "'Onest', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              borderRadius: '2px'
            }}
            className="px-6 py-2.5 border border-[#1A1814] text-[#1A1814] font-semibold uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#1A1814] transition-all duration-300"
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-[#1A1814]" onClick={() => setIsOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            style={{ background: '#FAF9F6' }}
            className="fixed inset-0 z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)} className="text-[#1A1814] p-2">
                <X size={32} />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {NAV_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 300,
                    fontSize: '2rem',
                    color: '#1A1814'
                  }}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                style={{
                  fontFamily: "'Onest', sans-serif",
                  fontSize: '0.7rem',
                  letterSpacing: '0.15em',
                  borderRadius: '2px',
                  background: '#1A1814',
                  color: '#D4AF37'
                }}
                className="mt-8 px-10 py-4 font-bold uppercase"
              >
                Book Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
