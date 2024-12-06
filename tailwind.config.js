module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'juche-red': '#FF0000',
        'juche-blue': '#0033A0',
        'juche-white': '#FFFFFF',
        'juche-gold': '#FFD700',
        'juche-light-gray': '#D3D3D3',
        'juche-dark-gray': '#A9A9A9',
        'juche-brown': '#8B4513',
        'juche-bronze': '#CD7F32',
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
        korean: ['Noto Sans KR', 'sans-serif'],
      },
      backgroundColor: {
        'dark': '#1a202c',
      },
      textColor: {
        'dark': '#e2e8f0',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

