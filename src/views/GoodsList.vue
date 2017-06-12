<template>
  <div class="page gray has-tab">
    <tab class="sort" v-model="index">
      <tab-item selected :class="'select ' + item.sort" @on-item-click="handleChange" v-for="(item, index) in bar" :key="index" :selected="option === item.text">
        <popup-radio :options="item.options" position="top" v-model="option" @click.native="handleSort" @on-change="handleChangeSort" v-if="item.options"></popup-radio>
        <span v-if="!item.options">{{item.text}}</span>
      </tab-item>
    </tab>
    <div class="h content">
      <swiper v-model="index" :show-dots="false" class="h" :height="height" @on-index-change="handleSwiper">
        <swiper-item v-for="(item, index) in bar" :key="index" class="h auto">
          <div class="tab-swiper vux-center h">
            <Scroller lock-x :height="height" bounce>
              <ul class="grid goods-list">
                <li class="col col-12" v-for="(item, index) in list">
                  <router-link :to="'/goods/' + item.id" class="goods">
                    <span class="cover">
                      <x-img :src="item.cover"></x-img>
                    </span>
                    <b class="name">{{item.name}}</b>
                    <span class="c-red">积分<b class="score">{{item.score}}</b></span>
                  </router-link>
                </li>
              </ul>
            </Scroller>
          </div>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>
<script>
  import {Tab, TabItem, PopupRadio, Popup, Swiper, SwiperItem, Scroller, XImg} from 'vux'
  import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        list: 'getNewProduct'
      })
    },
    data () {
      return {
        height: '',
        sort: false,
        index: 0,
        bar: [{
          text: '全部',
          key: 'all',
          options: [{
            key: 'all',
            value: '全部'
          }, {
            key: 'vehicle',
            value: '车载用品'
          }, {
            key: 'beauty',
            value: '个护美妆'
          }, {
            key: 'fishing',
            value: '高档渔具'
          }, {
            key: 'kitchen',
            value: '电器厨具'
          }, {
            key: 'bag',
            value: '精品箱包'
          }]
        }, {
          text: '默认',
          key: 'default'
        }, {
          text: '最新',
          key: 'news',
          sort: 'default'
        }, {
          text: '积分',
          key: 'score',
          sort: 'default'
        }],
        option: '全部'
      }
    },
    mounted () {
      console.log(document.querySelector('.vux-slider').clientHeight)
      this.height = document.querySelector('.vux-slider').clientHeight + 'px'
    },
    components: {
      Tab,
      TabItem,
      PopupRadio,
      Popup,
      Swiper,
      SwiperItem,
      Scroller,
      XImg
    },
    methods: {
      handleSort () {
        this.sort = true
      },
      handleChangeSort () {
        this.sort = false
      },
      handleChange (index) {
        console.log(this.bar[index])
        this.index = index
      },
      handleSwiper (index) {
        console.log(this.bar[index])
      }
    }
  }
</script>
<style>
.sort .select .weui-cell{padding:0;}
.sort.vux-tab{z-index:1000;}
.sort .weui-cell__ft{color:#666;width:100%;text-align:center;}
.sort .weui-cell__ft:before{content:"";display:inline-block;width:1rem;height:1rem;background:url(../assets/img/down.png) no-repeat;background-size:1rem;position:absolute;right:0;top:50%;transform:translate(0,-50%);transition:0.3s;}
.sort .true .weui-cell__ft:before{transform:translate(0,-50%) rotate(180deg);}
.sort .weui-cell__ft:after{display:none;}
.sort .vux-tab-selected .weui-cell__ft{color:#EB3D00;}
.vux-popup-dialog.vux-popup-top{top:44px !important;}
.vux-tab-item.default:after{content:"";display:inline-block;width:1rem;height:1rem;background:url(../assets/img/default.png) no-repeat center center;background-size:1.4rem;vertical-align:middle;}
.vux-tab-item.default.vux-tab-selected:after{content:"";display:inline-block;width:1rem;height:1rem;background:url(../assets/img/asc.png) no-repeat center center;background-size:1.4rem;vertical-align:middle;}
.vux-tab-item.sort.vux-tab-selected:after{content:"";display:inline-block;width:1rem;height:1rem;background:url(../assets/img/dec.png) no-repeat center center;background-size:1.4rem;vertical-align:middle;}
.page.has-tab{padding-top:44px;}
.has-tab .vux-tab{margin-top:-44px;}
</style>
