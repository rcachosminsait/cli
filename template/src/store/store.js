import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import login from './modules/login'
import example from './modules/example'

// axios.defaults.baseURL = ''

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    example
  }
})
