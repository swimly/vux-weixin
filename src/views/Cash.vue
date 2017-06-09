<template>
  <div class="page gray has-btn">
    <div class="content h">
      <scroller lock-x :height="height">
        <group gutter="0px">
          <cell title="积分余额" value-align="left">
            <span class="c-red num v-m" style="padding-left:1rem;">3012</span>
            <span class="summary v-m">（可提现（￥301.2元）</span>
          </cell>
        </group>
        <group gutter="10px">
          <x-input title="提现金额" placeholder="请输入提现金额" novalidate :show-clear="false" placeholder-align="right" text-align="right"></x-input>
          <x-input title="开户银行" placeholder="请填写详细的开户银行分行名称" novalidate :show-clear="false" placeholder-align="right" text-align="right"></x-input>
          <x-input title="银行卡号" placeholder="请填写收款银行卡号信息" novalidate :show-clear="false" placeholder-align="right" text-align="right"></x-input>
          <x-input title="收款人" placeholder="收款账号开户人姓名" novalidate :show-clear="false" placeholder-align="right" text-align="right"></x-input>
          <x-input title="支付密码" placeholder="请输入支付密码" novalidate :show-clear="false" placeholder-align="right" type="password" text-align="right"></x-input>
        </group>
        <p class="text">您的支付密码还未设置，<router-link to="" class="c-red">立即设置</router-link></p>
      </scroller>
    </div>
    <div class="btn-area w row" style="border:none;">
      <div class="col v-m">
        <x-button type="warn">确认提现</x-button>
      </div>
    </div>
  </div>
</template>
<script>
  import {XInput, Group, Cell, Scroller, XButton} from 'vux'
  export default {
    components: {
      XInput,
      Group,
      Cell,
      Scroller,
      XButton
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
.summary{font-size:1rem;}
.text{font-size:1.2rem;padding:0.5rem 1rem;color:#444;}
.text a{text-decoration:underline;}
.has-btn{padding-bottom:5rem;}
</style>
