<template>
  <div class="page gray">
    <Scroller :height="height" lock-x>
      <cell is-link class="score-list" v-for="(item, index) in list" :link="'/record/' + item.id">
        <li class="row w">
          <span class="col v-m col-11 t-l">
            <b class="price">-{{item.score}}元</b>
            <i class="score">积分余额：{{item.balance}}分</i>
          </span>
          <span class="col v-m col-13 t-r">
            <i class="score">{{item.time}}</i>
            <i :class="'status ' + item.status">{{item.text}}</i>
          </span>
        </li>
      </cell>
      <!--<ul class="score-list">
        <li class="row w" v-for="(item, index) in list">
          <span class="col v-m col-11">
            <b class="price">-{{item.score}}元</b>
            <i class="score">积分余额：{{item.balance}}分</i>
          </span>
          <span class="col v-m col-13 t-r">
            <i class="score">{{item.time}}</i>
            <i :class="'status ' + item.status">{{item.text}}</i>
          </span>
        </li>
      </ul>-->
    </Scroller>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {Scroller, Cell} from 'vux'
  export default {
    data () {
      return {
        height: '0px'
      }
    },
    mounted () {
      this.height = document.querySelector('.page').clientHeight + 'px'
      console.log(this.height)
    },
    components: {
      Scroller,
      Cell
    },
    computed: {
      ...mapGetters({
        list: 'getWalletScore'
      })
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
