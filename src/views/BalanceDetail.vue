<template>
  <div class="page gray">
    <div class="banner">
      <div class="row w h">
        <div class="col v-m t-c">
          <h2>6874</h2>
          <p>现有积分（分）</p>
        </div>
      </div>
    </div>
    <scroller style="top:15vh;bottom:0;">
      <h2 class="title"><span class="iconfont icon-jilu"></span>收入记录</h2>
      <group gutter="0px" v-for="(item, index) in list" :key="index">
        <cell>
          <ul class="row w">
            <li class="col v-m col-4 t-c green">+{{item.score}}</li>
            <li class="col v-m col-20">
              <p class="time">{{item.time}}</p>
              <p class="text">{{item.resource}}</p>
            </li>
          </ul>
        </cell>
      </group>
    </scroller>
  </div>
</template>
<script>
  import {Group, Cell} from 'vux'
  import {mapGetters} from 'vuex'
  export default {
    head: {
      title: {
        inner: '积分余额'
      }
    },
    components: {
      Group,
      Cell
    },
    data () {
      return {
        height: ''
      }
    },
    computed: {
      ...mapGetters({
        list: 'getIncomeRecord'
      })
    }
  }
</script>
<style scoped>
.green{font-size:1.6rem;color:#49BC2E;}
.time{font-size:1rem;color:#9D9D9D;}
.text{font-size:1.1rem;line-height:1.8;color:#565656;}
.fix-banner{padding-top:15vh;}
.banner{height:15vh;background:#EB3D00;color:#fff;}
.banner p{font-size:1rem;color:rgba(255,255,255,0.8);}
.title:before{display:none;}
.title{padding:0.3rem 1rem;border-bottom:1px solid #ECECEC;margin-top:0;}
.title .iconfont{font-size:1.4rem;margin-right:0.5rem;vertical-align:middle;}
</style>
