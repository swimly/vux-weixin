const state = {
  mallNav: [{
    text: '新品上市',
    icon: 'static/img/index1.webp',
    url: '/mall/new'
  }, {
    text: '超值兑换',
    icon: 'static/img/index2.webp',
    url: '/mall/new'
  }, {
    text: '时尚车载',
    icon: 'static/img/index3.webp',
    url: '/mall/new'
  }, {
    text: '精品箱包',
    icon: 'static/img/index4.webp',
    url: '/mall/new'
  }, {
    text: '居家生活',
    icon: 'static/img/index5.webp',
    url: '/mall/new'
  }, {
    text: '酒水茶具',
    icon: 'static/img/index6.webp',
    url: '/mall/new'
  }, {
    text: '潮品配饰',
    icon: 'static/img/index7.webp',
    url: '/mall/new'
  }, {
    text: '所有商品',
    icon: 'static/img/index8.webp',
    url: '/mall/new'
  }],
  newProduct: [{
    id: 1,
    cover: 'static/img/g1.webp',
    name: '卡儿酷 车载吸尘器 干湿两用多功能',
    score: 1980,
    time: '2016-12-23'
  }, {
    id: 2,
    cover: 'static/img/g2.webp',
    name: '香百年（Carori） 汽车香水座车载车用香水',
    score: 890,
    time: '2016-12-23'
  }, {
    id: 3,
    cover: 'static/img/g1.webp',
    name: '卡儿酷 车载吸尘器 干湿两用多功能',
    score: 1980,
    time: '2016-12-23'
  }, {
    id: 4,
    cover: 'static/img/g2.webp',
    name: '香百年（Carori） 汽车香水座车载车用香水',
    score: 890,
    time: '2016-12-23'
  }, {
    id: 5,
    cover: 'static/img/g1.webp',
    name: '卡儿酷 车载吸尘器 干湿两用多功能',
    score: 1980,
    time: '2016-12-23'
  }, {
    id: 6,
    cover: 'static/img/g2.webp',
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
export default {
  state,
  getters
}
