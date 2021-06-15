/*
 * @Author: your name
 * @Date: 2021-06-15 00:23:40
 * @LastEditTime: 2021-06-16 01:36:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/webpack-test/缓存/src/js/index.js
 */

// import { calc2 } from "./test";
// eslint-disable-next-line import/no-extraneous-dependencies
// import $ from 'jquery';

import(/* webpackChunkName: 'test' */ "./test")
  .then(() => {
    console.log(1111);
  })
  .catch(() => {
    console.log("error");
  });

function calc(params) {
  return params.reduce((a, b) => a + b, 0);
}

// eslint-disable-next-line
console.log(calc([1, 2, 3, 4, 5, 6, 7]));
