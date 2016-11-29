<template>
  <div class="history">
    <div v-for='pokemon in $store.state.history'>{{pokemon.name}}</div>
  </div>
</template>

<script>
export default {
  name: 'history'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
