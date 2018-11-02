// const utils = require('./utils');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin'); //已失效
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        app: [
            path.join(__dirname, 'src/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    output: {
        publicPath: '/', // 静态资源路径
        path: path.join(__dirname, './dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.css$/,
            use: [
        　　  　　MiniCssExtractPlugin.loader,
        　　 　　 "css-loader"
        　　 ]
            // use: ['style-loader','css-loader']
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        new UglifyJSPlugin(), // 文件压缩
        new webpack.DefinePlugin({ // 指定环境
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.HashedModuleIdsPlugin(), // 优化缓存
        new CleanWebpackPlugin(['dist']), // 打包优化-清理dist中多余的文件
        // new ExtractTextPlugin({ // 使css文件独立存在
        //     filename: '[name].[contenthash:5].css',
        //     allChunks: true
        // })
        new MiniCssExtractPlugin({
    　　    filename: "[name].[chunkhash:8].css",
    　　    chunkFilename: "[id].css"
    　　 })
        // new webpack.optimize.CommonsChunkPlugin({ // 已失效
        //     name: 'runtime'
        // })
    ],
    // 提取公共代码
    optimization: {
        splitChunks:{
            cacheGroups:{
                commons: {
                    name: 'commons',
                    chunks: 'initial',
                    minChunks: 2
                }
            }
        }
    },
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers')
        }
    }
};