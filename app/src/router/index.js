import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'      //@映射到src文件夹
import GoodsList from './../views/GoodsList'
import Title from '@/views/Title'
import Image from '@/views/Image'
import Cart from '@/views/Cart'

Vue.use(Router)

export default new Router({
  mode: 'history',           //指定路由模式为history
  routes: [
    {
      // path: '/goods/:goodsId/user/:name',
      // path: '/goods',
      path: '/',
      name: 'GoodsList',
      components: {
        default: GoodsList,
        title: Title,
        img: Image
      },
    },
    {
      path: '/cart/:cartId',
      name: 'cart',
      component:Cart
    }
  ]
})
