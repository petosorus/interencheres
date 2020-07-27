<template>
  <div id="app">
    <div v-if="konamied">
      <!-- <iframe src='https://gfycat.com/ifr/WhirlwindLameIbis?controls=0' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe> -->
      <iframe  src="https://www.youtube.com/embed/MS8OawQegYE?autoplay=1&controls=0&rel=0&showinfo=0" frameborder="0" allow="autoplay;" allowfullscreen></iframe>
    </div>

    <span v-else class="layout">
      <nav>
        <router-link to="/search">Recherche</router-link>
        <router-link to="/newSale">Nouvelle vente</router-link>
      </nav>
      <router-view/>
    </span>
  </div>
</template>

<script>
import NewSale from './components/NewSale.vue'
import Konami from 'konami'

export default {
  name: 'App',
  data() {
    return {
      konamied: false
    }
  },
  methods: {
    gameOverMate() {
      this.konamied = true
    }
  },
  mounted() {
    new Konami(() => {
      this.gameOverMate()
    })
  }
}
</script>
<style>
  @import url('assets/style.css');
</style>

<style scoped>
iframe {
  width: 100%;
  height: 100%;
  position: absolute;

}
</style>
