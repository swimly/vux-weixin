<template>
  <div class="page gray">
    <div class="safe-list white">
      <router-link class="row w" :to="'/offer/' + item.id"  v-for="(item, index) in list" :key="index">
          <span class="col v-m col-10 t-c p-5">
            <span class="img large">
              <x-img :src="item.cover" alt=""></x-img>
            </span>
          </span>
          <span class="col v-m col-14">
            <b class="name">{{item.name}}</b>
            <span class="row w">
              <span class="col v-m t-l c-red"><span class="num">{{item.score}}</span>积分</span>
              <span class="col v-m t-r status">{{item.status}}</span>
            </span>
          </span>
        </router-link>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {XImg} from 'vux'
  export default {
    components: {
      XImg
    },
    computed: {
      ...mapGetters({
        list: 'getExchangeList'
      })
    }
  }
</script>
