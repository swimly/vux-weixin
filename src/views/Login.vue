<template>
  <div class="page row gray login">
    <div class="col v-m t-c">
      <img src="static/img/logo.png" alt="" class="logo">
      <div class="form-panel">
        <group gutter="10px">
          <x-input placeholder="请输入手机号码" is-type="china-mobile" required></x-input>
        </group>
        <group gutter="10px">
          <x-input placeholder="请输入密码" required></x-input>
        </group>
        <group gutter="10px">
          <x-button type="warn" @click.native="handleSubmit" :show-loading="loading">登录</x-button>  <!--show-loading-->
        </group>
      </div>
      <ul class="row w devision">
        <li class="col v-m item t-r">
          <router-link to="/register" class="link c-n">立即注册</router-link>
        </li>
        <li class="col v-m item t-l">
          <router-link to="password" class="link c-n">忘记密码？</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {XButton, Group, Cell, XInput} from 'vux'
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
      XButton,
      Group,
      Cell,
      XInput
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
