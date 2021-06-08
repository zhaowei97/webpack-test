/*
 * @Author: your name
 * @Date: 2021-06-09 00:31:00
 * @LastEditTime: 2021-06-09 00:43:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/webpack-test/打包其他资源/webpack.config.js
 */

const { resolve } = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "build.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        exclude: /\.(js|css|html)$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  mode: "development",
};
