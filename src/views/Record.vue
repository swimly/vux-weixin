<template>
  <div class="page gray">
    <group gutter="0">
      <cell is-link class="score-list" v-for="(item, index) in list" :key="index" :link="'/record/' + item.id" @click.native="handleSave(item)">
        <li class="row w">
          <span class="col v-m col-11 t-l">
            <b class="price">-{{item.money}}元</b>
            <i class="score">积分余额：{{item.balance}}分</i>
          </span>
          <span class="col v-m col-13 t-r">
            <i class="score">{{item.createTime}}</i>
            <i :class="'status ' + {'success': item.status === 1, 'error': item.status === 2}">{{item.note}}</i>
          </span>
        </li>
      </cell>
    </group>
  </div>
</template>
<script>
  import {Cell, dateFormat, Group} from 'vux'
  import {withdrawlog} from '../config'
  export default {
    head: {
      title: {
        inner: '提现记录'
      }
    },
    data () {
      return {
        height: '0px',
        list: [],
        form: {
          userId: '',
          limit: 10,
          pageIndex: 0
        }
      }
    },
    components: {
      Cell,
      dateFormat,
      Group
    },
    created () {
      this.form.userId = JSON.parse(this.$localStorage.get('userInfo')).userId
      this.getList()
    },
    methods: {
      getList () {
        this.$http({
          method: 'jsonp',
          url: withdrawlog,
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
      },
      handleSave (item) {
        console.log(item)
        this.$localStorage.set('record', JSON.stringify(item))
      }
    }
  }
</script>
<style scoped>
  .score-list{background:#fff;}
  .weui-cell{padding:0.8rem 1rem;}
  .score-list i{display:block;font-style:normal;}
  .score-list .price{font-size:1.4rem;color:#3E3E3E;}
  .score-list .score{font-size:1rem;color:#A0A0A0;}
  .score-list .status{font-size:1rem;color:#333;}
  .status.success{color:#4FBE36;}
  .status.error{color:#EC4308;}
</style>
