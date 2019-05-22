const webpack = require('webpack');

const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common,{
    mode:'development',
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
})

