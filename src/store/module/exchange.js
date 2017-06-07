const state = {
  exchangeList: [{
    id: 1,
    cover: 'static/img/safe1.png',
    name: '香百年（Carori） 汽车香水座车载车用香水',
    score: 1270,
    status: '已兑换'
  }, {
    id: 1,
    cover: 'static/img/safe1.png',
    name: '香百年（Carori） 汽车香水座车载车用香水',
    score: 1270,
    status: '已兑换'
  }]
}
const getters = {
  getExchangeList (state) {
    return state.exchangeList
  }
}
const mutations = {
  getExchangeList (state) {},
  getExchange (state) {}
}
export default {
  state,
  getters,
  mutations
}
