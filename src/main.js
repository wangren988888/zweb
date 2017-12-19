// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import print from './utils/print'
import FastClick from 'fastclick'
import Vueresource from 'vue-resource'
import ProgressBar from './plugins/progress-bar/index'

Vue.config.productionTip = false;

Vue.use(ProgressBar);
Vue.use(Vueresource);

router.beforeEach((to, from, next) => {
  if (from.name == 'index') {
    $.fn.fullpage.destroy('all');
  }
  document.title = to.meta.title;
  Vue.$hms.progress.start();
  next();
})

router.afterEach(route => {
  Vue.$hms.progress.end();
})

document.addEventListener('DOMContentLoaded', function () {
  FastClick.attach(document.body);
}, false);


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      this.$store.commit('updateRoute', to.name);
    }
  }
})
