<template>
  <div class="page gray auto has-tab">
    <tab :line-width=2 active-color='#EB3D00' v-model="index">
      <tab-item class="vux-center" :selected="current === item.text" v-for="(item, index) in bar" @on-item-click="handleChange(item, index)" :key="index">{{item.text}}</tab-item>
    </tab>
    <swiper v-model="index" :show-dots="false" class="h" :height="height" @on-index-change="handleSwiper">
      <swiper-item v-for="(item, index) in bar" :key="index" class="h auto">
        <div class="tab-swiper vux-center h">
          <Scroller lock-x :height="height" bounce>
            <order-item :list="list"></order-item>
          </Scroller>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
  import {Tab, TabItem, Swiper, SwiperItem, Sticky, Scroller} from 'vux'
  import OrderItem from '@/components/OrderItem'
  import {mapGetters} from 'vuex'
  export default {
    head: {
      title: {
        inner: '我的订单'
      }
    },
    data () {
      return {
        pulldownConfig: {},
        pullupConfig: {
          content: '下拉刷新'
        },
        height: '0px',
        bar: [{
          text: '全部',
          key: 'all'
        }, {
          text: '待报价',
          key: 'price'
        }, {
          text: '待付款',
          key: 'pay'
        }, {
          text: '待出单',
          key: 'issue'
        }, {
          text: '已出单',
          key: 'issued'
        }],
        current: '全部',
        index: 0,
        getBarWidth: function (index) {
          console.log(index)
          return (index + 1) * 22 + 'px'
        }
      }
    },
    mounted () {
      console.log(document.querySelector('.vux-slider').clientHeight)
      this.height = document.querySelector('.vux-slider').clientHeight + 'px'
    },
    created () {
      console.log(this.$route.params.id)
      for (const i in this.bar) {
        if (this.bar[i].key === this.$route.params.id) {
          this.index = parseInt(i)
        }
      }
      // this.index = this.$route.params.id
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
      OrderItem,
      Scroller
    },
    methods: {
      handleChange (item, index) {
        this.index = index
        this.$router.push(this.bar[this.index].key)
      },
      handleSwiper (index) {
        console.log(this.bar[index])
        this.$router.push(this.bar[index].key)
      }
    }
  }
</script>
<style scoped>
.page.has-tab{padding-top:44px;}
.has-tab .vux-tab{margin-top:-44px;}
</style>
