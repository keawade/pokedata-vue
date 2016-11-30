<template>
  <span :class='className'>●</span>
</template>

<script>
export default {
  name: 'type-dot',
  props: ['type'],
  computed: {
    className: function () {
      return `typedot ${this.type.toLowerCase()}`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .typedot {
    font-size: 2em;
  }
  .typedot.normal {
    color: #A8A878;
      border: none;
      background-color: transparent;
  }
  .typedot.fire {
    color: #F08030;
      border: none;
      background-color: transparent;
  }
  .typedot.water {
    color: #6890F0;
      border: none;
      background-color: transparent;
  }
  .typedot.electric {
    color: #F8D030;
      border: none;
      background-color: transparent;
  }
  .typedot.grass {
    color: #78C850;
      border: none;
      background-color: transparent;
  }
  .typedot.ice {
    color: #98D8D8;
      border: none;
      background-color: transparent;
  }
  .typedot.ground {
    color: #E0C068;
      border: none;
      background-color: transparent;
  }
  .typedot.flying {
    color: #A890F0;
      border: none;
      background-color: transparent;
  }
  .typedot.ghost {
    color: #705898;
      border: none;
      background-color: transparent;
  }
  .typedot.rock {
    color: #B8A038;
      border: none;
      background-color: transparent;
  }
  .typedot.fighting {
    color: #C03028;
      border: none;
      background-color: transparent;
  }
  .typedot.poison {
    color: #A040A0;
      border: none;
      background-color: transparent;
  }
  .typedot.psychic {
    color: #F85888;
      border: none;
      background-color: transparent;
  }
  .typedot.bug {
    color: #A8B820;
      border: none;
      background-color: transparent;
  }
  .typedot.dark {
    color: #705848;
      border: none;
      background-color: transparent;
  }
  .typedot.steel {
    color: #B8B8D0;
      border: none;
      background-color: transparent;
  }
  .typedot.dragon {
    color: #7038F8;
      border: none;
      background-color: transparent;
  }
  .typedot.fairy {
    color: #EE99AC;
      border: none;
      background-color: transparent;
  }
</style>
