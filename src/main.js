import Vue from 'vue'
import Vuex from 'vuex'

import AllPokemon from './assets/pokemon.json'
import types from './assets/types.json'
import App from './App'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    current: false,
    history: [],
    pokemon: AllPokemon.pokemon,
    types: types
  },
  mutations: {
    selectPokemon (state, pokemon) {
      state.history = state.current ? [state.current, ...state.history] : state.history
      state.current = pokemon
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
