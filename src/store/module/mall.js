import {product} from '../../config'
const state = {
  mallNav: [],
  productList: []
}
const getters = {
  getMallNav (state) {
    return state.mallNav
  },
  getProductList (state) {
    return state.productList
  }
}
const mutations = {
  getProduct (state, This) {
    This.$http({
      method: 'jsonp',
      url: product,
      jsonp: 'callback',
      jsonpCallback: 'json',
      params: This.product
    })
    .then(res => {
      console.log(res)
    })
  }
}
const actions = {
}
export default {
  state,
  getters,
  mutations,
  actions
}
