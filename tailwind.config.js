/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {

  content: [
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}'
  ],

  theme: {

    extend: {
      width: {
        'custom': '38%',
        'creteriaCustom': '22%',
        'stokeCustom': '80%',
        'casestudiesCustom': '31.8%',
        'custom94': '94%',
        'widthcustom': '80%',
        'width31%': '31%',
        'width72%': '72%',
        'width68%': '68%',
        'width31.8%':'31.8%',
        'width32%':'32%',
        'width20%': '20%',
        'width80%': '80%',
        'width96%': '96%',
        'width86%': '86%',
        'width90%': '90%'
      },
      height: {
        'buttonhight': '49px',
        'buttonhightmobile': '49px',
        'testionialheight': '350px'
      },
      inset: {
        'Leftcustom': '14%',
        'topcustom': '-35px',
        'toptotal': '38%',
        'righttotal': '20%',
        'withtoptotal': '53%',
        'withrighttotal': '16%'
      },
      spacing: {
        'ml4%': '4%',
        'ml10%': '10%'
      },
      boxShadow: {
        'custom': '0px 3px 44px 0px #0000001c',
        'customcard': '0px 8px 15px 0px #0000000A',
        'roomcard': '0px 8px 24px 0px #00000003',
        'cardsadow': '0px 18px 30px 0px #0000000F',
        'searchcard': '0px 11px 14px 0px #00000014'
      },

      fontFamily: {
        'sans': ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
        // TODO: Replace with the correct display font according to the designs.
        'display': ['"Comic Sans MS"', ...defaultTheme.fontFamily.sans]
      },

      backgroundImage: theme => ({
        'gradient-primary-light': `linear-gradient(to right, ${theme('colors.primary.400')}, ${theme('colors.secondary.200')})`,
        'gradient-primary': `linear-gradient(to right, ${theme('colors.primary.DEFAULT')}, ${theme('colors.secondary.DEFAULT')})`
      })
      

    },

    colors: {

      transparent: 'transparent',
      current: 'currentColor',
 
      black: 'black',
      white: 'white',

      grey: {
        DEFAULT: '#BBBBBB',
        800: '#333333',
        600: '#666666',
        500: '#828282',
        400: '#BBBBBB',
        300: '#D2D2D2', 
        200: '#E3E3E3',
        100: '#F7F7F7',
        50: '#F5F5F5'
      },

      primary: {
        DEFAULT: '#0026ec',
        800: '#1e40af',
        700: '#1d4ed8',
        600: '#2563eb',
        500: '#3b82f6',
        400: '#60a5fa',
        300: '#93c5fd', 
        200: '#bfdbfe',
        100: '#dbeafe',
        50: '#f1f3fe',
        25: '#eaedfd'
      },

      // Same as the primary color.
      blue: {
        DEFAULT: '#0026ec'
      },

      secondary: {
        DEFAULT: '#1bffff',
        200: '#8cf2fe',
        400: '#1bffff'
      },

      // Same as the secondary color.
      sky: {
        DEFAULT: '#1bffff'
      },

      green: {
        DEFAULT: '#6fcf97',
        200: '#ecfef3',
        400: '#6fcf97'
      },

      red: {
        DEFAULT: '#DC1500'
      },
      redlight: {
        DEFAULT: '#FFEBE8'
      },
      purple: {
        DEFAULT: '#e6eafe'
      },

      debug: {
        DEFAULT: 'rgba(255, 0, 0, 0.5)'
      },
      
      blacklight: {
        DEFAULT: '#212121'
      },

      grey_sky: {
        DEFAULT: '#f7f8fe'
      },
      black_p: {
        DEFAULT: '#3C3C3C'
      },
      boderColor: {
        DEFAULT: '#99A9FF',
        300: '#d8dde3'
      },
      light_sky: {
        DEFAULT: '#DBF0E9'
      },
      yellow_light: {
        DEFAULT: '#E8F6C8'
      },
      sky_light50:{
        DEFAULT: '#f6ffff'
      },
      sky_light25:{
        DEFAULT: '#fafbff'
      },
      errors:{
        DEFAULT: '#FF6A5A'
      },
      green_light:{
        DEFAULT: '#D4FFE6',
        100: '#00FF6A'
      },
      green_dark: {
        DEFAULT: '#22D06B',
        400: '#FF4C5'
      },
      blue_light_sky:{
        DEFAULT: '#E0EDFE'
      },
      blue_dark_sky:{
        DEFAULT: '#3B90FF'
      },
      blue_sky:{
        DEFAULT: '#006EFF'
      },
      white_light:{
        DEFAULT: '#F7F8FF'
      }

    }
  },
  plugins: []
};
