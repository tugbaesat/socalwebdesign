/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#5ea9a9",
        "dark-bg": "#00181d",
        "light-bg": "#fdfdfd",
        "dark-primary-text": "#f2f2f2",
        "dark-secondary-text": "#999999",
        "light-primary-text": "#333333",
        "light-secondary-text": "#666666",
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "sans-serif"],
        heading: ["var(--font-raleway)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
