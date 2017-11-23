const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        './examples/src/index.js',
    ],

    output: {
        publicPath: '/',
        filename: 'bundle.js',
    },

    devServer: {
        inline: true,
        host: '0.0.0.0',
        port: 4000,
        hot: true,
        historyApiFallback: {
            index: 'index.html',
        },
        contentBase: path.join(__dirname, './examples'),
    },

    module: {
        rules: [
            {
                test: /\.(js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
};