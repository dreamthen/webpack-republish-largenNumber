if (process.env.NODE_ENV === 'production') {
    module.exports = require('./build/largeNumber.min').default;
} else {
    module.exports = require('./build/largeNumber').default;
}