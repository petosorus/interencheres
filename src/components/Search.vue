<template>
  <div>
    <label>Recherche
      <input type="text" v-model="searchTerms">
    </label>

    <div class="results">
      <div class="result-list">
        <h4>Ventes</h4>
        <ul>
          <li v-for="sale in sales" :key=sale.id>
            <router-link :to="'/sale/' + sale.id">
              {{sale.title}} - {{sale.description}}
            </router-link>
          </li>
        </ul>
      </div>

      <div class="result-list">
        <h4>Lots</h4>
        <ul>
          <li v-for="item in items" :key=item.id>
            <router-link :to="'/sale/' + item.sale_id">
              {{item.description}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Search',
  data() {
    return {
      timeout: null,
      debouncedInput: '',
      sales: [],
      items: []
    }
  },
  computed: {
    searchTerms: {
      get() {
        return this.debouncedInput
      },
      set(input) {
        if (this.timeout) {
          clearTimeout(this.timeout)
        }
        this.timeout = setTimeout(() => {
          this.debouncedInput = input
          this.search(this.debouncedInput)
        }, 500)
      }
    }
  },
  methods: {
    search(searchTerms) {
      const getSales = axios.get(`http://localhost:3000/sales?q=${searchTerms}`)
      const getItems = axios.get(`http://localhost:3000/items?q=${searchTerms}`)

      Promise.all([getSales, getItems])
      .then((responses) => {
        this.sales = responses[0].data
        this.items = responses[1].data
      })
    }
  }
}
</script>
<style scoped>
  .results {
    display: flex;
  }

  .results-list {
    flex-basis: 50%;
  }
</style>