<template>
  <div class='page gray fix-banner has-double-btn'>
    <div class="banner">
      <ul class="row w">
        <li class="col v-m">
          我的钱包
        </li>
        <li class="col v-m t-r">
          <router-link to='/record'>提现记录</router-link>
        </li>
      </ul>
      <score-item class="light"></score-item>
    </div>
    <div class="h auto">
      <ul class='row w white'>
        <li class='col v-m col-10 t-c'>
          <div class='echarts'>
            <IEcharts :option='bar' :loading='loading' @ready='onReady'></IEcharts>
          </div>
        </li>
        <li class='col v-m col-14'>
          <p class="legend yellow">已提现的积分：19000</p>
          <p class="legend blue">可提现的积分：4000</p>
        </li>
      </ul>
    </div>
    <div class="btn-area row w" style="border:none;">
      <div class="col v-m">
        <x-button type="warn">立即提现</x-button>
        <x-button plain type="primary" class="custom-primary-red" style="margin-top:10px;">积分转增</x-button>
      </div>
    </div>
  </div>
</template>
<script>
  import IEcharts from 'vue-echarts-v3/src/full.vue'
  import ScoreItem from '@/components/ScoreItem'
  import {XButton} from 'vux'
  export default {
    components: {
      IEcharts,
      ScoreItem,
      XButton
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
.fix-banner{padding-top:24vh;}
.has-double-btn{padding-bottom:20vh;}
.has-double-btn .btn-area{height:20vh;}
.fix-banner .banner{background-color:#EB3D00;height:24vh;margin-top:-24vh;}
.banner .col{padding:1rem;font-size:1.2rem;color:#fff;}
.banner a{color:#fff;}
.legend{font-size:1.2rem;line-height:2;color:#444;position:relative;}
.legend:before{content:"";display:inline-block;width:0.8rem;height:0.8rem;border-radius:50%;margin-right:0.5rem;}
.legend.yellow:before{background-color:#FDC800;}
.legend.blue:before{background-color:#43B5E4;}
</style>
