module.exports = {
    content: ['./index.html', './src/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                'label-default': '#130B43',
                'label-secondary': '#5C5589',
                'label-tertiary': '#76709F',
                'light-border': '#D5D8E4',
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            boxShadow: {
                'container': '0px 4px 42px 0px #4F72CD26',
                'button': '0px 1px 0px 1px #CBC9D999',
            }
        }
    },
}
