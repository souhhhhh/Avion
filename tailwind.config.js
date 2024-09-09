/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      
      colors: { 
        'purple-light': '#2A254B',
        'purple-dark': '#12131A',
        'blue-light': '#505977'
      },
      
      fontFamily: { 
        Satoshi: ['Satoshi'],
        ClashDisplay: ['ClashDisplay'],
        Roboto: ['Roboto']
      }
    },
  },
  plugins: [],
}

