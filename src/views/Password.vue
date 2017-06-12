<template>
  <div class="page row gray login">
    <div class="col v-t t-c">
      <div class="form-panel">
        <div class="tips">请填写注册用的手机号码，验证码将发送到您的手机</div>
        <div class="form w icon-left">
          <input type="text" placeholder="请输入您注册的手机号">
          <span class="iconfont icon-shouji"></span>
        </div>
        <div class="form w icon-left has-btn disabled">
          <input type="text" placeholder="验证码">
          <span class="iconfont icon-yzm"></span>
          <a href="#" class="btn">30s重新获取</a>
        </div>
        <div class="form w icon-left">
          <input type="text" placeholder="请输入新密码">
          <span class="iconfont icon-mima"></span>
        </div>
        <div class="form w icon-left">
          <input type="text" placeholder="请再次输入密码">
          <span class="iconfont icon-mima"></span>
        </div>
        <a href="#" class="btn btn-block btn-danger">确认修改</a>
      </div>
    </div>
  </div>
</template>
