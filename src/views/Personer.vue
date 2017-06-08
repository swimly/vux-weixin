<template>
  <div class="page gray">
    <blur :blur-amount=20 :url="face" class="head-bar">
      <ul class="row w h" style="position:relative;z-index:1;">
        <li class="col v-b col-16">
          <img :src="face" alt="" class="circle v-m">
          <span class="v-m">王心亮</span>
        </li>
        <li class="col v-t t-r col-8">
          <p>
            <router-link to="/setting" class="iconfont icon-shezhi"></router-link>
          </p>
        </li>
      </ul>
    </blur>
    <div class="p-1 white sub-line">
      <ul class="row w d-line fs-1">
        <li class="col v-m t-c">
          <p class="c-4 fs-16">23000</p>
          <h2 class="fs-10 c-gray">累计积分收入（分）</h2>
        </li>
        <li class="col v-m t-c">
          <p class="c-4 fs-16">4000</p>
          <h2 class="fs-10 c-gray">账户积分余额（分）</h2>
        </li>
      </ul>
    </div>
    <div class="mt-5 white sub-line top-line mb-5">
      <div class="row w order">
        <a href="#" class="col v-m">
          <span class="iconfont"><x-img :src="'static/img/order1.png'"></x-img></span>
          <b>待报价</b>
        </a>
        <a href="#" class="col v-m">
          <span class="iconfont"><x-img :src="'static/img/order2.png'"></x-img></span>
          <b>待付款</b>
          <i class="num">2</i>
        </a>
        <a href="#" class="col v-m">
          <span class="iconfont"><x-img :src="'static/img/order3.png'"></x-img></span>
          <b>待出单</b>
        </a>
        <a href="#" class="col v-m">
          <span class="iconfont"><x-img :src="'static/img/order4.png'"></x-img></span>
          <b>已出单</b>
        </a>
        <router-link to="/order" class="col v-m">
          <span class="iconfont"><x-img :src="'static/img/order5.png'"></x-img></span>
          <b>我的订单</b>
        </router-link>
      </div>
    </div>
    <div>
      <router-link to="/wallet" class="row w block-link">
        <span class="col v-m iconfont icon-wallet c-yellow"></span>
        <span class="col v-m">我的钱包</span>
        <span class="col v-m iconfont icon-right t-r"></span>
      </router-link>
      <router-link to="/exchange" class="row w block-link">
        <span class="col v-m iconfont icon-exchange c-blue"></span>
        <span class="col v-m">兑换记录</span>
        <span class="col v-m iconfont icon-right t-r"></span>
      </router-link>
    </div>
  </div>
</template>
<script>
  import {Blur, XImg} from 'vux'
  export default {
    data () {
      return {
        face: 'static/img/face.jpg'
      }
    },
    components: {
      Blur,
      XImg
    }
  }
</script>
<style>
.vux-bg-blur{z-index:0 !important;}
</style>
