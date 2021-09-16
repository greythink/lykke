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
      backgroundSize: {
        'h-6': 'auto 1.5rem',
      },
      colors: {
        brand: {
          grey: '#E5E7EB',
          'dark-grey': '#D4D4D4',
        },
      },
      maxWidth: theme => theme('spacing'),
      spacing: {
        legible: '80ch',
      },
    },
  },
  variants: {},
  plugins: [],
};