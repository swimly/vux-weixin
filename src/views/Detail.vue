<template>
  <div class="page gray fix-banner">
    <div class="banner">
      <div class="row w h">
        <div class="col v-m t-c">
          <h2>6874</h2>
          <p>现有积分（分）</p>
        </div>
      </div>
    </div>
    <div class="h content">
      <scroller lock-x :height="height" bounce>
        <h2 class="title"><span class="iconfont icon-jilu"></span>收入记录</h2>
        <group gutter="0px">
          <cell v-for="(item, index) in list" :key="index">
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
  </div>
</template>
<script>
  import {Scroller, Group, Cell} from 'vux'
  import {mapGetters} from 'vuex'
  export default {
    head: {
      title: {
        inner: '累计积分'
      }
    },
    components: {
      Scroller,
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
    },
    mounted () {
      this.height = document.querySelector('.content').clientHeight + 'px'
      console.log(this.height)
    }
  }
</script>
<style scoped>
.green{font-size:1.6rem;color:#49BC2E;}
.time{font-size:1rem;color:#9D9D9D;}
.text{font-size:1.1rem;line-height:1.8;color:#565656;}
.fix-banner{padding-top:15vh;}
.banner{height:15vh;margin-top:-15vh;background:#EB3D00;color:#fff;}
.banner p{font-size:1rem;color:rgba(255,255,255,0.8);}
.title:before{display:none;}
.title{padding:0.3rem 1rem;border-bottom:1px solid #ECECEC;margin-top:0;}
.title .iconfont{font-size:1.4rem;margin-right:0.5rem;vertical-align:middle;}
</style>
