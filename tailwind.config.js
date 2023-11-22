/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // fontSize: {

    // },
    extend: {
      fontFamily:{
        Inter:['Inter', 'sans-serif']

      },
      colors:{
        'primary':"#EDF738",
        'red':'#DC2B46',
        'blue':"#3E6DD9"
      },
      // backgroundColor:{
      //   'bgColor':'#070707'

      // }
    },
  },
  plugins: [],
}


