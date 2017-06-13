<template>
  <div class="page gray fix-blur">
    <blur :blur-amount=20 :url="selectBlur()" class="head-bar">
      <ul class="row w h" style="position:relative;z-index:1;">
        <li class="col v-b col-16">
          <img v-lazy="selectFace()" alt="" class="circle v-m">
          <span class="v-m" v-if="userInfo">{{userInfo.userName}}</span>
          <router-link to="/login" v-if="!userInfo">登录/注册</router-link>
        </li>
        <li class="col v-t t-r col-8">
          <p>
            <router-link to="/setting" class="iconfont icon-shezhi v-m"></router-link>
            <router-link to="/message" class="iconfont icon-xiaoxi v-m" style="margin-left:0.5rem;"></router-link>
          </p>
        </li>
      </ul>
    </blur>
    <div class="h auto view">
      <div class="p-1 white sub-line">
        <score-item class="default" :data="userInfo || {}"></score-item>
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
      <group gutter="10px" style="margin-bottom:10px;" v-if="userInfo">
        <x-button @click.native="logout = true" plain type='primary' style="border-left:none;border-right:none;border-radius:0;border-color:#ccc;color:#EB3D00;">注销/登录</x-button>
      </group>
    </div>
    <confirm v-model="logout" @on-confirm="handleLogout">
      <p class="confirm-text">确定要切换登录吗？</p>
    </confirm>
  </div>
</template>
<script>
  import {Blur, XImg, Group, Cell, XButton, Confirm, Scroller} from 'vux'
  import ScoreItem from '@/components/ScoreItem'
  import {mapGetters, mapMutations} from 'vuex'
  export default {
    head: {
      title: {
        inner: '个人中心'
      }
    },
    data () {
      return {
        logout: false
      }
    },
    computed: {
      ...mapGetters({
        userInfo: 'getUserInfo'
      })
    },
    components: {
      Blur,
      XImg,
      ScoreItem,
      Group,
      Cell,
      XButton,
      Confirm,
      Scroller
    },
    methods: {
      selectFace () {
        if (!this.userInfo) {
          return 'static/img/face.png'
        } else {
          if (this.userInfo.userSex) {
            return 'static/img/female.png'
          } else {
            return 'static/img/male.png'
          }
        }
      },
      selectBlur () {
        if (!this.userInfo) {
          return 'static/img/blur.jpg'
        } else {
          return 'static/img/blur1.jpg'
        }
      },
      handleLogout () {
        this.$vux.toast.show({
          type: 'text',
          width: '20em',
          text: '成功退出，即将跳到登录页！',
          time: '1000'
        })
        this.postLogout(this)
      },
      ...mapMutations({
        postLogout: 'postLogout'
      })
    }
  }
</script>
<style>
.vux-bg-blur{z-index:0 !important;}
.iconfont{font-size:1.6rem;padding:0 1rem;}
.weui-dialog__btn_primary{color:#EB3D00 !important;}
.fix-blur{padding-top:200px;}
.fix-blur .head-bar{margin-top:-200px;}
.head-bar a{font-size:1.2rem;color:#fff;}
</style>
