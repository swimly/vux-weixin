<template>
  <div class="page row gray login">
    <div class="col v-m t-c">
      <img src="static/img/logo.png" alt="" class="logo">
      <div class="form-panel">
        <div class="form w icon-left"><input type="text" placeholder="请输入手机号" v-model="form.phone" @blur="handleCheckPhone"><span class="iconfont icon-shouji"></span></div>
        <div class="form w icon-left"><input type="text" placeholder="请输入密码" v-model="form.password"><span class="iconfont icon-mima"></span></div>
        <x-button type="warn" @click.native="handleSubmit" :show-loading="loading">登录</x-button>  <!--show-loading-->
      </div>
      <ul class="row w devision">
        <li class="col v-m item t-r">
          <button class="link c-n">立即注册</button>
        </li>
        <li class="col v-m item t-l">
          <button class="link c-n">忘记密码？{{pageLoading}}</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {XButton} from 'vux'
  export default {
    data () {
      return {
        loading: false,
        form: {
          phone: '',
          password: ''
        }
      }
    },
    created () {
      console.log(this.$wechat)
    },
    computed: {
      ...mapGetters({
        pageLoading: 'pageLoading'
      })
    },
    components: {
      XButton
    },
    methods: {
      handleSubmit () {
        this.loading = true
        this.$router.push('/')
      },
      handleCheckPhone () {
        console.log(this.form.phone)
      }
    }
  }
</script>
