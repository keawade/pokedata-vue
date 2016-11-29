<template>
  <div id="app">
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
  }
}
</script>

<style>
</style>
