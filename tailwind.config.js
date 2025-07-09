/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
    },
  },
  plugins: [],
};
