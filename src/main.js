import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Orders from '../src/views/Orders'
import Home from '../src/views/Home'

Vue.use(VueRouter)

Vue.config.productionTip = false

// register jw pagination component globally
import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);


const router = new VueRouter({
      routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
          path: '/orders',
          name: 'Orders',
          component: Orders
        }

      ]
})



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
