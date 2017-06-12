<template>
  <div class="page gray row w feedback">
    <div class="col v-t t-l p-1" style="padding-top:0;">
      <group title="反馈意见">
        <x-textarea></x-textarea>
      </group>
      <group title="联系方式">
        <x-input is-type="china-mobile"></x-input>
      </group>
      <x-button type="warn" style="margin-top:2rem;">提交</x-button>
    </div>
  </div>
</template>
<script>
  import {Group, Cell, XInput, XTextarea, XButton} from 'vux'
  export default {
    head: {
      title: {
        inner: '意见反馈'
      }
    },
    components: {
      Group,
      Cell,
      XInput,
      XTextarea,
      XButton
    }
  }
</script>
<style>
.feedback .weui-cells{border-left:1px solid #eee;border-right:1px solid #eee;}
</style>
