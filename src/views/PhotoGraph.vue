<template>
  <div class="page has-btn">
    <div class="content">
      <h3 class="module-title">车主信息</h3>
      <h4 class="sub-module-title sub-line">身份证</h4>
      <div class="plr-10">
        <h4 class="sub-module-title sub-line">身份正面照<span class="info">（请与证件类型保持一致，照片以身份证为例）</span></h4>
        <div class="tips icon">
          <ul class="row w">
            <li class="col v-m iconfont icon-zhuyi"></li>
            <li class="col v-m">
              <p>1.请用手机横向拍摄以保证图片正常显示</p>
              <p>2.请保证姓名、证件号码清晰可见</p>
            </li>
          </ul>
        </div>
        <div class="take-photo">
          <img src="static/img/sfz.png" alt="">
          <span class="iconfont icon-add"></span>
        </div>
      </div>
      <h3 class="module-title">车辆信息</h3>
      <h4 class="sub-module-title sub-line">行驶证</h4>
      <div class="plr-10">
        <h4 class="sub-module-title sub-line">行驶证件正面照</span></h4>
        <div class="tips icon">
          <ul class="row w">
            <li class="col v-m iconfont icon-zhuyi"></li>
            <li class="col v-m">
              <p>1.请用手机横向拍摄以保证图片正常显示；</p>
              <p>2.请保证车牌号码、品牌型号、车辆识别代号、发动机号、注册日期清晰可见</p>
            </li>
          </ul>
        </div>
        <div class="take-photo">
          <img src="static/img/jsz.png" alt="">
          <span class="iconfont icon-add"></span>
        </div>
        <h4 class="sub-module-title sub-line">行驶证副本照</span></h4>
        <div class="tips icon">
          <ul class="row w">
            <li class="col v-m iconfont icon-zhuyi"></li>
            <li class="col v-m">
              <p>请用手机横向拍摄以保证图片正常显示</p>
            </li>
          </ul>
        </div>
        <div class="take-photo">
          <img src="static/img/jsz.png" alt="">
          <span class="iconfont icon-add"></span>
        </div>
      </div>
    </div>
    <div class="btn-area row w">
      <div class="col v-m">
        <x-button type="warn" @click.native="handleSubmit">下一步</x-button>
      </div>
    </div>
  </div>
</template>
<script>
  import {XButton} from 'vux'
  export default {
    components: {
      XButton
    }
  }
</script>
