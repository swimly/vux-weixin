<template>
  <div class="page gray">
    <swiper class="w" :aspect-ratio="315/712" dots-position="center" auto>
      <swiper-item class="swiper-demo-img" v-for="(item, index) in recommend" :key="index">
        <x-img class="w" :src="item"></x-img>
      </swiper-item>
    </swiper>
    <div class="p-1 white sub-line">
      <ul class="row w d-line fs-1">
        <li class="col v-m t-c">
          <x-img class="v-m" :src="'static/img/score.png'" alt=""></x-img>
          <span class="v-m">积分：</span>
          <span class="c-red v-m">1342</span>
        </li>
        <li class="col v-m t-c">
          <x-img class="v-m " :src="'static/img/jilu.png'" alt=""></x-img>
          <span class="v-m">兑换记录</span>
        </li>
      </ul>
    </div>
    <div class="grid t-c white mt-5 click top-line sub-line">
      <router-link :to="item.url" class="col col-6 p-1" v-for="(item, index) in nav" :key="index">
        <x-img :src="item.icon" alt=""></x-img>
        <b class="block fs-1 c-n">{{item.text}}</b>
      </router-link>
    </div>
    <swiper class="w" :aspect-ratio="83/360" dots-position="center" auto>
      <swiper-item class="swiper-demo-img" v-for="(item, index) in advert" :key="index">
        <img class="w" :src="item">
      </swiper-item>
    </swiper>
    <h2 class="title">新品推荐</h2>
    <ul class="grid goods-list">
      <li class="col col-12" v-for="(item, index) in news">
        <a href="#" class="goods">
          <span class="cover">
            <x-img :src="item.cover"></x-img>
          </span>
          <b class="name">{{item.name}}</b>
          <span class="c-red">积分<b class="score">{{item.score}}</b></span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  import {Swiper, SwiperItem, XImg} from 'vux'
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        recommend: [
          'static/img/banner1.png',
          'http://placeholder.qiniudn.com/712x315/F74C31/ffffff',
          'http://placeholder.qiniudn.com/712x315/8AEEB1/ffffff'
        ],
        advert: [
          'static/img/banner2.png',
          'http://placeholder.qiniudn.com/360x83/F74C31/ffffff',
          'http://placeholder.qiniudn.com/360x83/8AEEB1/ffffff'
        ]
      }
    },
    computed: {
      ...mapGetters({
        nav: 'getMallNav',
        news: 'getNewProduct'
      })
    },
    components: {
      Swiper,
      SwiperItem,
      XImg
    }
  }
</script>
