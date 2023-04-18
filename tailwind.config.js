/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      backgroundImage: {
        'hero-pattern': "url('./../public/images/photos/white-construction-hat-blue-print-with-copy-space.avif')",
      },
      colors: {
        dark_green: "#1A411D", //text color, avatar
        current_bg: "#ADE57740",
        not_focused_nav_text: "#A2A0A0",
        focused_nav_text: "#050505",
        primary_red: "#CE3234",
        btn_text: "#FEFFFE",
        deactivate_bg: "#F800001A",
        primary: "#FEAF39",
        gray_bg: "#F5F5F5",
        border_color: "#878787",
        primary_red_bg: "#F800001A",
        table_row_bg: "#F9F9F9",
        success_bg: "#9CFFDC70",
        success: "#28A745",
      },
      primaryGreen: {
        500: "#00E676",
      },
    },
  },
  plugins: [],
}

