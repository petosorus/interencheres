import Vue from 'vue'
import VueRouter from 'vue-router'

import Sale from '../components/Sale.vue'
import NewSale from '../components/NewSale.vue'
import Search from '../components/Search.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/sale/:id',
    name: 'Sale',
    component: Sale
  },
  {
    path: '/newSale',
    name: 'NewSale',
    component: NewSale
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  { 
    path: '*',
    redirect: 'Search'
  }
]

const router = new VueRouter({
  routes
})

export default router
