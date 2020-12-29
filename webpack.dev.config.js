const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");



module.exports = {
    entry: {
        main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000','./src/index.js']
    },
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath : '/',
        filename: '[name].js'
    },
    mode: 'development',
    target: 'web',
    devtool: 'source-map',
    module: {
        rules: [ 
            // {
            //     enforce: "pre",
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: "eslint-loader",
            //     options: {
            //         emitWarning: true,
            //         failOnError: false,
            //         failOnWarning: false
            //     }                   
            // },
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
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                      },
               }
            ]
           },
           plugins: [
                 new HtmlWebPackPlugin({
                     template: 'src/static/html/index.html',
                     filename: 'index.html',
                     excludeChunks: ['server']
               }),
               new webpack.HotModuleReplacementPlugin(),
               new webpack.NoEmitOnErrorsPlugin()
           ]
}