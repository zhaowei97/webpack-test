/*
 * @Author: your name
 * @Date: 2021-06-18 01:04:52
 * @LastEditTime: 2021-06-18 01:14:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/webpack-test/dll/webpack.dll.js
 */

const { resolve } = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');

module.exports = {
  entry: {
    jquery: ['jquery'],
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dll'),
    library: '[name]_[hash]', // 定义打包后库内向外暴露的内容叫什么名字
  },
  plugins: [
    // 提供和库的映射
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: resolve(__dirname, 'dll/manifest.json'),
    }),
  ],
  mode: 'production',
};
