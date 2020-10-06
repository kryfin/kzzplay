module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname +'/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.js?$/, 
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015']
                }
            
            }

        ]
    }
}