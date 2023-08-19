/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'text-base': '#ffffff',
        primary: '#454cbf',
        secondary: '#c57c85',
        accent: '#422a68',
        black: '#000000',
        grey: '#6A727F',
        grey_0: '#4a4a4a',
        grey_1: '#707070',
        light_1: '#ebebeb',
        white: '#ffffff',
        background: '#ffffff',
        red: '#ff0000',
        light_white: '#f4f6f6',
        orange: '#ffae1a',
        mono: '#754c00',
        'border-red': '#ff0000',
        bgGrey: '#808080',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
};
