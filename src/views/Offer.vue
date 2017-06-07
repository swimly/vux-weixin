<template>
  <div class="safe-list">
    <router-link :to="'/offer/' + item.id" :class="item.recommend ? 'row w rec' : 'row w'" v-for="(item, index) in list" :key="index">
        <span class="col v-m col-8 t-c ptb-10">
          <span class="img">
            <x-img :src="item.cover" alt=""></x-img>
          </span>
        </span>
        <span class="col v-m col-16">
          <b class="name">{{item.name}}</b>
          <i>承保地区：{{item.address}}</i>
          <i>承保车辆：{{item.car}}</i>
        </span>
      </router-link>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import {XImg} from 'vux'
export default {
  components: {
    XImg
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      list: 'getOfferList'
    })
  }
}
</script>
