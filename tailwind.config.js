/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'border-yellow-400',
    'border-red-400',
    'border-green-400',
    // tambahkan kelas lain yang mungkin digunakan
  ],
  theme: {
    extend: {},
    fontFamily: {
      mono: ['consolas'],
      playwrite: ['Playwrite CU'],
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
};
