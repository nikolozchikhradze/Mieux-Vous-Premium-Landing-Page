import * as React from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { JOURNEY_STEPS } from '../../data/constants';

const JourneySection = () => {
  // ── Ref for the scroll-track parent ──
  const containerRef = React.useRef<HTMLDivElement>(null);

  // ── Track scroll progress of the parent section (0 → 1 over 300vh) ──
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // ── Derive the active step index from scroll progress ──
  const [activeStep, setActiveStep] = React.useState(0);

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      if (v < 0.33) {
        setActiveStep(0);
      } else if (v < 0.66) {
        setActiveStep(1);
      } else {
        setActiveStep(2);
      }
    });
    return unsubscribe;
  }, [scrollYProgress]);

  // ── Continuous progress bar width ──
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative h-[300vh]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-brand-primary">
        {/* ── Decorative vertical lines ── */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none left-[15%] top-[15%] w-px h-[40%]"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(249, 246, 240, 0.05), transparent)',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute pointer-events-none right-[15%] top-[15%] w-px h-[40%]"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(249, 246, 240, 0.05), transparent)',
          }}
        />

        {/* ── Background Number (AnimatePresence mode="wait") ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -120 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          >
            <span
              className="font-serif font-light text-[clamp(12rem,28vw,26rem)] text-brand-surface/[0.03] leading-none tracking-tight"
              aria-hidden="true"
            >
              {JOURNEY_STEPS[activeStep].num}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* ── Header ── */}
        <div className="absolute left-0 right-0 z-10 text-center top-[clamp(3rem,6vh,5rem)]">
          <span className="font-sans text-[0.7rem] font-bold tracking-[0.2em] uppercase text-brand-accent block mb-5">
            THE JOURNEY
          </span>
          <h2 className="font-serif font-light leading-[1.08] text-brand-text-light text-[clamp(2rem,4vw,3rem)] m-0">
            Your Path to Radiance
          </h2>
        </div>

        {/* ── Step Content (AnimatePresence crossfade) ── */}
        <div className="relative z-10 w-full flex items-center justify-center px-6 mt-[4vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className="max-w-[600px] w-full"
            >
              <div className="w-[50px] h-px bg-brand-accent mb-6" />

              <span className="font-sans text-[0.72rem] font-medium text-brand-accent tracking-[0.18em] uppercase block mb-5">
                Step {JOURNEY_STEPS[activeStep].num}
              </span>

              <h3 className="font-serif font-normal text-[clamp(1.8rem,3vw,2.8rem)] text-brand-text-light leading-[1.1] m-0 mb-6">
                {JOURNEY_STEPS[activeStep].title}
              </h3>

              <p className="font-sans font-light text-brand-text-light/70 text-base leading-[1.75] max-w-[480px] m-0">
                {JOURNEY_STEPS[activeStep].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Progress Indicators ── */}
        <div className="absolute left-0 right-0 z-10 flex flex-col items-center gap-3 bottom-8">
          <div className="flex items-center gap-2">
            {JOURNEY_STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                layout
                animate={{
                  width: activeStep === i ? 32 : 16,
                  background: activeStep === i ? '#5A6359' : 'rgba(249,246,240,0.1)',
                }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="h-[2px] rounded-[2px]"
              />
            ))}
          </div>

          <AnimatePresence>
            {activeStep === 0 && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="font-sans text-[0.68rem] font-light text-brand-text-light/40 tracking-[0.12em] uppercase"
              >
                Scroll to explore
              </motion.span>
            )}
          </AnimatePresence>

          <div className="overflow-hidden w-[120px] h-px bg-brand-text-light/10 rounded-[1px]">
            <motion.div
              style={{ width: progressWidth }}
              className="h-full bg-brand-accent rounded-[1px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
