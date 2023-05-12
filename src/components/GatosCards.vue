<template>
  <div  v-if="!listaGatos" class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div v-for="gato in listaGatos" :key="gato.id">
  <h1>{{ gato.breeds[0].name }}</h1>
<img :src="gato.url" alt="">
</div>
<button class="btn btn-primary mt-3"> ejemplo</button>
</template>


<script>
import {mapState} from 'vuex'

export default {
  data() {
    return {
      gatos: null
    }
  },
  computed: {
    ...mapState(['listaGatos'])
  },
  created() {
    this.gatos = this.listaGatos
  }
}
</script>


<style>
img {
  max-width: 200px;
}

</style>