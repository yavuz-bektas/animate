import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    animelist : []
  },
  mutations: {
      setAnimeList(state, payload) {
          state.animelist.unshift(payload)
    }
    },

    actions: {

  },
})