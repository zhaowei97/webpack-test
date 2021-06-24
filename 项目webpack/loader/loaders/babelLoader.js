/* eslint-disable import/no-extraneous-dependencies */
/*
 * @Author: your name
 * @Date: 2021-06-24 00:09:31
 * @LastEditTime: 2021-06-24 00:20:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/webpack-test/项目webpack/loader/loaders/babelLoader.js
 */

const { getOptions } = require('loader-utils');
const { validate } = require('schema-utils');
const babel = require('@babel/core');
const util = require('util');

const babelSchema = require('./babelSchema.json');

// babel的transform方法是基于node的异步，我们需要通过util去将其转换成promise
const transform = util.promisify(babel.transform);

module.exports = function (content, map, meta) {
  const options = getOptions(this) || {};
  validate(babelSchema, options, {
    name: 'babel loader',
  });
  const callBack = this.async();
  transform(content, options)
    .then(({ code, mapp }) => callBack(null, code, mapp, meta))
    .catch((e) => callBack(e));
};
