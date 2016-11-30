<template>
  <div class="search">
    <select class='ui fluid search dropdown' @change='select(id, $event)'>
      <option value=''>Select a Pokemon!</option>
      <option v-for='pokemon in $store.state.pokemon' v-bind:value='pokemon.id'>{{ pokemon.name }}</option>
    </select>
  </div>
</template>

<script>
/* global $ */
export default {
  name: 'search',
  mounted: function () {
    $('.ui.dropdown').dropdown()
  },
  methods: {
    select: function (id, event) {
      this.$store.commit('selectPokemon', this.$store.state.pokemon[event.target.value - 1])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .search {
    padding: 14px 0;
  }
</style>
