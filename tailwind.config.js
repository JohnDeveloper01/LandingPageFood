/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        custom: "620px",
      },
      colors: {
        colorCustom: "#FA4A0C",
      },
      spacing: {
        "40-c": "40rem",
      },
      backgroundImage: {
        urlDownload: "url(./img/download.png)",
      },
    },
  },
  plugins: [],
};
