<template>
  <div id="application" class='ui container'>
    <search></search>
    <viewer></viewer>
    <history></history>
  </div>
</template>

<script>
import Search from './components/Search'
import Viewer from './components/Viewer'
import History from './components/History'

export default {
  name: 'app',
  components: {
    Search,
    Viewer,
    History
  },
  mounted: function () {
    this.$store.commit('selectPokemon', this.$store.state.pokemon[Math.ceil(Math.random() * 150)])
  }
}
</script>

<style>
</style>
