const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './source/js/index.js',
        about: './source/js/about.js'
    },
    output: {
        path: path.resolve(__dirname, './public/'),
        filename: '[name]_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: 'public'
                        }
                    }
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './source/html/index.html',
            filename: './html/index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './source/html/about.html',
            filename: './html/about.html',
            chunks: ['about']
        }),
    ]
}