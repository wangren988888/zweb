import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const index = resolve => require(['../views/index/index.vue'], resolve);
const design = resolve => require(['../views/design/design.vue'], resolve);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        title: 'index'
      },
      component: index
    },
    {
      path: '/design',
      name: 'design',
      meta: {
        title: 'design'
      },
      component: design
    }
  ]
})
