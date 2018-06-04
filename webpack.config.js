const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      // {
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader']
      //   })
      // },
      {
        test: /\.scss$/,
        use: [ 'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader' ]
      }
    ]
  },
  plugins: [
    // new ExtractTextPlugin({
    //   filename: 'style.[chunkhash].css', disable: false, allChunks: true
    // }),
    new MiniCssExtractPlugin({
      filename: 'style.[contentHash].css',
    }),
    new HTMLWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
};