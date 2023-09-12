/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx"
  ],
  important: "#root",
  theme: {
    fontFamily:{
      sans: ['Inter', 'sans-serif']
    },
    extend: {},
  },
   plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}

