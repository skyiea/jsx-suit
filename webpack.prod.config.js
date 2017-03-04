const webpack   = require('webpack');
const merge     = require('webpack-merge');

const baseConfig = require('./webpack.base.config');

module.exports = merge.smartStrategy({
    entry: 'prepend',
    plugins: 'prepend'
})(baseConfig, {
    output: {
        publicPath: '/'
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compressor: {
                warnings: false
            }
        }),
    ]
});