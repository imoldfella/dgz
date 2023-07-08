/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./apps/**/*.{js,ts,jsx,tsx,mdx}', './libs/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
