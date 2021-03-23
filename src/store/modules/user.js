const getDefaultState = () => {
  return {
    currentUser: {},
    fetchUserInfo: () => {}
  }
}
const state = getDefaultState()
const mutations = {
  resetState: state => {
    Object.assign(state, getDefaultState())
  },
  setState: (state, payload) => {
    Object.assign(state, payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
