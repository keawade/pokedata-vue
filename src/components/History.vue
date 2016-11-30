<template v-if='$store.state.history.length > 0'>
  <div class="history">
    <div class='ui four column stackable grid container'>
      <card v-for='pokemon in $store.state.history' :pokemon='pokemon'></card>
    </div>
  </div>
</template>

<script>
import Card from './Card'

export default {
  name: 'history',
  components: {
    Card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
