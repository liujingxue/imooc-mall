import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/GoodsList'

Vue.use(Router)

export default new Router({
  mode: 'history',           //指定路由模式为history
  routes: [
    {
      path: '/',
      component: GoodsList
    }
  ]
})
