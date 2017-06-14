<template>
  <div class="page gray">
    <div class="safe-list white" v-if="list.length > 0">
      <router-link class="row w" :to="'/offer/' + item.id"  v-for="(item, index) in list" :key="index">
          <span class="col v-m col-9 t-l p-5">
            <span class="img large">
              <x-img :src="item.cover" alt=""></x-img>
            </span>
          </span>
          <span class="col v-m col-15">
            <b class="name mb-10">{{item.name}}</b>
            <span class="row w">
              <span class="col v-m t-l c-red"><span class="num">{{item.score}}</span>积分</span>
              <span class="col v-m t-r status">{{item.status}}</span>
            </span>
          </span>
        </router-link>
    </div>
    <div class="row w h" v-if="list.length === 0">
      <div class="col v-m t-c tip">
        <x-img :src="'static/img/sorry.webp'" alt=""></x-img>
        <p>没有兑换奖品记录哦！</p>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {XImg} from 'vux'
  export default {
    head: {
      title: {
        inner: '兑换记录'
      }
    },
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
<style>
.tip img{width:8rem;}
.tip p{font-size:1.2rem;color:#3c3c3c;margin-top:2rem;}
</style>
