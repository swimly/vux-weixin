<template>
  <div class="page gray">
    <scroller :height="height" lock-x>
      <div class="row w">
        <div class="col v-m t-c info">
          <h2>-199.00</h2>
          <p>提现（元）</p>
        </div>
      </div>
      <group gutter="0px">
        <cell title="开户银行" value="中国建设银行武汉支行"></cell>
        <cell title="收款卡号" value="20171547854125"></cell>
        <cell title="积分余额" value="15421"></cell>
        <cell title="创建时间" value="2017-05-15 18：54"></cell>
        <cell title="提现状态" value="审核中"></cell>
      </group>
    </scroller>
  </div>
</template>
<script>
  import {Scroller, Group, Cell} from 'vux'
  export default {
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
    mounted () {
      this.height = document.querySelector('.page').clientHeight + 'px'
    }
  }
</script>
<style scoped>
.info{padding:2rem;}
.info h2{font-size:1.8rem;color:#434343;}
.info p{font-size:1rem;color:#999;}
</style>
