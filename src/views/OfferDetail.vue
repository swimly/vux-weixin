<template>
  <div class="page gray has-footer">
    <div class="content">
      <div class="cover w">
        <img style="height:25vh" class="w" v-lazy="{src: company.banner, error: 'static/img/err1.png', loading: 'static/img/loading3.gif'}" alt=""/>
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
        company: {},
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
      if (this.$localStorage.get('logined') !== 'true') {
        this.$vux.toast.show({
          type: 'text',
          width: '20em',
          position: 'bottom',
          text: '您尚未登录，请前往登录！',
          time: '1000'
        })
        this.$router.push('/login')
      }
    },
    computed: {
      ...mapGetters({
        offer: 'getOffer',
        InsuranceArea: 'getInsuranceArea',
        checkAuthor: 'checkAuthor'
      })
    },
    methods: {
      handleSubmit () {
        this.loading = true
        if (!this.InsuranceArea) {
          this.$vux.toast.show({
            type: 'text',
            width: '15em',
            position: 'bottom',
            text: '请填写所在地区！',
            time: '1000'
          })
          this.loading = false
        } else if (!this.$refs.license.valid || !this.$refs.name.valid || !this.$refs.tel.valid) {
          this.$vux.toast.show({
            type: 'text',
            width: '15em',
            position: 'bottom',
            text: '请如实填写以上信息！',
            time: '1000'
          })
          this.loading = false
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
