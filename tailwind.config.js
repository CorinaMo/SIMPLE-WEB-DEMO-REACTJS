/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'rainbow': 'linear-gradient(to right, hsl(0 100% 50%), hsl(60 100% 50%), hsl(120 100% 50%), hsl(180 100% 50%), hsl(240 100% 50%), hsl(300 100% 50%))',
        'unsplash1': `url('./assets/images/anas-alshanti-unsplash.jpg')`,
      },

      fontFamily: {
        "mont": "Montserrat Alternates",
        "arimo": "Arimo",
        "quicksand": "Quicksand",
        "ephesis": "Ephesis"
      }
    },
  },
  plugins: [],
}

