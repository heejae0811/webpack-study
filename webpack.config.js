const path = require('path');
const sass = require("sass");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './source/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, './public/'),
        filename: './js/[name]_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss?$/,
                exclude: /node_module/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: sass, //dart-sass 적용
                        },
                    },
                ],
            },
            // {
            //     test: /\.(png|jpe?g|gif)$/i,
            //     loader: 'file-loader',
            //     options: {
            //         publicPath: './images',
            //         name: 'images/[name].[ext]?[hash]',
            //     }
            // },
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
        new MiniCssExtractPlugin({
            filename: "./css/[name]_bundle.css",
        }),
        new CopyWebpackPlugin({ patterns: [
                { from: './source/images/', to: './images/', toType:'dir' }
            ]
        }),
    ]
}