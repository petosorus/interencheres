<template>
  <div>
    <h1>{{ sale.title }}</h1>

    <p>{{ sale.description }}</p>

    <ul>
      <li v-for="item in items" :key="item.id">
        {{item.description}}
      </li>
    </ul>
  </div>  
</template>

<script>
import axios from 'axios'

export default {
  name: 'Sale',
  data() {
    return {
      sale: {},
      items: []
    }
  },
  beforeRouteEnter (to, from, next) {
    const getSale = axios.get(`http://localhost:3000/sales/${to.params.id}`)
    const getItems = axios.get(`http://localhost:3000/items?sale_id=${to.params.id}`)

    Promise.all([getSale, getItems])
    .then((responses) => {
      next(vm => {
        vm.sale = responses[0].data
        vm.items = responses[1].data
      })
    })
    .catch((error) => {
      next(false)
    }) 
  },
}
</script>
