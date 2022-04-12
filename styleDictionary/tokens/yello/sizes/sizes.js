/* SIZES YELLO */

const incr = 2;

const increment = (amount = 1) => {
    return `${amount * incr}px`;
};

module.exports = {
    Sizes: {
        breakpoints: {
            xs: {
                value: '320px',
                type: 'sizing',
            },
            s: {
                value: '600px',
                type: 'sizing',
            },
            m: {
                value: '905px',
                type: 'sizing',
            },
            l: {
                value: '1240px',
                type: 'sizing',
            },
            xl: {
                value: '1440px',
                type: 'sizing',
            },
        },
        grid: {
            s: {
                numOfCols: {
                    value: '4',
                },
                gutter: {
                    value: '16px',
                },
                margin: {
                    value: '20px',
                },
            },
            m: {
                numOfCols: {
                    value: '12',
                },
                gutter: {
                    value: '20px',
                },
                margin: {
                    value: '24px',
                },
            },
            l: {
                numOfCols: {
                    value: '12',
                },
                gutter: {
                    value: '24px',
                },
                margin: {
                    value: '32px',
                },
            },
            xl: {
                numOfCols: {
                    value: '12',
                },
                gutter: {
                    value: '24px',
                },
                margin: {
                    value: '32px',
                },
            },
        },
        spacings: {
            increment: {
                value: incr,
                type: 'sizing',
            },
            s: {
                xxxs: {
                    value: increment(2),
                    type: 'sizing',
                },
                xxs: {
                    value: increment(4),
                    type: 'sizing',
                },
                xs: {
                    value: increment(6),
                    type: 'sizing',
                },
                s: {
                    value: increment(8),
                    type: 'sizing',
                },
                m: {
                    value: increment(10),
                    type: 'sizing',
                },
                l: {
                    value: increment(12),
                    type: 'sizing',
                },
                xl: {
                    value: increment(16),
                    type: 'sizing',
                },
                xxl: {
                    value: increment(20),
                    type: 'sizing',
                },
                xxxl: {
                    value: increment(30),
                    type: 'sizing',
                },
            },
            m: {
                xxxs: {
                    value: increment(3),
                    type: 'sizing',
                },
                xxs: {
                    value: increment(6),
                    type: 'sizing',
                },
                xs: {
                    value: increment(9),
                    type: 'sizing',
                },
                s: {
                    value: increment(12),
                    type: 'sizing',
                },
                m: {
                    value: increment(15),
                    type: 'sizing',
                },
                l: {
                    value: increment(18),
                    type: 'sizing',
                },
                xl: {
                    value: increment(24),
                    type: 'sizing',
                },
                xxl: {
                    value: increment(30),
                    type: 'sizing',
                },
                xxxl: {
                    value: increment(45),
                    type: 'sizing',
                },
            },
            l: {
                xxxs: {
                    value: increment(4),
                    type: 'sizing',
                },
                xxs: {
                    value: increment(8),
                    type: 'sizing',
                },
                xs: {
                    value: increment(12),
                    type: 'sizing',
                },
                s: {
                    value: increment(16),
                    type: 'sizing',
                },
                m: {
                    value: increment(20),
                    type: 'sizing',
                },
                l: {
                    value: increment(24),
                    type: 'sizing',
                },
                xl: {
                    value: increment(32),
                    type: 'sizing',
                },
                xxl: {
                    value: increment(40),
                    type: 'sizing',
                },
                xxxl: {
                    value: increment(60),
                    type: 'sizing',
                },
            },
            xl: {
                xxxs: {
                    value: increment(5),
                    type: 'sizing',
                },
                xxs: {
                    value: increment(10),
                    type: 'sizing',
                },
                xs: {
                    value: increment(15),
                    type: 'sizing',
                },
                s: {
                    value: increment(20),
                    type: 'sizing',
                },
                m: {
                    value: increment(25),
                    type: 'sizing',
                },
                l: {
                    value: increment(30),
                    type: 'sizing',
                },
                xl: {
                    value: increment(40),
                    type: 'sizing',
                },
                xxl: {
                    value: increment(50),
                    type: 'sizing',
                },
                xxxl: {
                    value: increment(75),
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
                value: '1376px',
                type: 'sizing',
            },
        },
    },
};
