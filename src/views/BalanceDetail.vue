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
      <h2 class="title"><span class="iconfont icon-jilu"></span>收支记录</h2>
      <group gutter="0px" v-for="(item, index) in list" :key="index">
        <cell>
          <ul class="row w">
            <li class="col v-m col-4 t-c " :class="item.type === 1 ? 'green' : ''" style="font-size:1.6rem;">{{item.stype ? '+' : '-'}}{{item.score}}</li>
            <li class="col v-m col-20">
              <p class="time">{{item.createTime}}</p>
              <p class="text">{{item.source.split(':')[0]}}</p>
            </li>
          </ul>
        </cell>
      </group>
    </scroller>
  </div>
</template>
<script>
  import {Group, Cell, dateFormat} from 'vux'
  import {detail} from '../config'
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
        balance: 0,
        list: [],
        form: {
          userId: '',
          type: 2,
          limit: 10,
          pageIndex: 0
        }
      }
    },
    mounted () {
      this.balance = this.$localStorage.get('balance')
      this.form.userId = JSON.parse(this.$localStorage.get('userInfo')).userId
      this.getList()
    },
    methods: {
      getList () {
        this.$http({
          method: 'jsonp',
          url: detail,
          jsonp: 'callback',
          jsonpCallback: 'json',
          params: this.form
        })
        .then(res => {
          console.log(res)
          this.list = res.body.data.scoreList
          for (const i in this.list) {
            this.list[i].createTime = dateFormat(this.list[i].createTime)
          }
        })
      }
    }
  }
</script>
<style scoped>
.green{color:#49BC2E;}
.time{font-size:1rem;color:#9D9D9D;}
.text{font-size:1.1rem;line-height:1.8;color:#565656;}
.fix-banner{padding-top:15vh;}
.banner{height:15vh;background:#EB3D00;color:#fff;}
.banner p{font-size:1rem;color:rgba(255,255,255,0.8);}
.title:before{display:none;}
.title{padding:0.3rem 1rem;border-bottom:1px solid #ECECEC;margin-top:0;}
.title .iconfont{font-size:1.4rem;margin-right:0.5rem;vertical-align:middle;}
</style>
