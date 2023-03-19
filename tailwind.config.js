/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          60: "#989eff",
          100: "#545DFF",
        },
        secondary: {
          10: "#FFF7ED",
          20: "#FDD6A3",
          40: "#FCC67E",
          60: "#FBBD6C",
          80: "#FBB559",
          90: "#FAAD47",
        },
      },
      dropShadow: {
        card: [
          "0 4px 12px rgb(84 93 255 / 0.08)",
          "0 3px 4px rgb(84 93 255 / 0.1)",
        ],
      },
    },
    screens: {
      sm: "480px",
      md: "698px",
      lg: "1100px",
      xl: "1680px",
    },
  },
  plugins: [],
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
