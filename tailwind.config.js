/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens:{
        "sm" : "480px"
      },
      spacing: {
        "big" : "48rem"
      },
      keyframes: {
        carouselAnim: {
          from: { transform: 'translate(0, 0)' },
          to: { transform: 'translate(calc(-100% + (6 * 300px)))' },
        },
      },
      animation: {
        'carousel': 'carouselAnim 10s infinite alternate linear',
      },
    },
    fontFamily:{
      nunito: ['Nunito','sans-serif']
    }
  },
  plugins: [],
}

