<template>
  <div class="page gray auto has-tab">
    <tab :line-width=2 active-color='#EB3D00' v-model="index">
      <tab-item class="vux-center" :selected="demo === item" v-for="(item, index) in bar" @click="demo = item" :key="index">{{item}}</tab-item>
    </tab>
    <swiper v-model="index" :show-dots="false" class="h" height="500px">
      <swiper-item v-for="(item, index) in bar" :key="index" class="h">
        <div class="tab-swiper vux-center h">
          <order-item :list="list"></order-item>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
  import {Tab, TabItem, Swiper, SwiperItem, Sticky} from 'vux'
  import OrderItem from '@/components/OrderItem'
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        bar: ['全部', '待报价', '待付款', '待出单', '已出单'],
        demo: '全部',
        index: 0,
        getBarWidth: function (index) {
          console.log(index)
          return (index + 1) * 22 + 'px'
        }
      }
    },
    mounted () {
      document.querySelector('.vux-slider').clientHeight
    },
    computed: {
      ...mapGetters({
        list: 'getOrderList'
      })
    },
    components: {
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      Sticky,
      OrderItem
    }
  }
</script>
<style scoped>
.page.has-tab{padding-top:44px;}
.has-tab .vux-tab{margin-top:-44px;}
</style>
