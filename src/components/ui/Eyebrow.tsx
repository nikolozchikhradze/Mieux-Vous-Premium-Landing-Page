import * as React from 'react';

interface EyebrowProps {
  children: React.ReactNode;
}

export const Eyebrow: React.FC<EyebrowProps> = ({ children }) => (
  <span
    style={{
      fontFamily: "'Onest', sans-serif",
      letterSpacing: '0.2em',
      fontSize: '0.7rem'
    }}
    className="font-bold uppercase text-[#D4AF37] block mb-5"
  >
    {children}
  </span>
);
