/*
 * @Author: your name
 * @Date: 2021-06-06 21:49:14
 * @LastEditTime: 2021-06-07 00:01:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/webpack-test/打包图片资源/webpack.config.js
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
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        loader: "url-loader",
        options: {
          limit: 8 * 1024,
        },
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
