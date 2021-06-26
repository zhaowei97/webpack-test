/*
 * @Author: your name
 * @Date: 2021-06-25 01:00:41
 * @LastEditTime: 2021-06-26 16:43:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/webpack-test/项目webpack/plugins/webpack.config.js
 */

const path = require('path');
const CopyWebpackPlugins = require('./plgs/CopyWebpackPlugins');

module.exports = {
  plugins: [
    new CopyWebpackPlugins({
      from: 'public/**',
      // 也不知道为啥globby不能将文件目录给过滤掉输出，所以这里直接配置目录将其过滤
      ignore: ['**/index.html', path.resolve(__dirname, 'public')],
    }),
  ],
};
