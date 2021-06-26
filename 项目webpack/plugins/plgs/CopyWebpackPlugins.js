/* eslint-disable import/no-extraneous-dependencies */
/*
 * @Author: your name
 * @Date: 2021-06-25 01:02:38
 * @LastEditTime: 2021-06-26 16:45:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/webpack-test/项目webpack/plugins/plgs/CopyWebpackPlugins.js
 */
const { validate } = require('schema-utils');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const globby = require('globby');
const webpack = require('webpack');
const schema = require('./schema.json');

const readFile = promisify(fs.readFile);
const { RawSource } = webpack.sources;
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
    compiler.hooks.thisCompilation.tap(
      'CopyWebpackPlugin',
      async (compilation) => {
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
            const files = await Promise.all(
              paths.map(async (absPath) => {
                const data = await readFile(absPath);
                const fileName = path.join(to, absPath);
                return {
                  // 文件数据
                  data,
                  // 文件名称
                  fileName,
                };
              }),
            );
            // 生成webpack格式的资源
            const assets = files.map((file) => {
              const source = new RawSource(file.data);
              return {
                source,
                filename: file.fileName,
              };
            });
            // 添加至compilation中
            assets.forEach((asset) => {
              compilation.emitAsset(asset.filename, asset.source);
            });
            cb();
          },
        );
      },
    );
  }
}

module.exports = CopyWebpackPlugins;
