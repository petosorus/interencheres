<template>
  <div class="view">
    <h1>Nouvelle vente</h1>
    <!-- <form> -->
      <label for="title">Titre de la vente
        <input id="title" name="title" type="text" v-model="sale.title">
      </label>

      <label for="description">Description de la vente
        <textarea id="description" name="description" type="text" v-model="sale.description">
        </textarea>
      </label>

      <div v-for="(item, index) in items" :key=index class="item">
        <label>Description du lot
          <textarea type="text" v-model="item.description"></textarea>
        </label>
      </div>
      <button @click="newItem">Nouveau lot</button>
      <button type="submit" @click="save">Enregistrer</button>
    <!-- </form> -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'NewSale',
  data() {
    return {
      sale: {
        title: '',
        description: ''
      },
      items: [{
        description: ''
      }]
    }
  },
  methods: {
    newItem() {
      this.items.push({
        description: ''
      })
    },
    save() {
      axios.post("http://localhost:3000/sales", this.sale)
        .then(response => {
            if(this.items.length > 0) {
            const sale_id = response.data.id

            this.items.forEach(item => {
              item.sale_id = sale_id
              axios.post("http://localhost:3000/items", item)  
            })
          }
        })
    }
  }
}
</script>

<style scoped>
  label {
    display: block;
  }

  .item {
    margin-top: 5px;
    padding-top: 5px;
    border-top: solid 1px grey;
  }
</style>