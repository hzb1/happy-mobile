/* eslint-disable global-require */
const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成一个html文件
const CleanWebpackPlugin = require('clean-webpack-plugin') // 清理dist文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 打包css

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const env = process.env.NODE_ENV

module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: './components/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'happy-mobile.js',
    library: 'happy',
    // libraryTarget: "this"
    // libraryTarget: "amd"
    // libraryTarget: 'window',
    // libraryTarget: 'commonjs2',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  resolve: {
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 将 JS 字符串生成为 style 节点
          {
            loader: MiniCssExtractPlugin.loader, // 导出一个css文件
            options: {
              publicPath: '../',
            },
          },
          // 'css-loader', // 将 CSS 转化成 CommonJS 模块
          {
            loader: 'css-loader', // 将 CSS 转化成 CommonJS 模块
          },
          // 'sass-loader', // 将 Sass 编译成 CSS
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          // 'style-loader', // 将 JS 字符串生成为 style 节点
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     // you can specify a publicPath here
          //     // by default it use publicPath in webpackOptions.output
          //     publicPath: '../',
          //   },
          // },
          // 'to-string-loader',
          'handlebars-loader', // handlebars loader expects raw resource string
          'extract-loader',
          {
            loader: 'css-loader',
            options: {
            },
          },
        ],
      },
      { test: /\.handlebars$/, loader: 'handlebars-loader' },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']), // 清理dist文件
    new MiniCssExtractPlugin({
      filename: 'happy-mobile.css',
      chunkFilename: '[id].css',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  watch: true,
  watchOptions: {
    aggregateTimeout: 100,
    poll: 100,
    ignored: /node_modules/,
  },
  // devServer: {
  //   contentBase: path.join(__dirname, './'), // web服务地址
  //   compress: true, // gzip 压缩和提供为服务
  //   host: '0.0.0.0',
  //   port: 7777,
  //   hot: true,
  //   hotOnly: true, // 在没有页面刷新的情况下启用热模块替换
  // },
  // target: 'node',
}
