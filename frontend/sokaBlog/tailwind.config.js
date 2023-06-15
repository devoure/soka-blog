/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-background' : "url('/public/images/topbkg.png')"
      },
      boxShadow: {
        'inset-lg' : '0 0 200px 150px black inset'
      },
      fontFamily: {
        'oswald' : ['Oswald'],
        'alegreya' : ['Alegreya'],
        'lato' : ['Lato']
      },
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px'
      },
      keyframes: {
        blink:{
          from : { "border-color":"transparent"},
          to : { "border-color":"white" }
        },
        typing:{
          from : { width: "0" },
          to: {width: "14ch"}
        }
      },
      animation: {
        'typing':'typing 4s steps(14), blink .4s infinite'
      },
    },
  },
  plugins: [],
}

