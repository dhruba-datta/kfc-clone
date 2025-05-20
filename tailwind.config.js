// File: tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        kfcRed: "#e31837",
        kfcWhite: "#ffffff",
        yandexGray: "#333",
        yandexLight: "#f5f5f5",
        greenDelivery: "#d4edda",
      },
    },
  },
  plugins: [],
};
