/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        baseColor: "#74E953",
        hoverColor: "#97ef7e",
        secondaryColor: "#3e92cc",
        darkColor: "#0d1321",
      },
    },
  },
  plugins: [],
};
