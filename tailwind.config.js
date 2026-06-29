/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["var(--font-helvetica)"],
        montreal: ["var(--font-neue-montreal)"],
      },
    },
  },
  plugins: [],
};
