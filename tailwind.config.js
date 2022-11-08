module.exports = {
    content: ['./src/**/*/.{html,js}'],
    darkMode: 'class',
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            'modernBlack': '#252627',
            'modernBlack2': '#272829',
            'modernBlack3': '#303233',
        },
        transitionProperty: {
            'height': 'height',
            'spacing': 'margin, padding',
        },
    },
    plugins: [ 'forms', 'aspect-ratio', 'typography', 'line-clamp' ]
}