/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/*
 * @Author: your name
 * @Date: 2021-06-22 00:52:28
 * @LastEditTime: 2021-06-23 00:58:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/webpack-test/项目webpack/loader/loaders/loader1.js
 */

module.exports = function (content, map, meta) {
  // 如何实现loader内部内容异步加载
  const callback = this.async();

  setTimeout(() => {
    console.log(222);
    callback(null, content);
  }, 1000);

  // 同步时候使用
  // return content;
};

module.exports.pitch = function () {
  console.log(2);
};
