/*
 * @Author: your name
 * @Date: 2021-06-12 14:14:11
 * @LastEditTime: 2021-06-15 01:07:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/webpack-test/js代码检查/webpack.config.js
 */

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

process.env.NODE_ENV = 'production';

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'build.[contenthash:10].js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
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
              // 开启babel缓存
              // 类似于HMR 打包就只会替换更改过的js文件 第二次打包速度加快
              cacheDirectory: true,
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
          {
            loader: 'eslint-loader',
            // enforce: 'pre',
            options: {
              fix: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/build.[contenthash:10].css',
    }),
  ],
  mode: 'production',
  devtool: 'source-map',
};
