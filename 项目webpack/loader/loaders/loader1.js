/* eslint-disable import/no-extraneous-dependencies */
/*
 * @Author: your name
 * @Date: 2021-06-22 00:52:28
 * @LastEditTime: 2021-06-23 01:03:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/webpack-test/项目webpack/loader/loaders/loader1.js
 */

const { getOptions } = require('loader-utils');
const { validate } = require('schema-utils');

const schema = require('./schema.json');

module.exports = function (content, map, meta) {
  const options = getOptions(this);
  console.log(111, options);

  validate(schema, options, {
    name: 'loader1',
  });

  return content;
};

module.exports.pitch = function () {
  console.log(1);
};
