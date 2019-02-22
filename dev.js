const webpack = require('webpack')
const middleware = require('webpack-dev-middleware')
const config = require('./webpack.config')

const compiler = webpack(config)
const express = require('express')

const app = express()

console.log(config.output.path)
app.use(middleware(compiler, {
  // path: config.output.path,
  // path: config.output.path,
  publicPath: '/dist', // dist
  index: 'index.html',
  writeToDisk: true,
}))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
