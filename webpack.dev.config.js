const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');

const PORT = require('./tools/devPort');

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