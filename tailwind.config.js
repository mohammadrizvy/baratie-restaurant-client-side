/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#570DF8",

          secondary: "#442A3E",

          accent: "#37CDBE",

          neutral: "#f3f4f6",

          "base-100": "#FFFFFF",

          info: "#d1d5db",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
    colors: {
      "blue-purple": ["#6F34A8", "#D16ED1"],
    },
  },
  plugins: [require("daisyui")],
};
