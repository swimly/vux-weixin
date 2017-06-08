<template>
  <div>
    <div class="order-item mt-5" v-for="(item, index) in list" :key="index">
      <ul class="row w white status">
        <li class="col v-m time col-14">2017-05-02  17 : 50 : 15</li>
        <li class="col v-m t-r col-10">待保险公司报价</li>
      </ul>
      <a class="row w good">
        <span class="col v-m col-6">
          <span class="img">
            <img src="static/img/safe1.png" alt="">
          </span>
        </span>
        <span class="col v-m col-18">
          <h2 class="card">车牌号：鄂A78458</h2>
          <p>被保人：张心仪</p>
        </span>
      </a>
      <ul class="row w price">
        <li class="col v-m t-r">合计保费：<span class="num">待报价</span></li>
      </ul>
      <ul class="row w price">
        <li class="col v-m t-r">
          <a href="#" class="btn btn-light btn-small">联系客服</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      list: {
        type: Array,
        default: []
      }
    }
  }
</script>
<style>
.order-item .status .col{padding:10px;color:#eb3d00;font-size:1.1rem;}
.order-item .status .time{color:#2b2b2b;}
.order-item .good{background:#F6F6F6;}
.order-item .good .col{padding:10px;}
.order-item .img{display:inline-block;width:6rem;height:6rem;background:#fff;vertical-align:middle;text-align:center;border:1px solid #E5E5E5;}
.img:before{content:"";display:inline-block;vertical-align:middle;height:100%;}
.img img{vertical-align:middle;}
.order-item .card{font-size:1.2rem;margin-bottom:0.5rem;}
.order-item p{font-size:1rem;color:#858585;}
.order-item .price{background:#fff;border-bottom:1px solid #E7E7E7;}
.order-item .price .col{padding:0.6rem 1rem;}
.order-item .price .num{font-size:1.2rem;}
</style>
