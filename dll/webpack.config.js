/*
 * @Author: your name
 * @Date: 2021-06-06 20:29:53
 * @LastEditTime: 2021-06-18 01:46:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/webpack-test/打包html资源/webpack.config.js
 */
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// eslint-disable-next-line import/no-extraneous-dependencies
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    // 输出的绝对路径
    path: resolve(__dirname, 'build'),
  },
  // loader 配置
  module: {
    rules: [],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    // 告诉webpack 哪些库不参与打包  同时使用的名称也得变化
    new webpack.DllReferencePlugin({
      manifest: resolve(__dirname, './dll/manifest.json'),
    }),
    // webpack5 中会报错  建议在4版本尝试
    new AddAssetHtmlWebpackPlugin({
      filepath: resolve(__dirname, './dll/jquery.js'),
    }),
  ],
  mode: 'production',
};
