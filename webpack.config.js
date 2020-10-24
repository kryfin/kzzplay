const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require("html-webpack-plugin");



module.exports = {
    entry: {
        server: './src/main.js'
    },
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath : '/',
        filename: 'main.js'
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    externals: [nodeExternals()],
    module: {
        rules: [ 
            { 
                test: /\.js?$/, 
                loader: 'babel-loader',
                exclude: /node_modules/
            
             },
             {
                    test: /\.html$/,
                    use: [{loader: "html-loader" }]

             }
            ]
           },
           plugins: [
                 new HtmlWebPackPlugin({
                     template: 'src/index.html',
                     filename: 'src/index.html',
                     excludeChunks: ['server']
               })
           ]
}