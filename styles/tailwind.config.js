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
      screens: {
        'sm': '768px',
        'md': '1024px',
        'lg': '1280px',
        'xl': '1536px',
      },
    },
    screens: {
      'xl': '480px',
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1536px',
    },
    extend: {
      backgroundSize: {
        'h-6': 'auto 1.5rem',
        'w-8': '2rem auto',
      },
      colors: {
        brand: {
          grey: '#E5E7EB',
          'light-grey': '#F3F4F6',
          'dark-grey': '#D4D4D4',
        },
      },
      maxWidth: theme => theme('spacing'),
      spacing: {
        '60ch': '60ch',
        '70ch': '70ch',
      },
    },
  },
  variants: {},
  plugins: [],
};