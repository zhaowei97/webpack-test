/*
 * @Author: your name
 * @Date: 2021-06-15 00:23:40
 * @LastEditTime: 2021-06-16 00:56:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/webpack-test/缓存/src/js/index.js
 */

import { calc2 } from "./test";

function calc(params) {
  return params.reduce((a, b) => a + b, 0);
}

// eslint-disable-next-line
console.log(calc([1, 2, 3, 4, 5, 6, 7]));
