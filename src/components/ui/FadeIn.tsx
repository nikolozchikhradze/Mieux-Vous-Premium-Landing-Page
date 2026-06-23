import * as React from 'react';
import { motion, useInView } from 'framer-motion';
import { EASE_LUXURY } from '../../data/constants';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  x?: number;
  y?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  className = '',
  x = 0,
  y = 40
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y, x }}
      transition={{ duration: 0.9, ease: EASE_LUXURY, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
