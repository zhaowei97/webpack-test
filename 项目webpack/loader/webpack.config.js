/*
 * @Author: your name
 * @Date: 2021-06-22 00:48:53
 * @LastEditTime: 2021-06-22 00:54:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/webpack-test/项目webpack/loaders/webpack.config.js
 */

const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['loader1', 'loader2', 'loader3'],
      },
    ],
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')],
  },
};
