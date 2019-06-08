const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin') // 清理dist文件
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成index.html

module.exports = {
  mode: 'development',
  entry: {
    vendor: './src/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src'],
            // minimize: true,
          },
        },
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
            options: {
              /* your options here */
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', // 将 JS 字符串生成为 style 节点
          'css-loader',
        ],
      },
    ],
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 100,
    poll: 100,
    ignored: /node_modules/,
  },
  devServer: {
    // contentBase: '../../',
    contentBase: path.join(__dirname, 'dist'),
    host: '0.0.0.0',
    port: 7788,
    hot: true,
    inline: true,
    // hotOnly: true, // 在没有页面刷新的情况下启用热模块替换
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
  ],
}
