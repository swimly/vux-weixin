<template>
  <div class="page gray">
    <group gutter="0px">
      <cell title="投保公司" value="太平洋保险"></cell>
    </group>
    <group gutter="0px">
      <cell title="保单信息" value="保单详情" is-link :link="'/policy/' + id"></cell>
    </group>
    <group gutter="0px">
      <cell title="商业险" value="￥850.00"></cell>
    </group>
    <group gutter="0px">
      <cell title="交强险" value="￥240.00"></cell>
    </group>
    <group gutter="0px">
      <cell title="车船费" value="￥254.00"></cell>
    </group>
    <group gutter="0px">
      <cell>
        <p slot="value">应付总额：<span class="num c-red">￥2420.00</span></p>
      </cell>
    </group>
    <group gutter="10px">

    </group>
  </div>
</template>
<script>
  import {Group, Cell} from 'vux'
  export default {
    components: {
      Group,
      Cell
    },
    data () {
      return {
        id: 0
      }
    },
    created () {
      this.id = this.$route.params.id
    }
  }
</script>
<style scoped>
.num{font-size:1.6rem;}
</style>
