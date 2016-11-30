<template>
  <div class='column'>
    <div class='ui card'>
      <div class='image'>
        <img :src='imgSrc' :alt='pokemon.name' />
      </div>
      <div class='content'>
        <div class='header'>{{pokemon.id}} - {{pokemon.name}}</div>
        <div class='description'>{{pokemon.types}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
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
