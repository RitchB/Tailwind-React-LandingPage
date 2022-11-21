/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '440px',
      // => @media (min-width: 440px) { ... }

      'md': '547px',
      // => @media (min-width: 547px) { ... }

      'lg': '768px',
      // => @media (min-width: 768px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1680px',
      // => @media (min-width: 1680px) { ... }
    },
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)"
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          },
        },
      },
      colors: {
        primary: "#ff4800",
        twitter: '#00ACEE',
        darktwitter: '#15202B',
        linkdin: '#0E76A8',
        github: '#171515',
        cardsboxred: '#C22C39',
        cardsboxblue: '#1f396E',
        youtube: '#FF0000',
        solanagreen: '#14F195',
        solanablue: '#03E1FF',
        solanapurple: '#9945FF',
        dackbackground: '#0D0C0C'
      },
      fontFamily: {
        BebasNeue: "'Bebas Neue', cursive",
        PatrickHandSC: "'Patrick Hand SC', cursive",
        Nunito: "'Nunito', sans-serif",
        Encode: "'Encode Sans Condensed', sans-serif",
        Inter: "'Inter', sans-serif",
      },
    },
  },
  plugins: [],
};

