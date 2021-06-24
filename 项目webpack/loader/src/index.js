/*
 * @Author: your name
 * @Date: 2021-06-22 00:51:52
 * @LastEditTime: 2021-06-24 00:22:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/webpack-test/项目webpack/loaders/src/index.js
 */

console.log('content');

class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log(this.name);
  }
}

console.log(new Person('jack'));
