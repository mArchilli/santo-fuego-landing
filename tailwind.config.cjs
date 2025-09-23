module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        accent: '#b91c1c',
        gold: '#d4af37'
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
}