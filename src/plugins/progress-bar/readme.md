## progress-bar

> 使用方法

* 在main.js里引入progress-bar>index.js `import Progress from './plugins/progress-bar/index.js'`
* Vue.use(progress)
* 再使用全局的路由导航钩子

开始 ->
```js
router.beforeEach((from, to,  next)=>{
  Vue.$hms.progress.start();
  next()
})
```
结束 ->
```
router.afterEach((to, from)=>{
  Vue.$hms.progress.end();
})
```