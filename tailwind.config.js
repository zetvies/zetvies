/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '1025px',
      // => @media (min-width: 600px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
