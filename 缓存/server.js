/*
 * @Author: your name
 * @Date: 2021-06-15 00:25:02
 * @LastEditTime: 2021-06-15 00:58:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/webpack-test/缓存/server.js
 */

// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');

const app = express();

app.use(express.static('build', { maxAge: 1000 * 3600 }));

app.listen(3000);
