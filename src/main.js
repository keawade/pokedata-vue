import Vue from 'vue'
import Vuex from 'vuex'

import App from './App'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    pokemonList: []
  },
  mutations: {
    selectPokemon (state, pokemon) {
      state.pokemonList = [pokemon, ...state.pokemonList]
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  components: { App }
})
