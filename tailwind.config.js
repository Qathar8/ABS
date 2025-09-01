/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f4ff',
          100: '#b3e0ff',
          200: '#80ccff',
          300: '#4db8ff',
          400: '#1aa4ff',
          500: '#0077b6',
          600: '#005577',
          700: '#003344',
          800: '#001122',
          900: '#000811',
        },
        secondary: {
          50: '#e6fffe',
          100: '#b3fffc',
          200: '#80fff9',
          300: '#4dfff7',
          400: '#1afff4',
          500: '#00b4d8',
          600: '#0088a6',
          700: '#005c74',
          800: '#003042',
          900: '#000411',
        },
        navy: {
          50: '#e6e7ff',
          100: '#b3b7ff',
          200: '#8087ff',
          300: '#4d57ff',
          400: '#1a27ff',
          500: '#03045e',
          600: '#020347',
          700: '#020230',
          800: '#010119',
          900: '#000002',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};