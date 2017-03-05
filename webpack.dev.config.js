const merge = require('webpack-merge');
const path = require('path');
const WriteFilePlugin = require('write-file-webpack-plugin');

const baseConfig = require('./webpack.base.config');

const PORT = require('./tools/devPort');
const stats = require('./tools/webpackStats');

module.exports = merge.smartStrategy({
    'module.loaders.loaders': 'replace'
})(baseConfig, {
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loaders: [
                    'react-hot',
                    'babel',
                    'eslint'
                ]
            }
        ]
    },

    plugins: [
        new WriteFilePlugin({
            test: /^html\//,
            log: false
        })
    ],

    devServer: {
        host    : 'localhost',
        port    : '1234',
        quiet   : false,
        noInfo  : false,
        outputPath: path.resolve(__dirname, 'public'),
        proxy: {
            '*': `http://localhost:${PORT}/`
        },
        stats
    }
});