/*
 * @Author: your name
 * @Date: 2021-06-12 14:14:11
 * @LastEditTime: 2021-06-17 00:57:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/webpack-test/js代码检查/webpack.config.js
 */

const { resolve } = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          // {
          //   loader: 'thread-loader',
          //   options: {
          //     workers: 2,
          //   },
          // },
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'entry',
                    corejs: {
                      version: 3,
                    },
                    targets: {
                      chrome: 60,
                      firefox: 60,
                      ie: 9,
                      safari: 10,
                      edge: 17,
                    },
                  },
                ],
              ],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        ],
      },
    ],
  },
  plugins: [],
  mode: 'development',
};
