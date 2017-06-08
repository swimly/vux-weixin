const state = {
  orderList: [{
    goods: {}
  }]
}
const getters = {
  getOrderList (state) {
    return state.orderList
  }
}
export default {
  state,
  getters
}
