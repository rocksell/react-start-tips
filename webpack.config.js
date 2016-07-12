var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

config = {
    devtool: null,

    entry: {
        main: [
            './src/index.js'
        ]
    },

    output: {
        library: 'ReactStartTips',
        libraryTarget: 'umd'
    },

    module: {
        noParse: [
            /\/babel-core\/browser-polyfill\.js$/
        ],
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules[\/\\]/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        },  {
            test: /\.scss$/,
            loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'
        },  {
            test: require.resolve('react'),
            loader: 'expose?React'
        }, {
            test: require.resolve('react-dom'),
            loader: 'expose?ReactDOM'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
        }),
        new ExtractTextPlugin("../../stylesheets/generated/app-bundle.css"),
    ]

};

module.exports = config;
