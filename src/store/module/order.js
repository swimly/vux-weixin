const state = {
  orderList: [{
    goods: {
      id: 123,
      cover: 'static/img/safe1.png'
    },
    carNumber: '鄂A78458',
    insured: '刘勇',
    status: '待报价', // waitingoffer waitingpay waitinglist list
    price: '',
    time: '2017-05-02  17 : 50 : 15'
  }, {
    goods: {
      id: 123,
      cover: 'static/img/safe1.png'
    },
    carNumber: '鄂A78458',
    insured: '刘勇',
    status: '待付款', // waitingoffer waitingpay waitinglist list
    price: '￥4300.00',
    time: '2017-05-02  17 : 50 : 15'
  }, {
    goods: {
      id: 123,
      cover: 'static/img/safe1.png'
    },
    carNumber: '鄂A78458',
    insured: '刘勇',
    status: '待出单', // waitingoffer waitingpay waitinglist list
    price: '',
    time: '2017-05-02  17 : 50 : 15'
  }, {
    goods: {
      id: 123,
      cover: 'static/img/safe1.png'
    },
    carNumber: '鄂A78458',
    insured: '刘勇',
    status: '已出单', // waitingoffer waitingpay waitinglist list
    price: '',
    time: '2017-05-02  17 : 50 : 15'
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
