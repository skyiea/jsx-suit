const path      = require('path');
const webpack   = require('webpack');
const merge     = require('webpack-merge');

const baseConfig = require('./webpack.base.config');

const PORT = require('./tools/devPort');

module.exports = merge.smartStrategy({
    entry: 'prepend',
    plugins: 'prepend'
})(baseConfig, {
    devServer: {
        host    : 'localhost',
        port    : '1234',
        quiet   : false,
        noInfo  : false,
        proxy: {
            '*': `http://localhost:${PORT}/`
        },
        stats: {
            chunks      : false,
            chunkModules: false,
            colors      : true,
            timings     : true
        }
    }
});