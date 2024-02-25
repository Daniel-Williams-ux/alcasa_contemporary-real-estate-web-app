/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGold: '#D7BE96',
        formColor: '#c2b299',
        custom: '#e4dfd4',
        customBlack: '#1b1b1b',
      },

      backgroundImage: {
        'hero-pattern': "url('/contact.jpg')",
      },

      animation: {
        menu: 'menu-slide',
      },
      maxWidth: {
        menu: '40vw',
      },
      keyframes: {
        'menu-slide': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}