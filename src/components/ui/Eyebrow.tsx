import * as React from 'react';

interface EyebrowProps {
  children: React.ReactNode;
}

export const Eyebrow: React.FC<EyebrowProps> = ({ children }) => (
  <span className="font-sans font-bold uppercase tracking-[0.2em] text-[0.7rem] text-brand-accent block mb-5">
    {children}
  </span>
);
