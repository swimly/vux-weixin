<template>
  <div class="page gray has-tab">
    <tab class="sort" v-model="index">
      <tab-item selected :class="'select ' + item.sort" @on-item-click="active = index" v-for="(item, index) in bar" :key="index" :selected="index === active">
        <popup-radio :options="item.options" position="top" v-model="option" @click.native="handleSort" @on-change="handleChangeSort" v-if="item.options"></popup-radio>
        <span v-if="!item.options">{{item.text}}</span>
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
  </div>
</template>
<script>
  import {Tab, TabItem, PopupRadio, Popup, Swiper, SwiperItem, Scroller, XImg} from 'vux'
  import {mapGetters} from 'vuex'
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
        sort: false,
        index: 0,
        active: 0,
        typeList: [],
        typeId: 0,
        bar: [{
          text: '全部',
          key: 'all',
          options: [] // 分类下拉列表
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
      PopupRadio,
      Popup,
      Swiper,
      SwiperItem,
      Scroller,
      XImg
    },
    created () {
      this.getType()
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
      },
      handleSwiper (index) {
      },
      getType () {
        this.$http({
          method: 'jsonp',
          url: 'http://liuwbox.com/zzbao/app/shop/type.htm',
          jsonp: 'callback',
          jsonpCallback: 'json'
        })
        .then(res => {
          console.log(res.data.data.typeList)
          var arr = []
          res.data.data.typeList.forEach(function (el) {
            let {id: key, name: value} = {id: el.id, name: el.name}
            arr.push({key: key, value: value})
          })
          this.bar[0].options = arr
          let typeList = res.data.data.typeList // 获取分类列表
          let typeId = 0 // 根据分类名称获取分类id
          function getTypeId (name) {
            typeList.forEach(function (el) {
              if (el.name === name) {
                typeId = el.id
              }
            })
          }
          switch (this.type) {
            case 'new':
              this.option = '新品上市'
              getTypeId(this.option)
              this.getData(typeId) // 分类id传参获取分类数据
              break
            case 'exchange':
              this.option = '超值兑换'
              getTypeId(this.option)
              this.getData(typeId)
              break
            case 'car':
              this.option = '时尚车载'
              getTypeId(this.option)
              this.getData(typeId)
              break
            case 'bag':
              this.option = '精品箱包'
              getTypeId(this.option)
              this.getData(typeId)
              break
            case 'home':
              this.option = '居家生活'
              getTypeId(this.option)
              this.getData(typeId)
              break
            case 'drink':
              this.option = '酒水茶具'
              getTypeId(this.option)
              this.getData(typeId)
              break
            case 'accessories':
              this.option = '潮品配饰'
              getTypeId(this.option)
              this.getData(typeId)
              break
            default:
              this.option = '全部'
              getTypeId(this.option)
              this.getData()
          }
        })
      },
      getData (type = 0, timeOrder = 0, priceOrder = 0, defaultOrder = 0, limit = 10, pageIndex = 0) {
        this.$http({
          method: 'jsonp',
          url: 'http://liuwbox.com/zzbao/app/shop/product.htm?',
          params: {
            type: type,
            timeOrder: timeOrder,
            priceOrder: priceOrder,
            defaultOrder: defaultOrder,
            limit: limit,
            pageIndex: pageIndex
          },
          jsonp: 'callback',
          jsonpCallback: 'json'
        })
        .then(res => {
          console.log(res.data.data.productList)
          this.activeList = res.data.data.productList
        })
        .catch(e => {
          console.log(e)
        })
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
