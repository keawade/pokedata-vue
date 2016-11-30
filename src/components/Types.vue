<template>
  <span :class='className'>{{ type.toUpperCase() }}</span>
</template>

<script>
export default {
  name: 'types',
  props: ['type'],
  computed: {
    className: function () {
      return `type ${this.type.toLowerCase()}`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
