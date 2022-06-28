const path = require('path');
const sass = require("sass");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './source/js/index.js',
        about: './source/js/about.js',
        about_style: './source/css/about_style.scss',
        index_style: './source/css/index_style.scss'
    },
    output: {
        path: path.resolve(__dirname, './public/'),
        filename: './js/[name].js'
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
            filename: "./css/[name].css",
        }),
        new CopyWebpackPlugin({ patterns: [
                { from: './source/images/', to: './images/', toType:'dir' }
            ]
        }),
    ]
}