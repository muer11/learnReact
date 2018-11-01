const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    // 入口
    entry: {
        app:[
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ],
        vendor: [
            'react', 'react-router-dom', 'redux', 'react-dom', 'react-redux'
        ]
    },
    // 输出到dist文件夹，输出文件名为bundle.js
    output: {
        path: path.join(__dirname, './dist'),
        // filename: 'bundle.js',
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    // 编译
    module:{
        rules:[
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader', 
                    options: {
                        limit: 8192
                    }
                }]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0'
    },
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers'),
            // redux: path.join(__dirname, 'src/redux')
        }
    },
    devtool: 'inline-source-map', //配置devtool 便于查看错误代码
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]
}