import { createStore } from 'vuex'
import axios from 'axios'

const url = 'https://skateboardecomm.onrender.com/'


export default createStore({
  state: {
    skateboards: null
  },
  getters: {
  },
  mutations: {
    setSkate(state, data){
      state.skateboards = data
    }
  },
  actions: {
    async fetchBoards({commit}){
      const fetchedData = await axios.get(`${url}products`)
      commit('setSkate', fetchedData.data.results)
    }
  },
  modules: {
  }
})
