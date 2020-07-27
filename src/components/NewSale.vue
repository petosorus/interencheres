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
      <button class="newItem" @click="newItem">Nouveau lot</button>
      <button @click="save">Enregistrer</button>
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
      const itemPromises = []

      axios.post("http://localhost:3000/sales", this.sale)
        .then(response => {
          const sale_id = response.data.id
            if(this.items.length > 0) {
            
            this.items.forEach(item => {
              item.sale_id = sale_id
              itemPromises.push( axios.post("http://localhost:3000/items", item))
            })
          }

          Promise.all(itemPromises)
          .then(() => this.$router.push(`/sale/${sale_id}`))
        })
    }
  }
}
</script>

<style scoped>
  label {
    display: grid;
  }

  button {
    background-color: #42b983;
    border: none;
    color: white;
    padding: 1rem;
    margin-right: 5px;
  }

  .newItem {
    background-color: white;
    color: #2c3e50;
  }

  .newItem:hover {
    background-color: lightgrey;
  }

  .item {
    margin-top: 5px;
    padding-top: 5px;
    border-top: solid 1px grey;
  }
  
  @media screen and (max-width: 768px) {
    .results {
      flex-direction: column;
    }

    .result-list {
      width: 100%;
    }
  }
</style>