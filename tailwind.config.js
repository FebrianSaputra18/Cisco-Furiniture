/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display"],
      },
      backgroundImage: {
        content: "url('/src/assets/images/img-content2.png')",
      },
    },
  },
  plugins: [],
};
