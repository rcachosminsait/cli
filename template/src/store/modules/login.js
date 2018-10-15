import axios from 'axios'
const axiosConfig = {
  baseURL: '/api/login'
}
const HTTP = axios.create(axiosConfig)

// state
const state = {
  loading: false,
  isPasswordText: false,
  mqPhone: window.matchMedia('(max-width: 767px)')
}

// getters
const getters = {
  getLoaderState () {
    return state.loading
  },
  getIsMobile () {
    return state.mqPhone.matches
  },
  getIsPasswordForm () {
    return state.isPasswordText
  }
}

// actions
const actions = {
  async login ({ commit }, data) {
    let endPoint = data.email ? '/email' : '/account'
    try {
      const response = await HTTP.post(endPoint, data)
      if (!data.email) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('sessionToken')}`
      }
      return response
    } catch (error) {
      console.log(error)
      return error
    }
  },
  loader ({ commit }, actions) {
    commit('SET_LOADER', actions)
  }
}

// mutations
const mutations = {
  'SET_LOADER' (state, actions) {
    state.loading = actions.loader === true
    state.isPasswordText = actions.password === true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
