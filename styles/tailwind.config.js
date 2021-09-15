module.exports = {
  mode: 'jit',
  purge: {
    content: ['_site/**/*.html'],
    options: {
      safeList: [],
    },
  },
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      colors: {
        brand: {
          grey: '#E5E7EB',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};