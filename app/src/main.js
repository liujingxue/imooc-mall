// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({                                    //整个页面的入口
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


// //另一种方式,通过$mount挂载
// new Vue({
//   //el: '#app',
//   router,
//   template: '<APP/>',
//   components: { App }
// }).$mount("#app");
