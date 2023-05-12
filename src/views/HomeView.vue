<template>
  <div class="home">
    <GatosCards/>
  </div>
</template>

<script>
// @ is an alias to /src
import GatosCards from '@/components/GatosCards.vue'

export default {
  name: 'HomeView',
  components: {
    GatosCards
  }
}
</script>
