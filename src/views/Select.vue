<template>
  <div class="page gray has-btn">
    <div class="h auto content">
      <group title="强制保险" class="select">
        <select-item :data="{text: '交通强险+车船税'}"></select-item>
      </group>
      <group title="基本险" class="select">
        <select-item v-for="(item, index) in basicConfig" :data="item" :key="index"></select-item>
        {{lossInsurance}}
      </group>
      <group title="附加险" class="select">
        <select-item v-for="(item, index) in additionalConfig" :data="item" :key="index"></select-item>
      </group>
    </div>
    <div class="btn-area row w">
      <div class="col v-m">
        <x-button type="warn">提交报价</x-button>
      </div>
    </div>
  </div>
</template>
<script>
  import {Group, Cell, XButton} from 'vux'
  import {mapGetters} from 'vuex'
  import SelectItem from '@/components/SelectItem'
  import {basic, additional} from '../config'
  export default {
    data () {
      return {
        basicConfig: basic,
        additionalConfig: additional,
        forcedInsurance: '', // 强制保险
        lossInsurance: 'jj',
        basic: [
          {
            lossInsurance: 1, // 车辆损失险
            regardless: 0 // 不计免赔
          }, {
            thirdParty: 1, // 第三者责任险
            value: '50万',
            regardless: 0 // 不计免赔
          }, {
            driverSeat: 1, // 司机座位险
            value: '6万/座',
            regardless: 0 // 不计免赔
          }, {
            passengerSeat: 1, // 乘客座位险
            value: '1万/座',
            regardless: 0 // 不计免赔
          }, {
            robbery: 0 // 盗抢险
          }
        ],
        additional: [
          {
            glassCrushing: 1, // 玻璃破碎险
            value: '国产'
          }, {
            autoignition: 1 // 自燃损失险
          }, {
            scratch: 1, // 车身划痕险
            value: '2000'
          }, {
            wading: 1, // 涉水险
            value: '1万/座'
          }, {
            escape: 1 // 三者逃逸险
          }, {
            appointedSpecialist: 1 // 指定专修厂特约险
          }
        ]
      }
    },
    components: {
      Group,
      Cell,
      XButton,
      SelectItem
    },
    created () {
      console.log(this.order)
    },
    computed: {
      ...mapGetters({
        order: 'getOrder'
      })
    }
  }
</script>
<style>
.select .weui-cell__hd{width:45%;}
</style>
