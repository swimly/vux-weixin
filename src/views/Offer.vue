<template>
  <div class="page h">
    <Scroller lock-x :height="height" use-pulldown use-pullup :pulldown-config="pulldown" :pullup-config="pullup" v-model="status">
      <div class="safe-list">
        <router-link :to="'/offer/' + item.id" :class="item.recommend ? 'row w rec' : 'row w'" v-for="(item, index) in list" :key="index">
            <span class="col v-m col-8 t-c ptb-10">
              <span class="img">
                <img v-lazy="item.cover" alt=""/>
              </span>
            </span>
            <span class="col v-m col-16">
              <b class="name">{{item.name}}</b>
              <i>承保地区：{{item.address}}</i>
              <i>承保车辆：{{item.car}}</i>
            </span>
          </router-link>
      </div>
    </Scroller>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
import {XImg, Scroller, Loading} from 'vux'
export default {
  head: {
    title: {
      inner: '车险报价'
    }
  },
  components: {
    XImg,
    Scroller,
    Loading
  },
  mounted () {
    this.height = document.querySelector('.content').clientHeight + 'px'
  },
  methods: {
    ...mapMutations({
      showLoading: 'updateLoadingStatus'
    })
  },
  data () {
    return {
      height: '0px',
      status: {
        pullupStatus: 'default'
      },
      pulldown: {
        content: 'Pull Down To Refresh',
        height: 60,
        autoRefresh: true,
        downContent: '下拉刷新',
        upContent: '松手开始刷新',
        loadingContent: '刷新中……',
        clsPrefix: 'xs-plugin-pulldown-'
      },
      pullup: {
        content: 'Pull Up To Refresh',
        pullUpHeight: 60,
        height: 60,
        autoRefresh: true,
        downContent: '松手开始加载',
        upContent: '上拉加载更多……',
        loadingContent: '加载中……',
        clsPrefix: 'xs-plugin-pullup-'
      }
    }
  },
  computed: {
    ...mapGetters({
      list: 'getOfferList'
    })
  }
}
</script>
