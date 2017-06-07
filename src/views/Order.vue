<template>
  <div>
    <tab :line-width=2 active-color='#fc378c' v-model="index">
      <tab-item class="vux-center" :selected="demo === item" v-for="(item, index) in bar" @click="demo = item" :key="index">{{item}}</tab-item>
    </tab>
    <swiper v-model="index" height="100px" :show-dots="false">
      <swiper-item v-for="(item, index) in bar" :key="index">
        <div class="tab-swiper vux-center">{{item}} Container</div>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
  import {Tab, TabItem, Swiper, SwiperItem} from 'vux'
  export default {
    data () {
      return {
        bar: ['全部', '待报价', '待付款', '待出单', '已出单'],
        demo: '全部',
        index: 0
      }
    },
    components: {
      Tab,
      TabItem,
      Swiper,
      SwiperItem
    }
  }
</script>
