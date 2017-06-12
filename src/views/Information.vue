<template>
  <div class="page gray row h w">
    <div class="col v-m t-c">
      <div class="face">
        <img src="static/img/face.jpg" alt="">
      </div>
      <div class="form-panel">
        <div class="form w icon-left"><input type="text" placeholder="请输入手机号" v-model="form.username"><span class="iconfont icon-user"></span></div>
        <group gutter="10px">
          <datetime placeholder="请选择出生年月" confirm-text="确认" cancel-text="取消"></datetime>
          <span class="iconfont icon-shengri"></span>
        </group>
        <div class="w white sex">
          <span class="iconfont icon-xingbie"></span>
          <div class="row w">
            <div class="col v-m col-8">
              <div class="checkbox circle right">
                <input type="checkbox">
                <span class="iconfont icon-dot"></span>
                <label for="">保密</label>
              </div>
            </div>
            <div class="col v-m col-8">
              <div class="checkbox circle right">
                <input type="checkbox">
                <span class="iconfont icon-dot"></span>
                <label for="">男</label>
              </div>
            </div>
            <div class="col v-m col-8">
              <div class="checkbox circle right">
                <input type="checkbox">
                <span class="iconfont icon-dot"></span>
                <label for="">女</label>
              </div>
            </div>
          </div>
        </div>
        <x-button type="warn" style="margin-top:40px;">确认修改</x-button>  <!--show-loading-->
      </div>
    </div>
  </div>
</template>
<script>
  import {XInput, Group, Datetime, XButton, Cell} from 'vux'
  export default {
    head: {
      title: {
        inner: '我的资料'
      }
    },
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
      XButton,
      Cell
    }
  }
</script>
<style scoped>
.form-panel{margin-top:2rem;}
.form-panel .form{margin:0;margin-top:-1px;}
.face{display:inline-block;width:7rem;height:7rem;border-radius:50%;overflow:hidden;border:2px solid #D9D9D9;}
.face img{width:100%;height:100%;}
.form .iconfont,.weui-cells .iconfont{color:#959595;font-size:1.8rem;margin-right:1rem;}
.form .icon-right{right:0;left:auto;font-size:1.4rem;transform:translate(0, -50%);}
.icon-shengri{position:absolute;left:1rem;top:50%;transform:translate(0,-50%);}
.weui-cell{padding:1rem;font-size:1.2rem;border:1px solid #E6E6E6;}
.sex{position:relative;padding:0.8rem 1rem 0.8rem 3rem;border:1px solid #E6E6E6;margin-top:10px;font-size:1.2rem;}
.sex .checkbox label{font-size:1.2rem;color:#666;}
.sex .icon-xingbie{position:absolute;left:1rem;top:50%;transform:translate(0,-50%);font-size:1.8rem;color:#959595;}
</style>
