<template>
  <div class="page has-nav">
    <router-view name="tab" class="content"></router-view>
    <tabbar>
      <tabbar-item :selected="page === 'offer'" link="/offer">
        <i slot="icon" class="iconfont icon-nav1"></i>
        <i slot="icon-active" class="iconfont icon-nav1-active"></i>
        <span slot="label">车险报价</span>
      </tabbar-item>
      <tabbar-item :selected="page === 'mall'" show-dot link="/mall">
        <i slot="icon" class="iconfont icon-nav2"></i>
        <i slot="icon-active" class="iconfont icon-nav2-active"></i>
        <span slot="label">积分商城</span>
      </tabbar-item>
      <tabbar-item :selected="page === 'personer'" link="/personer">
        <i slot="icon" class="iconfont icon-nav3"></i>
        <i slot="icon-active" class="iconfont icon-nav3-active"></i>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
export default {
  data () {
    return {
      page: 'offer'
    }
  },
  created () {
    this.page = this.$route.path.split('/')[1]
  },
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
}
</script>
