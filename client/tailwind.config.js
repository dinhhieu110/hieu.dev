/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
        'primary-gradient-hover': 'linear-gradient(135deg, #1d4ed8 0%, #0891b2 100%)',
      },
    },
  },
  plugins: [],
};