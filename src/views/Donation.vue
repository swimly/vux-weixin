<template>
  <div class="page gray fix-banner has-btn">
    <div class="banner">
      <div class="row w h">
        <div class="col v-m t-c">
          <h2>6874</h2>
          <p>现有积分（分）</p>
        </div>
      </div>
    </div>
    <div class="h auto content">
      <scroller :height="height" lock-x>
        <group gutter="0px">
          <x-input title="获赠用户" placeholder="请输入获赠人的手机号码" novalidate :show-clear="false" placeholder-align="right" text-align="right"></x-input>
          <x-input title="赠与积分" placeholder="请输入要赠与的积分数额" novalidate :show-clear="false" placeholder-align="right" text-align="right"></x-input>
          <x-input title="支付密码" placeholder="请输入支付密码" novalidate :show-clear="false" placeholder-align="right" text-align="right"></x-input>
        </group>
        <p class="text">您的支付密码还未设置，<router-link to="" class="c-red">立即设置</router-link></p>
      </scroller>
    </div>
    <div class="btn-area row w" style="border:none;">
      <div class="col v-m">
        <x-button type="warn">确认转赠</x-button>
      </div>
    </div>
  </div>
</template>
<script>
  import {Group, Cell, XInput, XButton, Scroller} from 'vux'
  export default {
    components: {
      Group,
      Cell,
      XInput,
      XButton,
      Scroller
    },
    data () {
      return {
        height: ''
      }
    },
    mounted () {
      this.height = document.querySelector('.content').clientHeight + 'px'
    }
  }
</script>
<style scoped>
.fix-banner{padding-top:18vh;}
.banner{height:18vh;margin-top:-18vh;}
.banner p{font-size:1rem;color:rgba(255,255,255,0.8);}
.text{font-size:1.2rem;padding:0.5rem 1rem;color:#444;}
.text a{text-decoration:underline;}
.has-btn{padding-bottom:5rem;}
</style>
