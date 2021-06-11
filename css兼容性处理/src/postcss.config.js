/*
 * @Author: your name
 * @Date: 2021-06-11 01:35:28
 * @LastEditTime: 2021-06-11 01:35:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/webpack-test/css兼容性处理/src/postcss.config.js
 */

module.exports = {
  loader: "postcss-loader",
  plugins: {
    "postcss-preset-env": {},
  },
};
