module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      width:{
        '94': '23.5rem',
      },
      height: {
        '91': '22.75rem',
      },
      maxHeight: {
        '91': '22.75rem',
      },
      colors: {
        'label-default': '#130B43',
        'label-secondary': '#5C5589',
        'label-tertiary': '#76709F',
        'light-border': '#D5D8E4',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(180deg, #ffffff80 0%, #ffffff00 100%), #FFF4E3'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'notification': '0px 4px 24px rgba(156, 130, 38, 0.4)',
        'header-element': '0px 4px 16px 0px #4F72CD4D',
        'container': '0px 4px 42px 0px #4F72CD26',
        'button': '0px 1px 0px 1px #CBC9D999',
        'selector': '0px 0px 2px 2px #2E57E840',
      }
    }
  },
}
