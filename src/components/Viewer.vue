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
              <div v-for='pokeType in $store.state.current.types'>{{pokeType}}</div>
              <h3 class='ui dividing header'>Weaknesses</h3>
              <div v-for='pokeType in weaknesses'>{{pokeType}}</div>
              <h3 class='ui dividing header'>Resistances</h3>
              <div v-for='pokeType in resistances'>{{pokeType}}</div>
              <h3 class='ui dividing header'>Immunities</h3>
              <div v-for='pokeType in immunities'>{{pokeType}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class='ui center aligned segment'>
        Fork me on <a href='https://github.com/keawade/pokedata-vue' target='_blank'>GitHub</a>
      </div>
    </div>
    <div v-if='$store.state.history.length > 0' class='ui divider' />
  </div>
</template>

<script>
import { calculateStrengths } from '../helpers'

export default {
  name: 'viewer',
  data () {
    return {
      url: `http://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.$store.state.current.id}.png`
    }
  },
  computed: {
    strengths: function () {
      return calculateStrengths(this.$store.state.current.types.map((type) => (type.toLowerCase())))
    },
    weaknesses: function () {
      return Object.keys(this.strengths).filter((key) => (this.strengths[key] >= 2))
    },
    resistances: function () {
      return Object.keys(this.strengths).filter((key) => (this.strengths[key] === 0.25 || this.strengths[key] === 0.5))
    },
    immunities: function () {
      return Object.keys(this.strengths).filter((key) => (this.strengths[key] === 0))
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
