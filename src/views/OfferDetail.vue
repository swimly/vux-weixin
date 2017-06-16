<template>
  <div class="page gray has-footer">
    <div class="content">
      <div class="cover w">
        <img style="height:25vh" class="w" v-lazy="company.banner" alt=""/>
      </div>
      <selectCity title="投保城市" value="value"></selectCity>
      <group gutter="0">
        <x-input title="车牌号码" placeholder="请填写车牌号" placeholder-align="right" text-align="right" v-model="orderUser.license" required ref="license"></x-input>
      </group>
      <group gutter="0">
        <x-input title="车主姓名" placeholder="请填写车主姓名" placeholder-align="right" text-align="right" v-model="orderUser.name" required ref="name"></x-input>
      </group>
      <group gutter="0">
        <x-input title="手机号" type="tel" is-type="china-mobile" placeholder="请填写真实手机号" placeholder-align="right" text-align="right" v-model="orderUser.tel" required ref="tel"></x-input>
        {{orderUser}}
      </group>
    </div>
    <div class="footer row w">
      <div class="col v-m t-c">
        <x-button type="warn" @click.native="handleSubmit" :show-loading="loading">下一步</x-button>
        <div class="checkbox mt-10">
          <input type="checkbox" checked name="n" id="n1">
          <span class="iconfont icon-right1"></span>
          <label for="n1">我已阅读并同意<a href="#">《条款与免责申明》</a></label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {Group, XAddress, Cell, XButton, XImg, XInput} from 'vux'
  import selectCity from '@/components/SelectCity'
  export default {
    data () {
      return {
        loading: false,
        orderUser: {
          license: '',
          name: '',
          tel: ''
        }
      }
    },
    components: {
      Group,
      XAddress,
      Cell,
      XButton,
      XImg,
      selectCity,
      XInput
    },
    created () {
      // 获取保险公司信息
      this.company = JSON.parse(this.$localStorage.get('orderCompany'))
      console.log(this.company)
    },
    computed: {
      ...mapGetters({
        offer: 'getOffer',
        InsuranceArea: 'getInsuranceArea'
      })
    },
    methods: {
      handleSubmit () {
        this.loading = true
        if (!this.InsuranceArea) {
          this.$vux.toast.show({
            type: 'text',
            width: '10em',
            position: 'bottom',
            text: '请填写所在地区！',
            time: '1000'
          })
        } else if (!this.$refs.license.valid || !this.$refs.name.valid || !this.$refs.tel.valid) {
          this.$vux.toast.show({
            type: 'text',
            width: '10em',
            position: 'bottom',
            text: '请如实填写以上信息！',
            time: '1000'
          })
        } else {
          // 存储用户订单信息到localstorage
          this.$localStorage.set('orderUser', JSON.stringify({
            insuranceArea: this.InsuranceArea,
            ownerName: this.orderUser.name,
            ownerLicense: this.orderUser.license,
            ownerTel: this.orderUser.tel
          }))
          this.loading = false
          this.$router.push('/offer/photograph/' + this.$route.params.id)
        }
      }
    }
  }
</script>
