/*
 * @Author: your name
 * @Date: 2021-06-12 14:14:11
 * @LastEditTime: 2021-06-16 01:47:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/webpack-test/js代码检查/webpack.config.js
 */

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  // entry: {
  //   main: './src/js/index.js',
  //   test: './src/js/test.js',
  // },
  output: {
    filename: 'build.[contenthash:10].js',
    path: resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
  ],
  mode: 'production',
};
