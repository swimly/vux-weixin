import {product, productType} from '../../config'
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
      url: productType,
      jsonp: 'callback',
      jsonpCallback: 'json'
    })
    .then(res => {
      state.mallNav = res.body.data.typeList
      This.$localStorage.set('goodsType', JSON.stringify(state.mallNav))
      This.$http({
        method: 'jsonp',
        url: product,
        jsonp: 'callback',
        jsonpCallback: 'json',
        params: This.product
      })
      .then(res => {
        state.productList = res.body.data.productList
      })
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
