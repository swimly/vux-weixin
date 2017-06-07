const state = {
  isLoading: false
}
const getters = {
  pageLoading (state) {
    return state.isLoading
  }
}
const mutations = {
  updateLoadingStatus (state, param) {
    state.isLoading = param
    console.log('我被执行了')
  }
}
export default {
  state,
  getters,
  mutations
}
