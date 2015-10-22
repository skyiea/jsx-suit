import path from 'path';

const output_options = {
    chunks      : false,
    chunkModules: false,
    colors      : true,
    timings     : true
};

const APP_PATH = path.join(__dirname, 'app');

export default {
    entry: {
        app: path.join(APP_PATH, 'app.jsx')
    },
    output: {
        path        : 'public/',
        publicPath  : 'public/',
        filename    : '[name].min.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx/,
                exclude: /node_modules/,
                loader: 'react-hot!babel?optional[]=es7.classProperties&optional[]=es7.objectRestSpread'
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            }
        ]
    },
    resolve: {
        root: APP_PATH,
        extensions: [ '', '.js', '.jsx' ]
    },
    stats: output_options,
    devServer: {
        proxy: {
            '*': 'http://localhost:1234/'
        },
        stats: output_options
    }
};