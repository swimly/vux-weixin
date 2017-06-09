<template>
  <div class="page gray row h w">
    <div class="col v-m t-c">
      <div class="face">
        <img src="static/img/face.jpg" alt="">
      </div>
      <div class="form-panel">
        <div class="form w icon-left"><input type="text" placeholder="请输入手机号" v-model="form.username"><span class="iconfont icon-user"></span></div>
        <div class="form w icon-left">
          <datetime></datetime>
          <span class="iconfont icon-shengri"></span>
          <span class="iconfont icon-right"></span>
        </div>
        <x-button type="warn">登录</x-button>  <!--show-loading-->
      </div>
    </div>
  </div>
</template>
<script>
  import {XInput, Group, Datetime, XButton} from 'vux'
  export default {
    data () {
      return {
        form: {
          username: '刘勇'
        }
      }
    },
    components: {
      XInput,
      Group,
      Datetime,
      XButton
    }
  }
</script>
<style scoped>
.form-panel .form{margin:0;margin-top:-1px;}
.face{display:inline-block;width:7rem;height:7rem;border-radius:50%;overflow:hidden;border:2px solid #D9D9D9;}
.face img{width:100%;height:100%;}
.iconfont{color:#959595;font-size:1.8rem;margin-right:1rem;}
.form .icon-right{right:0;left:auto;font-size:1.4rem;transform:translate(0, -50%);}
</style>
