module.exports = () => {
    return {
        ident: 'postcss',
        syntax: 'postcss-scss',
        sourceMap: true,
        from: 'undefined',
        plugins: {
            'postcss-simple-vars': {
                variables: () => {
                    /* eslint-disable */
                    const vars = require(`${__dirname}/styleDictionary/build/yello/postcss/tokens.json`);
                    /* eslint-enable */
                    return vars;
                },
            },
            'postcss-calc': {},
            'postcss-preset-env': {
                browsers: 'last 5 versions',
                stage: 1,
                features: {
                    'nesting-rules': true,
                    'custom-media-queries': {
                        importFrom: [
                            `src/assets/css/custom-mediaqueries/_mediaqueries.css`,
                        ],
                    },
                },
            },
            'postcss-inline-svg': {
                paths: [`./src/assets/yello/images`],
                encode: function (code) {
                    return code
                        .replace(/%/g, '%25')
                        .replace(/</g, '%3C')
                        .replace(/>/g, '%3E')
                        .replace(/&/g, '%26')
                        .replace(/{/g, '%7B')
                        .replace(/}/g, '%7D')
                        .replace(/\[/g, '%5B')
                        .replace(/\]/g, '%5D')
                        .replace(/\?/g, '%3F')
                        .replace(/#/g, '%23');
                },
            },
        },
    };
};
