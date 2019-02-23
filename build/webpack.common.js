const path = require('path')
const webpack = require('webpack')

const CleanWebpackPlugin = require('clean-webpack-plugin') // 清理dist文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 打包css
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const config = require('./config')

const webpackConfig = {
  mode: 'production',
  entry: './components/index.js',
  output: {
    path: path.resolve(__dirname, '../dist/'),
    publicPath: '/dist/',
    filename: 'happy.common.js',
    chunkFilename: '[id].js',
    library: 'happy',
    libraryTarget: 'commonjs2',
    // libraryTarget: 'this',
    // libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: config.alias,
    // modules: ['node_modules'],
  },
  // externals: config.externals,
  performance: {
    hints: false,
  },
  // stats: 'none',
  optimization: {
    // minimize: true,
    minimizer: [new UglifyJsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
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
        test: /\.css$/, // ^\.inline
        use: [
          'handlebars-loader', // handlebars loader expects raw resource string
          'extract-loader',
          'css-loader',
        ],
      },
      {
        // test: /\.css$/,
        test: /^(?!inline)\.css$/,
        use: [
          'style-loader', // 将 JS 字符串生成为 style 节点
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), // 清理dist文件
    new MiniCssExtractPlugin({
      filename: 'happy.common.css',
      chunkFilename: '[id].css',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
}

module.exports = webpackConfig
