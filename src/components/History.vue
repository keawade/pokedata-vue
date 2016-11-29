<template v-if='$store.state.history.length > 0'>
  <div class="history">
    <div class='ui four column stackable grid container'>
      <div class='column' v-for='pokemon in $store.state.history'>
        <div class='ui card'>
          <div class='image'>
            <img src='' v-bind:alt='pokemon.name' />
          </div>
          <div class='content'>
            <div class='header'>{{pokemon.id}} - {{pokemon.name}}</div>
            <div class='description'>{{pokemon.types}}</div>
          </div>
        </div>
      </div>
    </div>
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
