import Vue from 'vue'
import Vuex from 'vuex'
import pageLoad from './module/pageLoad'
import offer from './module/offer'
import mall from './module/mall'
import exchange from './module/exchange'
import order from './module/order'
import wallet from './module/wallet'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    pageLoad,
    offer,
    mall,
    exchange,
    order,
    wallet
  }
})
