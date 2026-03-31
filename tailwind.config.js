/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        slate: '#334155',
        electric: '#2563eb',
        skyline: '#0ea5e9',
        sunrise: '#f97316',
        mist: '#f8fafc'
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body: ['Manrope', 'sans-serif']
      },
      boxShadow: {
        glow: '0 16px 50px rgba(37, 99, 235, 0.25)'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.65s ease forwards',
        floaty: 'floaty 5s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
