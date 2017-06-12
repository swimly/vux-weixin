<template>
  <div class="page gray row login">
    <div class="col v-t t-c">
      <div class="form-panel">
        <div class="form w icon-left">
          <input type="text" placeholder="请输入原密码">
          <span class="iconfont icon-mima"></span>
        </div>
        <div class="form w icon-left">
          <input type="text" placeholder="请输入新密码">
          <span class="iconfont icon-mima"></span>
        </div>
        <div class="form w icon-left">
          <input type="text" placeholder="请再次输入新密码">
          <span class="iconfont icon-mima"></span>
        </div>
        <a href="#" class="btn btn-block btn-danger">确认修改</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    head: {
      title: {
        inner: '修改登录密码'
      }
    }
  }
</script>
<style scoped>
.form.has-btn .btn{padding:0.7rem 0;}
</style>
