<template>
  <div class="page gray">
    <group gutter="0px">
      <cell value-align="left" v-for="(item, index) in list">
        <h2 class="time">{{item.time}}</h2>
        <p class="text">{{item.title}}<badge v-if="!item.read"></badge></p>
      </cell>
    </group>
  </div>
</template>
<script>
  import {Group, Cell, Badge} from 'vux'
  import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        list: 'getMessageList'
      })
    },
    components: {
      Group,
      Cell,
      Badge
    }
  }
</script>
<style>
.time{font-size:1rem;}
.text{font-size:1.1rem;color:#5B5B5B;line-height:2;}
</style>
