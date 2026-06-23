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
      className="relative"
      style={{ height: '300vh' }}
    >
      <div
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center"
        style={{ background: '#1A1814' }}
      >
        {/* ── Decorative vertical gold lines ── */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            left: '15%',
            top: '15%',
            width: '1px',
            height: '40%',
            background:
              'linear-gradient(to bottom, transparent, rgba(212,175,55,0.3), transparent)',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            right: '15%',
            top: '15%',
            width: '1px',
            height: '40%',
            background:
              'linear-gradient(to bottom, transparent, rgba(212,175,55,0.3), transparent)',
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
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(12rem, 28vw, 26rem)',
                fontWeight: 300,
                color: 'rgba(212,175,55,0.07)',
                lineHeight: 1,
                letterSpacing: '-0.04em',
              }}
              aria-hidden="true"
            >
              {JOURNEY_STEPS[activeStep].num}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* ── Header ── */}
        <div
          className="absolute left-0 right-0 z-10"
          style={{
            textAlign: 'center',
            top: 'clamp(3rem, 6vh, 5rem)',
          }}
        >
          <span
            style={{
              fontFamily: "'Onest', sans-serif",
              letterSpacing: '0.2em',
              fontSize: '0.7rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#D4AF37',
              display: 'block',
              marginBottom: '1.25rem',
            }}
          >
            THE JOURNEY
          </span>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              lineHeight: 1.08,
              color: '#fff',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              margin: 0,
            }}
          >
            Your Path to Radiance
          </h2>
        </div>

        {/* ── Step Content (AnimatePresence crossfade) ── */}
        <div
          className="relative z-10 w-full flex items-center justify-center px-6"
          style={{ marginTop: '4vh' }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              style={{ maxWidth: '600px', width: '100%' }}
            >
              <div
                style={{
                  width: '50px',
                  height: '1px',
                  background: '#D4AF37',
                  marginBottom: '1.5rem',
                }}
              />

              <span
                style={{
                  fontFamily: "'Onest', sans-serif",
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  color: '#D4AF37',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '1.25rem',
                }}
              >
                Step {JOURNEY_STEPS[activeStep].num}
              </span>

              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                  fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                  color: '#fff',
                  lineHeight: 1.1,
                  margin: '0 0 1.5rem 0',
                }}
              >
                {JOURNEY_STEPS[activeStep].title}
              </h3>

              <p
                style={{
                  fontFamily: "'Onest', sans-serif",
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  maxWidth: '480px',
                  margin: 0,
                }}
              >
                {JOURNEY_STEPS[activeStep].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Progress Indicators ── */}
        <div
          className="absolute left-0 right-0 z-10 flex flex-col items-center gap-3"
          style={{ bottom: '2rem' }}
        >
          <div className="flex items-center gap-2">
            {JOURNEY_STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                layout
                animate={{
                  width: activeStep === i ? 32 : 16,
                  background:
                    activeStep === i ? '#D4AF37' : 'rgba(255,255,255,0.2)',
                }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                style={{ height: '2px', borderRadius: '2px' }}
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
                style={{
                  fontFamily: "'Onest', sans-serif",
                  fontSize: '0.68rem',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.35)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                Scroll to explore
              </motion.span>
            )}
          </AnimatePresence>

          <div
            className="overflow-hidden"
            style={{
              width: '120px',
              height: '1px',
              background: 'rgba(255,255,255,0.08)',
              borderRadius: '1px',
            }}
          >
            <motion.div
              style={{
                width: progressWidth,
                height: '100%',
                background: '#D4AF37',
                borderRadius: '1px',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
