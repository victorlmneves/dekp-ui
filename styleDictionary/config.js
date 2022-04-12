/* eslint-disable */
const path = require('path');
const Color = require('tinycolor2');
/* eslint-enable */

module.exports = (() => {
    const tokensPath = path.resolve(__dirname, `tokens/yello`);
    const buildPath = path.resolve(__dirname, `build/yello`);

    return {
        source: [`${tokensPath}/**/*.js*`],
        transform: {
            'col/sketch': {
                type: 'value',
                matcher: (prop) => {
                    if (
                        prop.attributes.category === 'col' &&
                        prop.original.type === 'color'
                    ) {
                        return true;
                    }

                    return false;
                },
                transformer: function (prop) {
                    const color = Color(prop.original.value).toRgb();
                    return {
                        red: (color.r / 255).toFixed(2),
                        green: (color.g / 255).toFixed(2),
                        blue: (color.b / 255).toFixed(2),
                        alpha: color.a,
                    };
                },
            },
        },
        platforms: {
            javascript: {
                transformGroup: 'js',
                transforms: ['name/cti/kebab'],
                buildPath: `${buildPath}/`,
                files: [
                    /* Nested JSON can be imported into Figma with Figma Tokens Plugin */
                    {
                        destination: 'figma/tokens.json',
                        format: 'json',
                        options: {
                            outputReferences: false,
                            filePath: false,
                        },
                    },
                    /* JSON-Flat makes variables accessible for PostCSS */
                    {
                        destination: 'postcss/tokens.json',
                        format: 'json/flat',
                    },
                ],
            },
            scss: {
                transformGroup: 'scss',
                buildPath: `${buildPath}/scss/`,
                files: [
                    {
                        destination: 'index.scss',
                        format: 'scss/variables',
                        options: {
                            outputReferences: true,
                        },
                    },
                ],
            },
            sketch: {
                source: [`${tokensPath}/color/color.json`],
                transforms: ['name/cti/camel', 'attribute/cti', 'col/sketch'],
                buildPath: `${buildPath}/`,
                files: [
                    {
                        destination: 'sketch/colors.sketchpalette',
                        format: 'sketch/palette/v2',
                        filter: {
                            type: 'color',
                        },
                    },
                ],
            },
        },
    };
})();
