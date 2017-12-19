/**
 * Created by wangren on 2017/12/14.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    routerName: 'index'
  },
  mutations: {
    updateRoute(state, routerName){
      state.routerName = routerName;
    }
  }
})

export default store
