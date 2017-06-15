<template>
  <div class="page gray has-footer">{{InsuranceArea}}
    <div class="content">
      <div class="cover w">
        <img style="height:25vh" class="w" v-lazy="company.banner" alt=""/>
      </div>
      <selectCity title="投保城市" value="value"></selectCity>
      <group gutter="0">
        <x-input title="车牌号码" placeholder="请填写车牌号" placeholder-align="right" text-align="right"></x-input>
      </group>
      <group gutter="0">
        <x-input title="车主姓名" placeholder="请填写车主姓名" placeholder-align="right" text-align="right"></x-input>
      </group>
      <group gutter="0">
        <x-input title="手机号" placeholder="请填写真实手机号" placeholder-align="right" text-align="right"></x-input>
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
        city: [],
        company: {}
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
        const id = this.$route.params.id
        this.$router.push('/offer/photograph/' + id)
      }
    }
  }
</script>
