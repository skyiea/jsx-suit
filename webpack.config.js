const webpack   = require('webpack');
const path      = require('path');

const outputOptions = {
    chunks      : false,
    chunkModules: false,
    colors      : true,
    timings     : true
};

const PATHS = {};
const PORT = require('./tools/devPort');

PATHS.src   = path.resolve(__dirname, 'src');
PATHS.dist  = path.resolve(__dirname, 'public');

const sourceMapsOn = process.env.SOURCE_MAPS === 'on';

module.exports = {
    context: PATHS.src,
    devtool: sourceMapsOn && '#source-map',

    entry: {
        app: 'app'
    },

    output: {
        path: PATHS.dist,
        publicPath: 'public/',
        sourceMapFilename: '[file].map',
        filename: '[name].min.js'
    },

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
            },
            {
                test: /\.scss/,
                loaders: [
                    'style',
                    `css${sourceMapsOn ? '?sourceMap' : ''}`,
                    `sass${sourceMapsOn ? '?sourceMap' : ''}`
                ]
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url?limit=8192&name=[name].[ext]'
            },
            {
                test: /\.(woff|woff2|ttf)$/,
                loader: `${sourceMapsOn ? 'url' : 'file'}?name=fonts/[name].[ext]`
            }
        ]
    },

    resolve: {
        root: PATHS.src,
        extensions: [ '', '.js', '.jsx' ]
    },

    plugins: [
        new webpack.DefinePlugin({
            DEBUG: JSON.stringify(process.env.NODE_ENV) !== '"production"'
        })
    ],

    stats: outputOptions,

    devServer: {
        host    : 'localhost',
        port    : '1234',
        quiet   : false,
        noInfo  : false,
        proxy: {
            '*': `http://localhost:${PORT}/`
        },
        stats: outputOptions
    }
};