const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    vendor: './index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '../js/dist/',
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
        test: /\.css$/,
        use: [
          'style-loader', // 将 JS 字符串生成为 style 节点
          'css-loader',
        ],
      },
    ],
  },
  plugins: [],
}
