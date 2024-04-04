/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        "screen/3":"33vh",
        "screen/2":"50vh"

      }
    },
  },
  plugins: [],
}

