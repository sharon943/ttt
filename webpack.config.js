var webpack = require('webpack');
var $ = require('jquery');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  devtool: 'eval-source-map', //配置生成Source Maps
  entry: __dirname + '/app.js', //已多次提及的唯一入口文件
  output: {
    path: __dirname + '/public', //打包后的文件存放的地方
    filename: 'bundle.js' //打包后输出文件的文件名
  },
  module: {
    loaders: [{
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader', //在webpack的module部分的loaders里进行配置即可
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.js$/,
      loader: "eslint-loader",
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader!autoprefixer-loader' //添加对样式表的处理
    },{
      test: /\.scss$/,
      loader: 'style-loader!css!sass'//这里用了样式分离出来的插件，如果不想分离出来，可以直接这样写 loader:'style!css!sass'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }]
  },
  devServer: {
    contentBase: './public', //本地服务器所加载的页面所在的目录
    port: '2019',
    historyApiFallback: true, //不跳转
    inline: true //实时刷新
  },
  plugins: [
    new webpack.BannerPlugin("Copyright By XingBofeng."),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new ExtractTextPlugin("style.css"),
    new UglifyJSPlugin()
  ]
}