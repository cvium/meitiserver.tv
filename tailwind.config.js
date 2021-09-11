module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        torch: {
          500: '#ff0125'
        },
        thatch: {
          100: '#fff4f0',
          300: '#d1beba',
          500: '#bea6a1'
        },
        gondola: {
          900: '#24111d'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
