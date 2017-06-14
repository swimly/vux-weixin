<template>
  <div class="page has-nav">
    <router-view name="tab" class="content"></router-view>
    <tabbar>
      <tabbar-item :selected="page === 'offer'" link="/offer">
        <img slot="icon" src="static/img/nav1.webp"/>
        <img slot="icon-active" src="static/img/nav1-active.webp"/>
        <span slot="label">车险报价</span>
      </tabbar-item>
      <tabbar-item :selected="page === 'mall'" show-dot link="/mall">
        <img slot="icon" src="static/img/nav2.webp"/>
        <img slot="icon-active" src="static/img/nav2-active.webp"/>
        <span slot="label">积分商城</span>
      </tabbar-item>
      <tabbar-item :selected="page === 'personer'" link="/personer">
        <img slot="icon" src="static/img/nav3.webp"/>
        <img slot="icon-active" src="static/img/nav3-active.webp"/>
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
