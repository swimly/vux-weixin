const state = {
  order: {
    insurance: '', // 险种id
    city: '', // 投保城市
    carNumber: '', // 车牌号
    carOwner: '', // 车主姓名
    phone: '', // 车主电话
    IDface: '', // 身份证正面照片
    drivingLicense: '', // 行驶证正面
    subdrivingLicense: '', // 行驶证附页
    force: '' // 强制保险
  },
  offer: {
    id: 1,
    cover: 'static/img/safe1.png',
    banner: 'static/img/banner3.png',
    name: '人保车险',
    address: '各大城市',
    car: '9座及以下个人非营业客车',
    recommend: true
  },
  offerList: [{
    id: 1,
    cover: 'static/img/safe1.png',
    banner: 'static/img/banner1.png',
    name: '人保车险',
    address: '各大城市',
    car: '9座及以下个人非营业客车',
    recommend: true
  }, {
    id: 2,
    cover: 'static/img/safe2.png',
    banner: 'static/img/banner1.png',
    name: '人保车险',
    address: '各大城市',
    car: '9座及以下个人非营业客车',
    recommend: true
  }, {
    id: 3,
    cover: 'static/img/safe3.png',
    banner: 'static/img/banner1.png',
    name: '人保车险',
    address: '各大城市',
    car: '9座及以下个人非营业客车',
    recommend: false
  }, {
    id: 4,
    cover: 'static/img/safe1.png',
    banner: 'static/img/banner1.png',
    name: '人保车险',
    address: '各大城市',
    car: '9座及以下个人非营业客车',
    recommend: false
  }, {
    id: 5,
    cover: 'static/img/safe2.png',
    banner: 'static/img/banner1.png',
    name: '人保车险',
    address: '各大城市',
    car: '9座及以下个人非营业客车',
    recommend: false
  }, {
    id: 6,
    cover: 'static/img/safe3.png',
    banner: 'static/img/banner1.png',
    name: '人保车险',
    address: '各大城市',
    car: '9座及以下个人非营业客车',
    recommend: false
  }]
}
const getters = {
  getOfferList (state) {
    return state.offerList
  },
  getOffer (state) {
    return state.offer
  }
}
const mutations = {
  getOfferList (state) {},
  getOffer (state) {}
}
export default {
  state,
  getters,
  mutations
}
