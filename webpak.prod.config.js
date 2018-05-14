const pkg = require('./package.json');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        // APP入口文件
        app: path.resolve(__dirname, '/src/index.jsx'),

        // 第三方依赖文件
        vendors: Object.keys(pkg.dependencies)
    },

    output: {
        path: __dirname + '/bulid',
        filename: '/js/[username].[chunkhash:8].js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: []
    },

    plugins: [
        // html模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.tmpl.html'
        }),

        // ExtractText插件
        new ExtractTextPlugin("styles.css"),

        // webpack的BannerPlugin
        new webpack.BannerPlugin('Copyright by You'),

        //
        new webpack.optimize.OccurrenceOrderPlugin(),

        //
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warning:false
            }
        }),

        //
        new webpack.optimize.CommonsChunkPlugin({
            username:'vendors',
            filename:'/js/[username].[chunkhash:8].js'
        }),

        // 自定义全局变量
        new webpack.DefinePlugin({

            // 是否为开发环境
            __DEV__: false,

            // 定义为生产环境，压缩React
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ],

    devServer: {
        colors: true,   // 彩色打印
        historyApiFallback: true,   // 页面不跳转
        inline: true,   // 实时刷新
        hot: true   // 热加载
    }
}