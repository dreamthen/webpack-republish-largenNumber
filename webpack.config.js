const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const BUILD_DIR = path.resolve(__dirname, './build');

const PUBLIC_DIR = './';

module.exports = {
    mode: 'none',
    entry: {
        'largeNumber': './src/index.js',
        'largeNumber.min': './src/index.js'
    },
    output: {
        publicPath: PUBLIC_DIR,
        path: BUILD_DIR,
        filename: '[name].js'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.min\.js$/i,
                cache: true,
                parallel: true,
                terserOptions: {
                    output: {
                        comments: /@license/i
                    }
                },
                extractComments: true
            })
        ]
    }
};