<template>
  <div class="page gray">
    <swiper class="w" :aspect-ratio="315/712" dots-position="center" auto>
      <swiper-item class="swiper-demo-img" v-for="(item, index) in recommend" :key="index">
        <img class="w" v-lazy="item"/>
      </swiper-item>
    </swiper>
    <div class="p-1 white sub-line">
      <div class="row w d-line fs-1">
        <router-link to="/detail" class="col v-m t-c c-6">
          <img class="v-m" style="width:2rem;" v-lazy="'static/img/score.png'" alt=""/>
          <span class="v-m">积分：</span>
          <span class="c-red v-m">{{score}}</span>
        </router-link>
        <router-link to="/exchange" class="col v-m t-c c-6">
          <img class="v-m " style="width:2rem;" v-lazy="'static/img/jilu.png'" alt=""/>
          <span class="v-m">兑换记录</span>
        </router-link>
      </div>
    </div>
    <div class="grid t-l white mt-5 click top-line sub-line quick">
      {{nav}}
      <router-link :to="'/mall/' + item.id" class="col col-6 t-c" v-for="(item, index) in nav" :key="index">
        <img class="icon" v-lazy="'static/img/index1.png'" alt=""/>
        <b class="block fs-1 c-n">{{item.name}}</b>
      </router-link>
    </div>
    <swiper class="w" :aspect-ratio="83/360" dots-position="center" auto>
      <swiper-item class="swiper-demo-img" v-for="(item, index) in advert" :key="index">
        <img class="w" v-lazy="item">
      </swiper-item>
    </swiper>
    <h2 class="title">新品推荐</h2>
    <ul class="grid goods-list">
      <li class="col col-12" v-for="(item, index) in products">
        <router-link :to="'/goods/' + item.id" class="goods" @click.native="handleSaveData(item)">
          <span class="cover">
            <img v-lazy="{src: item.listPic, error: 'static/img/err1.png', loading: 'static/img/loading1.gif'}"/>
          </span>
          <b class="name">{{item.name}}</b>
          <span class="c-red">积分<b class="score">{{item.score}}</b></span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  import {Swiper, SwiperItem, XImg} from 'vux'
  import {mapGetters, mapMutations} from 'vuex'
  export default {
    head: {
      title: {
        inner: '积分商城'
      }
    },
    data () {
      return {
        score: 0,
        recommend: [
          'static/img/banner1.png',
          'static/img/banner1.png',
          'static/img/banner1.png'
        ],
        advert: [
          'static/img/banner2.png',
          'static/img/banner2.png',
          'static/img/banner2.png'
        ],
        product: {
          type: 0,
          timeOrder: 0,
          priceOrder: 0,
          defaultOrder: 0,
          limit: 8,
          pageIndex: 0
        }
      }
    },
    created () {
      this.getProduct(this)
      this.score = JSON.parse(this.$localStorage.get('userInfo')).userBalance
    },
    computed: {
      ...mapGetters({
        nav: 'getMallNav',
        products: 'getProductList'
      })
    },
    methods: {
      ...mapMutations({
        getProduct: 'getProduct'
      }),
      handleSaveData (item) {
        console.log(item)
        this.$localStorage.set('goods', JSON.stringify(item))
      }
    },
    components: {
      Swiper,
      SwiperItem,
      XImg
    }
  }
</script>
<style scoped>
.icon{width:3rem;}
.quick{padding:0.5rem 0;}
.quick a{padding:0.5rem 0;line-height:2;}
</style>
