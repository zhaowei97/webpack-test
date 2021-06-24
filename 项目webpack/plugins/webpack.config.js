/*
 * @Author: your name
 * @Date: 2021-06-25 01:00:41
 * @LastEditTime: 2021-06-25 01:41:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/webpack-test/项目webpack/plugins/webpack.config.js
 */

const CopyWebpackPlugins = require('./plgs/CopyWebpackPlugins');

module.exports = {
  plugins: [
    new CopyWebpackPlugins({
      from: 'public/**/',
      ignore: ['**/index.html'],
    }),
  ],
};
