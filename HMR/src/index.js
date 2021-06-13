/*
 * @Author: your name
 * @Date: 2021-06-14 01:31:16
 * @LastEditTime: 2021-06-14 02:01:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/webpack-test/HMR/src/index.js
 */
import print from './moduleA';
import './index.css';

console.log('entry test', 111);

print();

if (module.hot) {
  module.hot.accept('./moduleA.js', () => {
    print();
  });
}
