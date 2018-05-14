const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app : path.join(__dirname, '/src/index.js'),
    },

    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].bundle.js'
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            root: path.resolve(__dirname, "./src")
        }
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: { presets: [ 'react', 'es2015'] }
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            /*
            {
                test: /\.(png|jpg|gif)$/,
                use: 'url-loader?limit=2048'
            },
            */
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]
            }
        ]
    },

    plugins:[

        // 模板插件
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '/src/index.tmpl.html')
        }),

        // 热加载插件
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        //contentBase: path.join(__dirname, "dist"),    // 使用模板插件后，无需设定该项
        host: 'localhost',                              // 主机
        port: 8080,                                     // 端口
        historyApiFallback: true,                       // 页面不跳转
        inline: true,                                   // 实时刷新
        hot: true                                       // 热加载
    }
};