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
              <types v-for='pokeType in $store.state.current.types' :type='pokeType'>{{pokeType}}</types>
              <h3 class='ui dividing header'>Weaknesses</h3>
              <types v-for='pokeType in weaknesses' :type='pokeType'>{{pokeType}}</types>
              <h3 class='ui dividing header'>Resistances</h3>
              <types v-for='pokeType in resistances' :type='pokeType'>{{pokeType}}</types>
              <h3 class='ui dividing header'>Immunities</h3>
              <types v-for='pokeType in immunities' :type='pokeType'>{{pokeType}}</types>
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
import Types from './Types'

export default {
  name: 'viewer',
  components: {
    Types
  },
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
  .type.normal {
    background-color: #A8A878;
    border: 1px solid #6D6D4E;
  }
  .type.fire {
    background-color: #F08030;
    border: 1px solid #9C531F;
  }
  .type.water {
    background-color: #6890F0;
    border: 1px solid #445E9C;
  }
  .type.electric {
    background-color: #F8D030;
    border: 1px solid #A1871F;
  }
  .type.grass {
    background-color: #78C850;
    border: 1px solid #4E8234;
  }
  .type.ice {
    background-color: #98D8D8;
    border: 1px solid #638D8D;
  }
  .type.ground {
    background-color: #E0C068;
    border: 1px solid #927D44;
  }
  .type.flying {
    background-color: #A890F0;
    border: 1px solid #6D5E9C;
  }
  .type.ghost {
    background-color: #705898;
    border: 1px solid #493963;
  }
  .type.rock {
    background-color: #B8A038;
    border: 1px solid #786824;
  }
  .type.fighting {
    background-color: #C03028;
    border: 1px solid #7D1F1A;
  }
  .type.poison {
    background-color: #A040A0;
    border: 1px solid #682A68;
  }
  .type.psychic {
    background-color: #F85888;
    border: 1px solid #A13959;
  }
  .type.bug {
    background-color: #A8B820;
    border: 1px solid #6D7815;
  }
  .type.dark {
    background-color: #705848;
    border: 1px solid #49392F;
  }
  .type.steel {
    background-color: #B8B8D0;
    border: 1px solid #787887;
  }
  .type.dragon {
    background-color: #7038F8;
    border: 1px solid #4924A1;
  }
  .type.fairy {
    background-color: #EE99AC;
    border: 1px solid #F4BDC9;
  }

  .type {
    margin: 10px;
    padding: 5px 8px 5px 8px;
    display: inline-block;
    border-radius: 6px;
    -webkit-border-radius: 6px; 
    -moz-border-radius: 6px;
    -o-border-radius: 6px;
    font-size: 13px;
    font-family: pokemon;
    color: #FFF;
    text-shadow: 0.5px 0.5px 2px black;
  }
</style>
