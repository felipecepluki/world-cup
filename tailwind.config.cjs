/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('./src/assets/home.jpg')",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
};
