/*
 * @Author: your name
 * @Date: 2021-06-06 20:29:53
 * @LastEditTime: 2021-06-06 21:10:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/webpack-test/打包html资源/webpack.config.js
 */
const { resolve } = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    // 输出的绝对路径
    path: resolve(__dirname, "build"),
  },
  // loader 配置
  module: {
    rules: [],
  },
  plugins: [new htmlWebpackPlugin({ template: "./src/index.html" })],
  mode: "development",
};
