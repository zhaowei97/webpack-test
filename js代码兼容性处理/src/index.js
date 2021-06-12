/*
 * @Author: your name
 * @Date: 2021-06-12 14:15:13
 * @LastEditTime: 2021-06-12 15:38:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/webpack-test/js代码检查/src/index.js
 */
const pr = new Promise((resolve) => {
  setTimeout(() => {
    console.log(1111);
    resolve();
  }, 1000);
});
console.log(pr);

const test = function test(a) {
  console.log(a);
};

console.log(test(3));
