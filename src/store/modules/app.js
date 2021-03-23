const state = {
  sidebar: {
    opened: true
  }
}

const mutations = {
  toggleSideBar: state => {
    state.sidebar.opened = !state.sidebar.opened
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
