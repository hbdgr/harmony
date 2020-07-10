export const navigation = {
  namespaced: true,

  state: () => ({
    searchStr: '',
  }),

  mutations: {
    setSearchStr(state, payload) {
      console.log("search:", payload.searchStr)
      state.searchStr = payload.searchStr
    },
  },

  getters: {
    searchStr(state) {
      return state.searchStr
    },
  },

  actions: {
  }
}
