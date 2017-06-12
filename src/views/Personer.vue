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
            <router-link to="/setting" class="iconfont icon-shezhi v-m"></router-link>
            <router-link to="/message" class="iconfont icon-xiaoxi v-m" style="margin-left:0.5rem;"></router-link>
          </p>
        </li>
      </ul>
    </blur>
    <div class="p-1 white sub-line">
      <score-item class="default"></score-item>
    </div>
    <div class="mt-5 white sub-line top-line mb-5">
      <div class="row w order">
        <router-link to="/order/price" class="col v-m">
          <span class="iconfont"><x-img :src="'static/img/order1.png'"></x-img></span>
          <b>待报价</b>
        </router-link>
        <router-link to="/order/pay" class="col v-m">
          <span class="iconfont"><x-img :src="'static/img/order2.png'"></x-img></span>
          <b>待付款</b>
          <i class="num">2</i>
        </router-link>
        <router-link to="/order/issue" class="col v-m">
          <span class="iconfont"><x-img :src="'static/img/order3.png'"></x-img></span>
          <b>待出单</b>
        </router-link>
        <router-link to="/order/issued" class="col v-m">
          <span class="iconfont"><x-img :src="'static/img/order4.png'"></x-img></span>
          <b>已出单</b>
        </router-link>
        <router-link to="/order/all" class="col v-m">
          <span class="iconfont"><x-img :src="'static/img/order5.png'"></x-img></span>
          <b>我的订单</b>
        </router-link>
      </div>
    </div>
    <group gutter="0px">
      <cell is-link link="/wallet">
        <span class="iconfont icon-wallet c-yellow" slot="icon"></span>
        <span slot="title">我的钱包</span>
      </cell>
      <cell is-link link="/exchange">
        <span class="iconfont icon-exchange c-blue" slot="icon"></span>
        <span slot="title">兑换记录</span>
      </cell>
    </group>
    <group gutter="10px">
      <x-button @click.native="logout = true" plain type='primary' style="border-left:none;border-right:none;border-radius:0;border-color:#ccc;color:#EB3D00;">注销/登录</x-button>
    </group>
    <confirm v-model="logout" @on-confirm="handleLogout">
      <p class="confirm-text">确定要切换登录吗？</p>
    </confirm>
  </div>
</template>
<script>
  import {Blur, XImg, Group, Cell, XButton, Confirm} from 'vux'
  import ScoreItem from '@/components/ScoreItem'
  export default {
    head: {
      title: {
        inner: '个人中心'
      }
    },
    data () {
      return {
        face: 'static/img/face.jpg',
        logout: false
      }
    },
    components: {
      Blur,
      XImg,
      ScoreItem,
      Group,
      Cell,
      XButton,
      Confirm
    },
    methods: {
      handleLogout () {
        this.$vux.toast.show({
          type: 'text',
          width: '20em',
          text: '成功退出，即将跳到登录页！',
          time: '1000'
        })
        setTimeout(() => {
          this.$router.push('/login')
        }, 1000)
      }
    }
  }
</script>
<style>
.vux-bg-blur{z-index:0 !important;}
.iconfont{font-size:1.6rem;padding:0 1rem;}
.weui-dialog__btn_primary{color:#EB3D00 !important;}
</style>
