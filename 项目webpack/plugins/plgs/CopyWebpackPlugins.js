/* eslint-disable import/no-extraneous-dependencies */
/*
 * @Author: your name
 * @Date: 2021-06-25 01:02:38
 * @LastEditTime: 2021-06-25 01:41:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/webpack-test/项目webpack/plugins/plgs/CopyWebpackPlugins.js
 */
const { validate } = require('schema-utils');
const path = require('path');
const globby = require('globby');
const schema = require('./schema.json');

class CopyWebpackPlugins {
  constructor(options = {}) {
    // 验证options
    validate(schema, options, {
      name: 'CopyWebpackPlugin',
    });
    this.options = options;
  }

  apply(compiler) {
    // 初始化compilation
    compiler.hooks.thisCompilation.tap('CopyWebpackPlugin', async (compilation) => {
      // 在添加资源添加钩子函数
      compilation.hooks.additionalAssets.tapAsync(
        'CopyWebpackPlugin',
        async (cb) => {
          // 将from中的资源复制到to
          const { from, ignore } = this.options;
          const to = this.options.to ? this.options.to : '.';
          // 获取运行代码的根目录
          const { context } = compiler.options;
          const absoluteFrom = path.isAbsolute(from)
            ? from
            : path.resolve(context, from);
          // globby(要处理的文件， options)
          const paths = await globby(absoluteFrom, { ignore });
          console.log(paths);
          cb();
        },
      );
    });
  }
}

module.exports = CopyWebpackPlugins;
