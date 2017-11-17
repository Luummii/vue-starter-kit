import axios from 'axios'

const state = {
  user: {
    message: 'There will be a response from the server'
  }
}

const mutations = {
  SET_USER: function (state, data) {
    state.user.message = data.message
  }
}

const actions = {
  auth ({ commit }, { email, password }) {
    axios.post('/api/auth', {
      email, password
    }).then((res) => {
      commit('SET_USER', res.data)
    }).catch((err) => {
      console.log(err)
    })
  }
}

const getters = {
  user: state => {
    return state.user
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
