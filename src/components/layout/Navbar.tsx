import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../data/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-bg/92 backdrop-blur-md border-b border-brand-accent/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
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

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed inset-0 z-[60] flex flex-col p-8 bg-brand-bg"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)} className="text-brand-text-main p-2">
                <X size={32} />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {NAV_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-serif font-light text-3xl text-brand-text-main hover:text-brand-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button className="mt-8 px-10 py-4 font-sans font-bold uppercase text-[0.7rem] tracking-[0.15em] rounded-sm bg-brand-text-main text-brand-surface">
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
