<template>
  <div class='page gray fix-banner'>
    <div class="banner">
      <ul class="row w">
        <li class="col v-m">
          我的钱包
        </li>
        <li class="col v-m t-r">
          <router-link to=''>提现记录</router-link>
        </li>
      </ul>
      <ul class="row w">
        <li class="col v-m col-12 t-c">
          <h2 class="num">23000</h2>
          <p>累计积分收入（分）</p>
        </li>
        <li class="col v-m col-12 t-c">
          <h2 class="num">23000</h2>
          <p>积分余额（分）</p>
        </li>
      </ul>
    </div>
    <ul class='row w white'>
      <li class='col v-m'>
        <div class='echarts'>
          <IEcharts :option='bar' :loading='loading' @ready='onReady'></IEcharts>
        </div>
      </li>
      <li class='col v-m'></li>
    </ul>
  </div>
</template>
<script>
  import IEcharts from 'vue-echarts-v3/src/full.vue'
  export default {
    components: {
      IEcharts
    },
    data () {
      return {
        loading: true,
        bar: {
          tooltip: {},
          series: [{
            name: '访问来源',
            type: 'pie',
            radius: '70%',
            center: ['50%', '50%'],
            data: [
              {value: 335, name: '已提现的积分'},
              {value: 210, name: '可提现的积分'}
            ],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
                borderWidth: 2,
                borderColor: 'rgba(255, 255, 255, 0.6)'
              }
            }
          }],
          color: ['#FDC800', '#43B5E4']
        }
      }
    },
    methods: {
      onReady (instance) {
        this.loading = !this.loading
      }
    }
  }
</script>
<style>
.echarts{width:100%;height:20vh;}
.fix-banner .banner{background-color:#EB3D00;}
.fix-banner .banner .col{padding:1rem;font-size:1.2rem;color:#fff;}
.fix-banner .banner a{color:#fff;}
.fix-banner .banner .num{font-size:1.6rem;}
</style>
