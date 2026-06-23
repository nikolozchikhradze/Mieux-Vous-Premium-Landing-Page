/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'bg-light': '#FAF8F5',
          'bg-dark': '#191B1F',
          'gold': '#D4AF37',
          'text-main': '#2C2E33',
          'text-muted': '#8E9094',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Onest', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 10px 40px -10px rgba(0,0,0,0.08)',
      }
    },
  },
  plugins: [],
}
