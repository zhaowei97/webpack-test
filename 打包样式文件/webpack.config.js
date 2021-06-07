/*
 * @Author: your name
 * @Date: 2021-06-06 13:57:15
 * @LastEditTime: 2021-06-07 00:02:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/webpack-test/day02/webpack.config.js
 */

const { resolve } = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    // 输出的绝对路径
    path: resolve(__dirname, "build"),
  },
  // loader 配置
  module: {
    rules: [
      {
        // 匹配规则
        test: /\.css$/,
        // loader执行顺序从后往前，css-loader主要是将css文件以commonjs形式引入至index.js 内容是字符串形式；style-loader则是创建style标签，将引入的样式添加进去并生效
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [],
  mode: "development",
};
