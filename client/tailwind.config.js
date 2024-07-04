import withMT from '@material-tailwind/html/utils/withMT';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      // default colors
      transparent: 'transparent',
      current: 'currentColor',
      emerald: colors.emerald,
      indigo: colors.indigo,

      // project colors
      dark: {
        primary: '#121212',
        secondary: '#151515',
        tertiary: '#000000',
        gray: '#343434'
      },
      light: {
        primary: '#F9F9F9',
        secondary: '#F5F5F5',
        tertiary: '#dfe0e1',
        gray: '#6b6b6b'
      },
      url: {
        blue: '#737CCF'
      },
      ...colors
    },
    extend: {
      backgroundImage: {
        'bg-1': "url('assets/background/bg-1.jpg')",
        'bg-2': "url('assets/background/bg-2.jpg')",
        'bg-3': "url('assets/background/bg-3.jpg')",
        'bg-4': "url('assets/background/bg-3.jpg')",
        'bg-5': "url('assets/background/bg-3.jpg')",
        'bg-6': "url('assets/background/bg-6.jpg')"
      },
      animation: {
        border: 'border 4s ease infinite'
      },
      keyframes: {
        border: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      breeSerif: ['Bree Serif', 'serif'],
      roboto: ['Roboto', 'sans-serif'],
      robotoCondensed: ['Roboto-condensed', 'sans-serif']
    }
  },
  plugins: []
});