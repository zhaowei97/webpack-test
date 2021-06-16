/*
 * @Author: your name
 * @Date: 2021-06-15 00:23:40
 * @LastEditTime: 2021-06-17 00:43:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/webpack-test/缓存/src/js/index.js
 */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(() => {
        console.log('注册成功');
      })
      .catch(() => {
        console.log('构建失败');
      });
  });
}
