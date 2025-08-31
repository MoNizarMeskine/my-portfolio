/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideRun: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100vw)' },
        },
      },
      animation: {
        'slide-run': 'slideRun 1.0s linear forwards',
      },
    },
    screens: {
      'xl': '1280px',
      '2xl': '1536px',
      'desktop': '1630px',
    },
  },
  plugins: [],
}