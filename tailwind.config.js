module.exports = {
  // https://github.com/gatsbyjs/gatsby/issues/35775
  content: ['./src/pages/*.tsx', './src/components/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
      keyframes: {
        slideRight: {
          '0%': {
            transform: 'translateX(0%)',
          },
        
          '60%': {
            transform: 'translateX(0%)',
          },

          '70%': {
            transform: 'translateX(1%)',
          },
        
          '80%': {
            transform: 'translateX(0%)',
          },

          '90%': {
            transform: 'translateX(0.8%)',
          },
        
          '100%': {
            transform: 'translateX(0%)',
          }
        }
      },
      animation: {
        periodicSlideRight: 'slideRight 2s ease infinite',
      }
    },
  },
  plugins: [],
};
