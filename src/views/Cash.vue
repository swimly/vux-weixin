<template>
  <div class="page gray has-btn">
    <div class="content h">
      <scroller>
        <group gutter="0px">
          <cell title="积分余额" value-align="left">
            <span class="c-red num v-m" style="padding-left:1rem;">{{balance}}</span>
            <span class="summary v-m">（可提现（￥{{balance/10}}元）</span>
          </cell>
        </group>
        <group gutter="10px">
          <x-input title="提现金额" placeholder="请输入提现金额" novalidate :show-clear="false" placeholder-align="right" text-align="right" v-model="form.score"></x-input>
          <x-input title="开户银行" placeholder="请填写详细的开户银行分行名称" novalidate :show-clear="false" placeholder-align="right" text-align="right" v-model="form.bankName"></x-input>
          <x-input title="银行卡号" placeholder="请填写收款银行卡号信息" novalidate :show-clear="false" placeholder-align="right" text-align="right" v-model="form.cardNo"></x-input>
          <x-input title="收款人" placeholder="收款账号开户人姓名" novalidate :show-clear="false" placeholder-align="right" text-align="right" v-model="form.cardUser"></x-input>
          <x-input title="支付密码" placeholder="请输入支付密码" novalidate :show-clear="false" placeholder-align="right" type="password" text-align="right" v-model="form.payPwd"></x-input>
        </group>
        <p class="text" v-if="!hasPayPwd">您的支付密码还未设置，<router-link to="" class="c-red">立即设置</router-link></p>
      </scroller>
    </div>
    <div class="btn-area w row" style="border:none;">
      <div class="col v-m">
        <x-button type="warn" :show-loading="loading" @click.native="handleSubmit">确认提现</x-button>
      </div>
    </div>
  </div>
</template>
<script>
  import {XInput, Group, Cell, XButton} from 'vux'
  import {precard, withdraw} from '../config'
  export default {
    head: {
      title: {
        inner: '提现'
      }
    },
    components: {
      XInput,
      Group,
      Cell,
      XButton
    },
    data () {
      return {
        loading: false,
        height: '',
        balance: 0,
        hasPayPwd: false,
        form: {
          userId: '',
          score: '',
          cardId: '',
          bankName: '',
          cardNo: '',
          cardUser: '',
          payPwd: ''
        }
      }
    },
    created () {
      this.balance = this.$localStorage.get('balance')
      this.hasPayPwd = JSON.parse(this.$localStorage.get('userInfo')).hadPayPwd
      this.form.userId = JSON.parse(this.$localStorage.get('userInfo')).userId
      this.$http({
        method: 'jsonp',
        url: precard,
        jsonp: 'callback',
        jsonpCallback: 'json',
        params: {
          userId: JSON.parse(this.$localStorage.get('userInfo')).userId
        },
        before: () => {
        }
      })
      .then(res => {
        if (res.body.data.bankCard) {
        }
      })
    },
    mounted () {
      this.height = document.querySelector('.content').clientHeight + 'px'
    },
    methods: {
      handleSubmit () {
        this.$http({
          method: 'jsonp',
          url: withdraw,
          jsonp: 'callback',
          jsonpCallback: 'json',
          params: this.form,
          before: () => {
            this.loading = true
          }
        })
        .then(res => {
          console.log(res)
          this.loading = false
          this.$vux.toast.show({
            type: 'text',
            width: '20em',
            position: 'bottom',
            text: res.body.msg,
            time: '1000'
          })
          if (res.body.status) {
            this.$router.push('/record')
          }
        })
      }
    }
  }
</script>
<style scoped>
.summary{font-size:1rem;}
.text{font-size:1.2rem;padding:0.5rem 1rem;color:#444;}
.text a{text-decoration:underline;}
.has-btn{padding-bottom:5rem;}
</style>
