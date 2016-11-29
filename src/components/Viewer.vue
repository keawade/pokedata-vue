<template>
  <div class="viewer">
    <div className='ui segments'>
      <div className='ui center aligned segment'>
        <h1 className='ui huge header'>{{$store.state.current.id}} - {{$store.state.current.name}}</h1>
      </div>
      <div className='ui segment'>
        <div className='ui two column divided stackable grid'>
          <div className='row'>
            <div className='column'>
              <img v-bind:src='url' v-bind:alt='$store.state.current.name' />
            </div>
            <div className='column'>
              <h3 className='ui dividing header'>Type</h3>
              <div v-for='pokeType in $store.state.current.types'>
              </div>
              <h3 className='ui dividing header'>Weaknesses</h3>
              <div v-for='pokeType in $store.state.current.types'>
              </div>
              <h3 className='ui dividing header'>Resistances</h3>
              <div v-for='pokeType in $store.state.current.types'>
              </div>
              <h3 className='ui dividing header'>Immunities</h3>
              <div v-for='pokeType in $store.state.current.types'>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='ui center aligned segment'>
        Fork me on <a href='https://github.com/keawade/pokedata' target='_blank'>GitHub</a>
      </div>
      <div v-if='$store.state.history.length > 0' className='ui divider' />
    </div>
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
