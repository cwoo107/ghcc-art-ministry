const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my-image-title': "url('/assets/background.webp')",
        'my-image': "url('/assets/background_no_title.webp')"
      },
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#45321c',
        },
        cream: {
          50: '#fcfaf6',
          100: '#faf6ee',
          200: '#f7f1e6',
          300: '#f5edde',
          400: '#f2e8d6',
          500: '#f0e4ce',
          600: '#eddfc6',
          700: '#ebdbbe',
          800: '#e8d6b6',
          900: '#e6d2ae',
        }},
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
