import Vue from 'vue'
import Vuex from 'vuex'
import table from '@/store/table/table'
import posts from '@/store/posts/posts'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    
  },
  modules: {
    table, posts
  }
})
