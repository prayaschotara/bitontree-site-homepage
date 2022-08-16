/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        InriaSans: ["Inria Sans", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        'darkBlue': '#1A3573',
        'darkBlueOpaque': 'rgba(26,53,115, 0.89)',
        'pinkishRedOpaque': 'rgba(255, 46, 98, 0.06)',
        'pinkishRed': '#FF2E63',
        'dullBlack': '#263238',
        'blue': '#044479',
        'blueOpaque': 'rgba(4, 68, 121, 0.03)',
        'dullBlue': '#374460',
        'grey': '#8A8787',
        'orangeNew': '#FF6D2D',
        'offWhite': "#F9F9F9",
        'footerGray': '#AEAFB6',
        'dullBlack': '#6A6A6B',
      },
      zIndex: {
        '-1': '-1'
      },
      rotate: {
        '17.14deg': '17.14deg'
      },
      width:{
        '1061px': '1061px',
        '60px': '60px',
        '5px': '5px'
      },
      height: {
        '500px': '500px',
        '3px': '3px'
      },
      skew: {
        '20': '20deg',
        '10': '10deg'
      },
      borderRadius: {
        '30': '30px'
      },
      backgroundImage: {
        'dot-bg': "url('../../assets/dot-bg.svg')",
        
      },
      fontSize: {
        '40px': '40px'
      }
      
    },
  },
  plugins: [],
}
