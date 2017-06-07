<template>
  <div class="page gray has-footer">
    <div class="content">
      <div class="cover w">
        <x-img class="w" :src="offer.banner" alt=""></x-img>
      </div>
      <div class="form w line ion-right white sub-line">
        <x-address title="投保城市" v-model="city" raw-value :list="addressData"></x-address>
      </div>
      <div class="form w line"><input type="text" placeholder="请填写车牌号"><span class="text">车牌号码</span></div>
      <div class="form w line"><input type="text" placeholder="请填写车主姓名"><span class="text">车主姓名</span></div>
      <div class="form w line"><input type="text" placeholder="请填写真实手机号"><span class="text">手机号</span></div>
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
  import {Group, XAddress, ChinaAddressV3Data, Cell, XButton, XImg} from 'vux'
  export default {
    components: {
      Group,
      XAddress,
      Cell,
      XButton,
      XImg
    },
    computed: {
      ...mapGetters({
        offer: 'getOffer'
      })
    },
    data () {
      return {
        loading: false,
        addressData: ChinaAddressV3Data,
        city: []
      }
    },
    methods: {
      handleSubmit () {
        console.log(this.$route.path)
        this.$router.push(this.$route.path + '/photograph')
      }
    }
  }
</script>
