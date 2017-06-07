<template>
  <div id="app" class="page">
    <loading v-model="pageLoading"></loading>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {Loading} from 'vux'
export default {
  name: 'app',
  components: {
    Loading
  },
  computed: {
    ...mapGetters({
      pageLoading: 'pageLoading'
    })
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import './assets/css/style.less';
</style>
<style>
@import './assets/css/style.css';
</style>
