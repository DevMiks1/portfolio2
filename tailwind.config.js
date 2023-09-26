/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff7d3b",
        secondary: "#9AA9B4",
        semiSecondary: "#1A1B1E",
        lightBlue : "#0099aa",
        blue:"#0074A3",
        red: "#FF6347",
        yellow: "#F7DF1E",
        green: "#3FA037",

        
        
        
      }
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

