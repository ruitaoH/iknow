let path = require('path');
let webpack = require('webpack');

let BowerWebpackPlugin = require('bower-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        index:[
            'webpack-dev-server/client?http://127.0.0.1:3000',
            'webpack/hot/only-dev-server',
            './src/js/index'
        ],
        list:[
            'webpack-dev-server/client?http://127.0.0.1:3000',
            'webpack/hot/only-dev-server',
            './src/js/list'
        ],
        about:[
            'webpack-dev-server/client?http://127.0.0.1:3000',
            'webpack/hot/only-dev-server',
            './src/js/about'
        ],
        subject:[
            'webpack-dev-server/client?http://127.0.0.1:3000',
            'webpack/hot/only-dev-server',
            './src/js/subject'
        ]
    },

    output:{
        path:path.join(__dirname,'dist'),
        publicPath:'/dist/',
        filename:'js/[name].js',
        chunkFilename:'js/[id].chunk.js'
    },
    module:{
        preLoaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'eslint-loader',
                include:[
                    path.join(__dirname,'src/components'),
                    path.join(__dirname,'src/js')
                ]
            }
        ],
        loaders:[
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include:[
                    path.join(__dirname,'src/components'),
                    path.join(__dirname,'src/js')
                ]
            },{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader','css-loader!autoprefixer-loader?{browsers:["last 2 version"]}')
            },{
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader','css-loader!autoprefixer-loader?{browsers:["last 2 version"]}!sass-loader?outputStyle=expanded')
            },{
                test: /\.html$/,
                loader: 'html?attrs=img:src'
            },{
                test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
                loader: 'file-loader?name=./fonts/[name].[ext]'
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=./img/[hash].[ext]'
            },{
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    resolve: {
        alias:{
            component:path.join(__dirname,'src/components'),
            font:path.join(__dirname,'src/fonts'),
            image:path.join(__dirname,'src/images'),
            style:path.join(__dirname,'src/styles')
        },
        extensions: ['', '.js', '.json', '.scss']
    },
    plugins:[
        new webpack.ProvidePlugin({
            'React': 'react'
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors', // 将公共模块提取，生成名为`vendors`的chunk
            chunks: ['index','list','about','subject'], //提取哪些模块共有的部分
            minChunks: 4 // 提取至少3个模块共有的部分
        }),

        new ExtractTextPlugin('css/[name].css'),

        // HtmlWebpackPlugin模板生成相关的配置 ---> 每一个对应着一个页面的配置 ---> 有几个页面写几个
        new HtmlWebpackPlugin({
            favicon: './src/images/favicon.ico',
            filename: './views/index.html',
            template: './src/views/index.html',
            inject:'body',
            hash:true,
            chunks:['vendors','index'],
            minify:{
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new HtmlWebpackPlugin({
            favicon: './src/images/favicon.ico',
            filename: './views/about.html',
            template: './src/views/about.html',
            inject: true,
            hash: true,
            chunks:['vendors','about'],
            minify:{
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        }),
        new HtmlWebpackPlugin({
            favicon: './src/images/favicon.ico',
            filename: './views/list.html',
            template: './src/views/list.html',
            inject: true,
            hash: true,
            chunks:['vendors','list'],
            minify:{
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: true //删除空白符与换行符
            }
        }),
        new HtmlWebpackPlugin({
            favicon: './src/images/favicon.ico',
            filename: './views/subject.html',
            template: './src/views/subject.html',
            inject: true,
            hash: true,
            chunks:['vendors','subject'],
            minify:{
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: true //删除空白符与换行符
            }
        }),

        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new BowerWebpackPlugin({
            searchResolveModulesDirectories: false
        })
    ],
    devServer:{
        contentBase:'./src/',
        publicPath: '/dist/',
        host:'localhost',
        port:'3000',
        historyApiFallback: true,
        hot:true,
        inline:true,
        noInfo:false
    }
};
