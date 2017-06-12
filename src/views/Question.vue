<template>
  <div class="page gray">
    <dl class="question">
      <dt>协助准备公司成立相关资料，提供数据</dt>
      <dd>常见问题描述的文字内容，后台可编辑，常见问题描述的文字内容，后台科比那几</dd>
    </dl>
    <dl class="question">
      <dt>协助准备公司成立相关资料，提供数据</dt>
      <dd>常见问题描述的文字内容，后台可编辑，常见问题描述的文字内容，后台科比那几</dd>
    </dl>
    <dl class="question">
      <dt>协助准备公司成立相关资料，提供数据</dt>
      <dd>常见问题描述的文字内容，后台可编辑，常见问题描述的文字内容，后台科比那几</dd>
    </dl>
  </div>
</template>
<script>
  import {Cell} from 'vux'
  export default {
    head: {
      title: {
        inner: '常见问题'
      }
    },
    components: {
      Cell
    }
  }
</script>
<style>
.question dt{font-size:1.2rem;color:#333;background:#fff;border-bottom:1px solid #ccc;padding:0.8rem;}
.question dd{font-size:1.2rem;color:#666;padding:1rem;border-bottom:1px solid #ccc;display:none;}
.question dt:hover + dd{display:block;}
</style>
