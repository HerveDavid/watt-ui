/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        isa: {
          // ISA 101 colors
          'gray-63': '#3F3F3F',   // Dark Gray 63 - Title/Label Foreground
          'gray-91': '#919191',   // Light Gray 91 - Engineering Unit
          'gray-160': '#A0A0A4',  // Gray 160 - Equipment Border
          'gray-192': '#C0C0C0',  // Light Gray 192 - Silver
          'gray-216': '#D8D8D8',  // Light Gray 216 - Separator Line
          'gray-224': '#E0E0E0',  // Light Gray 224 - Background
          'gray-232': '#E8E8E8',  // Light Gray 232 - Grouping Box
          'gray-240': '#F0F0F0',  // Off White - Equipment On
          'gray-128': '#808080',  // Gray 128 - Equipment Off/Disabled
          'button': {
            'default': '#C6C6C6', // Light Gray 198 - Button Fill
            'border': '#AAAAAA',  // Gray 170 - Button Outline
            'hover': '#D4D4D4',   // Light Gray Hover
            'active': '#B8B8B8',  // Pressed state
          }
        }
      }
    },  },
  plugins: [],
}

