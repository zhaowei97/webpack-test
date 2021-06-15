/*
 * @Author: your name
 * @Date: 2021-06-15 00:23:40
 * @LastEditTime: 2021-06-16 01:54:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/webpack-test/缓存/src/js/index.js
 */

document.getElementById("btn").onclick = () => {
  import(/* webpackChunkName: 'test' */"./test")
    .then(({calc, calc2 }) => {
      console.log(calc, calc2);
    })
    .catch(() => {
      console.log("error");
    });
};

// eslint-disable-next-line
console.log(calc([1, 2, 3, 4, 5, 6, 7]));
