<template>
  <div class='column'>
    <div class='ui card'>
      <div class='image'>
        <img :src='imgSrc' :alt='pokemon.name' />
      </div>
      <div class='content'>
        <div class='header'>{{pokemon.id}} - {{pokemon.name}}</div>
        <div class='description'>
          <type-dot v-for='pokeType in pokemon.types' :type='pokeType'></type-dot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TypeDot from './TypeDot'

export default {
  name: 'card',
  components: {
    TypeDot
  },
  props: ['pokemon'],
  data () {
    return {
      imgSrc: `http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.pokemon.id}.png`
    }
  },
  updated () {
    this.imgSrc = `http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.pokemon.id}.png`
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
