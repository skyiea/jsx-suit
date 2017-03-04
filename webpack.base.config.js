const webpack       = require('webpack');
const path          = require('path');
const HTMLPlugin    = require('html-webpack-plugin');

const ENV = process.env.NODE_ENV;

const PATHS = {};
PATHS.src   = path.resolve(__dirname, 'src');
PATHS.dist  = path.resolve(__dirname, 'public');

const sourceMapsOn = process.env.SOURCE_MAPS === 'on';
const isCamelCasedSCSS = /([A-Z][a-z0-9]*)+\.scss$/;

module.exports = {
    context: PATHS.src,
    devtool: sourceMapsOn && '#source-map',

    entry: {
        app: './app'
    },

    output: {
        path: PATHS.dist,
        publicPath: 'public/',
        sourceMapFilename: 'js/[file].map',
        filename: 'js/[name].bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loaders: [
                    'babel',
                    'eslint'
                ]
            },
            {
                test: /\.scss$/,
                exclude: isCamelCasedSCSS,
                loaders: [
                    'style',
                    `css${sourceMapsOn ? '?sourceMap' : ''}`,
                    `sass${sourceMapsOn ? '?sourceMap' : ''}`
                ]
            },
            {
                test: isCamelCasedSCSS,
                loaders: [
                    'style',
                    `css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]${sourceMapsOn ? '&sourceMap' : ''}`,
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
        extensions: [ '', '.js', '.jsx' ]
    },

    plugins: [
        new HTMLPlugin({
            filename: 'html/index.html',
            template: path.resolve(PATHS.src, 'html/index.html'),
        }),

        new webpack.DefinePlugin({
            __ENV__: JSON.stringify(ENV) === 'prod' ? '"prod"' : '"dev"'
        })
    ],

    stats: {
        chunks      : false,
        chunkModules: false,
        colors      : true,
        timings     : true
    }
};