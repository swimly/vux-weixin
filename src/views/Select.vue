<template>
  <div class="page gray has-btn">
    <div class="h auto content">
      <group title="强制保险" class="select">
        <Cell v-for="(item, index) in forcedConfig" :key="index">
          <div class="checkbox full" slot="icon">
            <input type="radio" v-model="force.select" name="force" :id="'force' + index" value="1">
            <span class="iconfont icon-right1"></span>
            <label :for="'force' + index">{{item.text}}</label>
          </div>
        </Cell>
      </group>
      <group title="基本险" class="select">
        <Cell v-for="(item, index) in basicConfig" :key="index">
          <div class="checkbox circle left" slot="icon">
            <input type="checkbox" v-model="basic[item.name].select" name="basic" :id="'basic' + index">
            <span class="iconfont icon-dot"></span>
            <label :for="'basic' + index">{{item.text}}</label>
          </div>
          <div class="form select" slot="title" v-if="item.value">
            <select v-model="basic[item.name].value">
              <option v-for="(item, index) in item.value" v-bind:value="item">{{item}}</option>
            </select>
          </div>
          <div class="checkbox circle right" slot="value" v-if="item.regardless" v-show="basic[item.name].select">
            <input type="checkbox" checked v-model="basic[item.name].regardless" name="basicReg" :id="'basicReg' + index">
            <span class="iconfont icon-dot"></span>
            <label :for="'basicReg' + index">不计免赔</label>
          </div>
        </Cell>
      </group>
      <group title="附加险" class="select">
        <Cell v-for="(item, index) in additionalConfig" :key="index" :class="item.value ? '' : 'long'">
          <div class="checkbox circle left" slot="icon">
            <input type="checkbox" v-model="additional[item.name].select" name="additional" :id="'additional' + index">
            <span class="iconfont icon-dot"></span>
            <label :for="'additional' + index">{{item.text}}</label>
          </div>
          <div class="form select" slot="title" v-if="item.value">
            <select v-model="additional[item.name].value">
              <option v-for="(item, index) in item.value" v-bind:value="item">{{item}}</option>
            </select>
          </div>
          <div class="checkbox circle right" slot="value" v-if="item.regardless" v-show="additional[item.name].select">
            <input type="checkbox" checked v-model="additional[item.name].regardless" name="additionalReg" :id="'additionalReg' + index">
            <span class="iconfont icon-dot"></span>
            <label :for="'additionalReg' + index">不计免赔</label>
          </div>
        </Cell>
      </group>
    </div>
    <div class="btn-area row w">
      <div class="col v-m">
        <x-button type="warn" @click.native="handleSubmit">提交报价</x-button>
      </div>
    </div>
  </div>
</template>
<script>
  import {Group, Cell, XButton} from 'vux'
  import {mapGetters} from 'vuex'
  import SelectItem from '@/components/SelectItem'
  import {basic, additional, forced} from '../config'
  export default {
    data () {
      return {
        forcedConfig: forced,
        basicConfig: basic,
        additionalConfig: additional,
        forcedInsurance: '', // 强制保险
        lossInsurance: 0,
        force: {
          select: 1
        },
        basic: {
          lossInsurance: {
            select: 0, // 车辆损失险
            regardless: 1 // 不计免赔
          },
          thirdParty: {
            select: 0, // 第三者责任险
            value: '50万',
            regardless: 1 // 不计免赔
          },
          driverSeat: {
            select: 0, // 司机座位险
            value: '6万/座',
            regardless: 1 // 不计免赔
          },
          passengerSeat: {
            select: 0, // 乘客座位险
            value: '1万/座',
            regardless: 1 // 不计免赔
          },
          robbery: {
            select: 0 // 盗抢险
          }
        },
        additional: {
          glassCrushing: {
            select: 0, // 玻璃破碎险
            value: '国产',
            regardless: 1
          },
          autoignition: {
            select: 0, // 自燃损失险
            regardless: 1
          },
          wading: {
            select: 0, // 涉水险
            value: '1万/座',
            regardless: 1
          },
          escape: {
            select: 0, // 三者逃逸险
            regardless: 1
          },
          appointedSpecialist: {
            select: 0, // 指定专修厂特约险
            regardless: 1
          }
        }
      }
    },
    components: {
      Group,
      Cell,
      XButton,
      SelectItem
    },
    created () {
      console.log(this.$route.params.id)
    },
    computed: {
      ...mapGetters({
        order: 'getOrder'
      })
    },
    methods: {
      handleSubmit () {
        this.$router.push('/offer/success/' + this.$route.params.id)
      }
    }
  }
</script>
<style>
.select .weui-cell__hd{width:45%;}
.select .long .weui-cell__hd{width:70%;}
</style>
