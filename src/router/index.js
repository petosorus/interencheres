import Vue from 'vue'
import VueRouter from 'vue-router'

import Sale from '../components/Sale.vue'
import NewSale from '../components/NewSale.vue'

Vue.use(VueRouter)

  const routes = [
  // {
  //   path: '/',
  //   name: 'Search',
  //   component: Search
  // },
  {
    path: '/sale/:id',
    name: 'Sale',
    component: Sale
  },
  {
    path: '/newSale',
    name: 'NewSale',
    component: NewSale
  }
]

const router = new VueRouter({
  routes
})

export default router
