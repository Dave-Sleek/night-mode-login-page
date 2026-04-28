/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        board: '#f8f5ec',
        ink: '#1f2937',
        accent: '#3f7d58',
        pin: '#b45309',
      },
      boxShadow: {
        card: '0 8px 20px rgba(31, 41, 55, 0.08)',
      },
      fontFamily: {
        display: ['"Trebuchet MS"', '"Arial Rounded MT Bold"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
