const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const utils = require('./utils')

const webpackConfig = {
  target: 'node',
  // 入口
  entry: {
    server: path.join(utils.APP_PATH, 'index.js')
  },
  // 输出
  output: {
    filename: '[name].bundle.js',
    path: utils.DIST_PATH
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        // 忽略文件夹
        exclude: [path.join(__dirname, '/node_modules')]
      }
    ]
  },
  // 排除不会使用的模块
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod') ? 'production' : 'development'
      }
    })
  ],
  node: {
    // console: true,
    global: true,
    // Buffer: true,
    __filename: true,
    __dirname: true,
    // setImmediate: true,
    // path: true
  }
}
module.exports = webpackConfig
