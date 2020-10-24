const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");



module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath : '/',
        filename: '[name].js'
    },
    target: 'web',
    devtool: 'source-map',
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

             },
             { 
                    test: /\.css$/,
                    use: [ 'style-loader','css-loader' ]
             },
             {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: ['file-loader']
               }
            ]
           },
           plugins: [
                 new HtmlWebPackPlugin({
                     template: 'src/html/index.html',
                     filename: 'index.html',
                     excludeChunks: ['server']
               })
           ]
}