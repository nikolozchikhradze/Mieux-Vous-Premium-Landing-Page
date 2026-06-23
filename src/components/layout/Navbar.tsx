import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../data/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-brand-primary/5 bg-brand-bg/70 backdrop-blur-md transition-all duration-300">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1.5 cursor-pointer group">
          <span className="font-serif font-normal tracking-wide text-2xl text-brand-text-main">
            Mieux Vous
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent translate-y-0.5 group-hover:scale-150 transition-transform duration-300" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans font-medium text-[0.85rem] text-brand-text-main hover:text-brand-accent transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button className="font-sans text-[0.7rem] tracking-[0.15em] rounded-sm px-6 py-2.5 border border-brand-text-main text-brand-text-main font-semibold uppercase hover:bg-brand-accent hover:text-brand-surface hover:border-brand-accent transition-all duration-300">
            Book Consultation
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-brand-text-main" onClick={() => setIsOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed inset-0 z-[100] h-screen w-screen bg-[#F9F6F0] flex flex-col p-6 animate-fade-in"
          >
            <div className="flex items-center justify-end w-full py-4">
              <button onClick={() => setIsOpen(false)} className="text-[#1A1615] p-2">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow space-y-8 font-serif text-2xl tracking-wide text-[#1A1615]">
              {NAV_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#5A6359] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button className="mt-8 px-10 py-4 font-sans font-bold uppercase text-[0.7rem] tracking-[0.15em] rounded-sm bg-[#1A1615] text-[#FFFFFF]">
                Book Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
