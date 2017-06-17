<template>
  <div class="page gray has-tab">
    <tab class="sort" v-model="index">
      <tab-item selected class="select" :class="{sort: item.sort}" @on-item-click="handleChange" v-for="(item, index) in bar" :key="index" :selected="index === active">
        <span v-if="index > 0">{{item.text}}</span>
        <span v-if="index === 0" :class="select ? 'active' : ''">{{option}}</span>
      </tab-item>
    </tab>
    <div class="h content">
      <swiper v-model="active" :show-dots="false" class="h" :height="height" @on-index-change="handleSwiper">
        <swiper-item v-for="(item, index) in bar" :key="index" class="h auto">
          <div class="tab-swiper vux-center h">
            <Scroller lock-x :height="height" bounce>
              <ul class="grid goods-list">
                <li class="col col-12" v-for="(item, index) in activeList">
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
    <popup position="top" v-model="select" class="popUp">
      <group gutter="0">
        <cell v-for="(item, index) in options" :title="item.name" is-link :link="'/mall/' + item.id" @click.native="handleSelect(item)"></cell>
      </group>
    </popup>
  </div>
</template>
<script>
  import {Tab, TabItem, Popup, Swiper, SwiperItem, Scroller, XImg, Group, Cell} from 'vux'
  import {mapGetters, mapMutations} from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        list: 'getProductList' // 所有商品列表
      }),
      type () {
        return this.$route.params.type
      }
    },
    data () {
      return {
        height: '',
        class: '',
        sort: false,
        index: 0,
        active: 0,
        typeList: [],
        typeId: 0,
        select: false,
        bar: [{
          text: '全部',
          key: 'all'
        }, {
          text: '默认',
          key: 'default'
        }, {
          text: '最新',
          key: 'news',
          sort: false
        }, {
          text: '积分',
          key: 'score',
          sort: false
        }],
        options: [],
        option: '全部',
        // 请求的初始参数
        product: {
          type: 0,
          timeOrder: 0,
          priceOrder: 0,
          defaultOrder: 0,
          limit: 8,
          pageIndex: 0
        },
        activeList: [] // 分类商品列表
      }
    },
    mounted () {
      this.height = document.querySelector('.vux-slider').clientHeight + 'px'
    },
    components: {
      Tab,
      TabItem,
      Popup,
      Swiper,
      SwiperItem,
      Scroller,
      XImg,
      Group,
      Cell
    },
    created () {
      this.options = JSON.parse(this.$localStorage.get('goodsType'))
      this.options.push({
        id: 0,
        name: '全部'
      })
      this.product.type = this.$route.params.type
      for (const i in this.options) {
        if (this.options[i].id === this.product.type) {
          this.option = this.options[i].name
        }
      }
      this.getProduct(this)
    },
    methods: {
      handleSort () {
        this.sort = true
      },
      handleChangeSort () {
        this.sort = false
        this.getData(this.option)
      },
      handleChange (index) {
        this.active = index
        if (index === 0) {
          // 弹出选择
          console.log(0)
          this.select = true
        } else if (index === 1) {
          this.product.defaultOrder = 1
          this.getProduct(this)
        } else if (index === 2) {
          if (this.product.timeOrder === 0) {
            this.product.timeOrder = 1
            this.bar[index].sort = true
          } else {
            this.product.timeOrder = 0
            this.bar[index].sort = false
          }
          this.getProduct(this)
        } else if (index === 3) {
          if (this.product.priceOrder === 0) {
            this.product.priceOrder = 1
            this.bar[index].sort = true
          } else {
            this.product.priceOrder = 0
            this.bar[index].sort = false
          }
          this.getProduct(this)
        }
      },
      handleSelect (item) {
        console.log(item)
        this.option = item.name
        this.product.type = item.id
        this.select = false
        this.getProduct(this)
      },
      handleSwiper (index) {
      },
      ...mapMutations({
        getProduct: 'getProduct'
      })
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
.vux-tab-item.select:nth-child(3):after,.vux-tab-item.select:nth-child(4):after{content:"";display:inline-block;width:1rem;height:1rem;background:url(../assets/img/default.png) no-repeat center center;background-size:1.4rem;vertical-align:middle;}
.vux-tab-item.select.vux-tab-selected:nth-child(3):after,.vux-tab-item.select.vux-tab-selected:nth-child(4):after{content:"";display:inline-block;width:1rem;height:1rem;background:url(../assets/img/asc.png) no-repeat center center;background-size:1.4rem;vertical-align:middle;}
.vux-tab-item.sort.vux-tab-selected:nth-child(3):after,.vux-tab-item.sort.vux-tab-selected:nth-child(4):after{content:"";display:inline-block;width:1rem;height:1rem;background:url(../assets/img/dec.png) no-repeat center center;background-size:1.4rem;vertical-align:middle;}
.page.has-tab{padding-top:44px;}
.has-tab .vux-tab{margin-top:-44px;}
.popUp a{display:block;font-size:1rem;color:#666;padding:0.6rem 1rem;background:#fff;border-top:1px solid #eee;}
.popUp a:active{background:rgba(0,0,0,0.1)}
</style>
