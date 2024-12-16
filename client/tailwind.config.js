/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: '#141417',
        primary: '#7263FF',
        primarydark: '#4D3FCD',
        text: '#686872',
      }
    }
  },
};
