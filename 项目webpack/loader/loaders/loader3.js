/*
 * @Author: your name
 * @Date: 2021-06-22 00:52:28
 * @LastEditTime: 2021-06-22 00:53:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/webpack-test/项目webpack/loader/loaders/loader1.js
 */

module.exports = function(content, map, meta) {
  console.log(333);
  return content;
};

module.exports.pitch = function() {
  console.log(3);
};
