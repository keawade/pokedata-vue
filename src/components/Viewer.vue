<template v-if='$store.state.current'>
  <div class="viewer">
    <div class='ui segments'>
      <div class='ui center aligned segment'>
        <h1 class='ui huge header'>{{$store.state.current.id}} - {{$store.state.current.name}}</h1>
      </div>
      <div class='ui segment'>
        <div class='ui two column divided stackable grid'>
          <div class='row'>
            <div class='column'>
              <img v-bind:src='url' v-bind:alt='$store.state.current.name' />
            </div>
            <div class='column'>
              <h3 class='ui dividing header'>Type</h3>
                {{$store.state.current.types}}
              <h3 class='ui dividing header'>Weaknesses</h3>
              <div v-for='pokeType in $store.state.current.types'>
              </div>
              <h3 class='ui dividing header'>Resistances</h3>
              <div v-for='pokeType in $store.state.current.types'>
              </div>
              <h3 class='ui dividing header'>Immunities</h3>
              <div v-for='pokeType in $store.state.current.types'>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='ui center aligned segment'>
        Fork me on <a href='https://github.com/keawade/pokedata' target='_blank'>GitHub</a>
      </div>
    </div>
    <div v-if='$store.state.history.length > 0' class='ui divider' />
  </div>
</template>

<script>
export default {
  name: 'viewer',
  data () {
    return {
      url: `http://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.$store.state.current.id}.png`
    }
  },
  updated: function () {
    this.url = `http://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.$store.state.current.id}.png`
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
