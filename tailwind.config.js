/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ✅ NEW: Added your specific brand colors here
      colors: {
        brand: {
          dark: '#063677',  // Your dark blue
          light: '#73b2f8', // Your light bright blue
        }
      }
    },
  },
  plugins: [],
}