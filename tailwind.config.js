module.exports = {
  // https://github.com/gatsbyjs/gatsby/issues/35775
  content: ['./src/pages/*.tsx', './src/components/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      keyframes: {
        slideRight: {
          '0%': {
            transform: 'translateX(0%)',
          },
        
          '70%': {
            transform: 'translateX(0%)',
          },

          '85%': {
            transform: 'translateX(1%)',
          },
        
          '100%': {
            transform: 'translateX(0%)',
          }
        }
      },
      animation: {
        periodicSlideRight: 'slideRight 1.5s ease infinite',
      }
    },
  },
  plugins: [],
};
