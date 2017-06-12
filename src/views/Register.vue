<template>
  <div class="page row gray login">
    <div class="col v-t t-c form-panel">
      <group gutter="0px">
        <x-input placeholder="请输入真实手机号">
          <span class="iconfont icon-shouji" slot="label"></span>
        </x-input>
      </group>
      <group gutter="10px">
        <x-input placeholder="请输入您的姓名">
          <span class="iconfont icon-user" slot="label"></span>
        </x-input>
      </group>
      <group gutter="10px">
        <x-input placeholder="请输入登录密码">
          <span class="iconfont icon-mima" slot="label"></span>
        </x-input>
      </group>
      <group gutter="10px">
        <x-input placeholder="请再次输入密码">
          <span class="iconfont icon-mima" slot="label"></span>
        </x-input>
      </group>
      <group gutter="10px">
        <x-input placeholder="请输入验证码">
          <span class="iconfont icon-yzm" slot="label"></span>
          <x-button slot="right" type="warn">发送验证码</x-button>
        </x-input>
      </group>
      <group gutter="10px">
        <x-button type="warn">注册</x-button>
      </group>
    </div>
  </div>
</template>
<script>
  import {Group, Cell, XInput, XButton} from 'vux'
  export default {
    components: {
      Group,
      Cell,
      XInput,
      XButton
    }
  }
</script>
<style>
.form-panel .weui-cell{padding:0.4rem 1rem !important;}
.form-panel .weui-cells{border-left:1px solid #eee;border-right:1px solid #eee;}
.form-panel .iconfont{color:#959595;font-size:1.8rem;padding-right:0.5rem;}
.form-panel .weui-cell__ft{position:absolute;right:0;top:50%;transform:translate(0,-50%);}
</style>
