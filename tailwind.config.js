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
          bg: '#F9F6F0',
          surface: '#FFFFFF',
          primary: '#1A1615',
          secondary: '#2C2523',
          accent: '#5A6359',
          text: {
            main: '#1A1615',
            muted: '#6B625F',
            light: '#F9F6F0'
          }
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
