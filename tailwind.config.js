/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`
  ],
  theme: {
    extend: {
      colors: {
        'light-default': '#e4e5ea',
        primary: {
          50: '#f5f5ff',
          100: '#eaebf8',
          200: '#ddddea',
          300: '#c9c9d6',
          400: '#a4a4b0',
          500: '#82838e',
          600: '#5c5c67',
          700: '#494954',
          800: '#2b2c36',
          900: '#0a0a16'
        },
        secondary: {
          50: '#f3f9ff',
          100: '#e6f1fd',
          200: '#e2e8f3',
          300: '#d1d7e3',
          400: '#adb3be',
          500: '#8d939e',
          600: '#656b75',
          700: '#525761',
          800: '#343942',
          900: '#141921'
        },
        accent: {
          50: '#fce2e5',
          100: '#f7b6bd',
          200: '#f08893',
          300: '#e6596a',
          400: '#dd394d',
          500: '#d41d32',
          600: '#c51632',
          700: '#b20d31',
          800: '#9f0030',
          900: '#7e002d'
        }
      }
    }
  },
  plugins: []
}
