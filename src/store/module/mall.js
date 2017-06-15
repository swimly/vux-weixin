import {product} from '../../config'
const state = {
  mallNav: [{
    text: '新品上市',
    icon: 'static/img/index1.png',
    url: '/mall/new'
  }, {
    text: '超值兑换',
    icon: 'static/img/index2.png',
    url: '/mall/new'
  }, {
    text: '时尚车载',
    icon: 'static/img/index3.png',
    url: '/mall/new'
  }, {
    text: '精品箱包',
    icon: 'static/img/index4.png',
    url: '/mall/new'
  }, {
    text: '居家生活',
    icon: 'static/img/index5.png',
    url: '/mall/new'
  }, {
    text: '酒水茶具',
    icon: 'static/img/index6.png',
    url: '/mall/new'
  }, {
    text: '潮品配饰',
    icon: 'static/img/index7.png',
    url: '/mall/new'
  }, {
    text: '所有商品',
    icon: 'static/img/index8.png',
    url: '/mall/new'
  }],
  newProduct: [{
    id: 1,
    cover: 'static/img/g1.png',
    name: '卡儿酷 车载吸尘器 干湿两用多功能',
    score: 1980,
    time: '2016-12-23'
  }, {
    id: 2,
    cover: 'static/img/g2.png',
    name: '香百年（Carori） 汽车香水座车载车用香水',
    score: 890,
    time: '2016-12-23'
  }, {
    id: 3,
    cover: 'static/img/g1.png',
    name: '卡儿酷 车载吸尘器 干湿两用多功能',
    score: 1980,
    time: '2016-12-23'
  }, {
    id: 4,
    cover: 'static/img/g2.png',
    name: '香百年（Carori） 汽车香水座车载车用香水',
    score: 890,
    time: '2016-12-23'
  }, {
    id: 5,
    cover: 'static/img/g1.png',
    name: '卡儿酷 车载吸尘器 干湿两用多功能',
    score: 1980,
    time: '2016-12-23'
  }, {
    id: 6,
    cover: 'static/img/g2.png',
    name: '香百年（Carori） 汽车香水座车载车用香水',
    score: 890,
    time: '2016-12-23'
  }]
}
const getters = {
  getMallNav (state) {
    return state.mallNav
  },
  getNewProduct (state) {
    return state.newProduct
  }
}
const mutations = {
  getNewProduct (state, This) {
    This.$http({
      method: 'jsonp',
      url: product,
      jsonp: 'callback',
      jsonpCallback: 'json',
      params: This.product,
      before: () => {
      }
    })
    .then(res => {
      console.log(res)
      state.newProduct = res.body.data.productList
    })
  }
}
export default {
  state,
  getters,
  mutations
}
