const path = require('path');

module.exports = {
    // 入口
    entry: path.join(__dirname, 'src/index.js'),
    // 输出到dist文件夹，输出文件名为bundle.js
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    // 编译
    module:{
        rules:[{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0'
    }
}