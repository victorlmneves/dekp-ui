/* SIZES YELLO */

const incr = 5;

const increment = (amount = 1) => {
    return `${amount * incr}px`;
};

module.exports = {
    Sizes: {
        breakpoints: {
            s: {
                value: '320px',
                type: 'sizing',
            },
            m: {
                value: '760px',
                type: 'sizing',
            },
            l: {
                value: '900px',
                type: 'sizing',
            },
            xl: {
                value: '1376px',
                type: 'sizing',
            },
        },
        spacings: {
            increment: {
                value: incr,
                type: 'sizing',
            },
            s: {
                xxs: {
                    value: increment(1),
                    type: 'sizing',
                },
                xs: {
                    value: increment(2),
                    type: 'sizing',
                },
                s: {
                    value: increment(3),
                    type: 'sizing',
                },
                m: {
                    value: increment(4),
                    type: 'sizing',
                },
                l: {
                    value: increment(5),
                    type: 'sizing',
                },
                xl: {
                    value: increment(6),
                    type: 'sizing',
                },
                xxl: {
                    value: increment(7),
                    type: 'sizing',
                },
            },
            l: {
                xxs: {
                    value: increment(3),
                    type: 'sizing',
                },
                xs: {
                    value: increment(4),
                    type: 'sizing',
                },
                s: {
                    value: increment(5),
                    type: 'sizing',
                },
                m: {
                    value: increment(6),
                    type: 'sizing',
                },
                l: {
                    value: increment(7),
                    type: 'sizing',
                },
                xl: {
                    value: increment(8),
                    type: 'sizing',
                },
                xxl: {
                    value: increment(9),
                    type: 'sizing',
                },
            },
        },
        page: {
            min: {
                value: '320px',
                type: 'sizing',
            },
            'margin-hor': {
                value: '{Sizes.spacings.s.m.value}',
                type: 'sizing',
            },
        },
        content: {
            min: {
                value: '280px',
                type: 'sizing',
            },
            max: {
                value: '1092px',
                type: 'sizing',
            },
        },
    },
};
