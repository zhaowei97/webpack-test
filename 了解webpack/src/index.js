/*
 * @Author: your name
 * @Date: 2021-06-04 00:22:18
 * @LastEditTime: 2021-06-04 00:41:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/webpack-test/day01/src/index.js
 */

//  打包命令  webpack './src/index.js' -o './build/build.js' --mode='development'   --mode为模式选择  有开发环境和生产环境

import data from "./data.json";
import './index.css'

function add(a, b) {
  return a + b;
}

console.log(add(3, 5), data);
