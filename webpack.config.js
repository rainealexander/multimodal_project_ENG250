const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './client/main.jsx',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/[hash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx?|js!)$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader', 'postcss-loader' ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './client/index.html')
        })
    ]
}