webpackJsonp([33],{111:function(t,e){},112:function(t,e){},113:function(t,e){},114:function(t,e){},115:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page",attrs:{id:"app"}},[n("loading",{model:{value:t.pageLoading,callback:function(e){t.pageLoading=e},expression:"pageLoading"}}),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},116:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-toast"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),n("transition",{attrs:{name:t.currentTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):n("p",{staticClass:"weui-toast__content"},[t._t("default")],2)])])],1)},staticRenderFns:[]}},117:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"vux-mask"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast"},[n("div",{staticClass:"weui-mask_transparent"}),t._v(" "),n("div",{staticClass:"weui-toast",style:{position:t.position}},[n("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),n("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2)])])])},staticRenderFns:[]}},121:function(t,e){},30:function(t,e,n){"use strict";var o=n(15),i=n(32),a=n(70),s=n(68),c=n(66),r=n(65),u=n(69),p=n(73),l=n(71),m=n(67),d=n(72);o.a.use(i.c),e.a=new i.c.Store({modules:{pageLoad:a.a,offer:s.a,mall:c.a,exchange:r.a,order:u.a,wallet:p.a,score:l.a,message:m.a,user:d.a}})},34:function(t,e,n){n(114);var o=n(16)(n(74),n(117),null,null);t.exports=o.exports},45:function(t,e,n){"use strict";var o=n(15),i=n(118),a=n(30);o.a.use(i.a);var s=new i.a({routes:[{path:"/",name:"Main",redirect:"/offer",component:function(t){n.e(19).then(function(){var e=[n(153)];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"/offer",components:{tab:function(t){n.e(18).then(function(){var e=[n(137)];t.apply(null,e)}.bind(this)).catch(n.oe)}}},{path:"/mall",components:{tab:function(t){n.e(20).then(function(){var e=[n(135)];t.apply(null,e)}.bind(this)).catch(n.oe)}}},{path:"/personer",components:{tab:function(t){n.e(4).then(function(){var e=[n(144)];t.apply(null,e)}.bind(this)).catch(n.oe)}}}]},{path:"/offer/:id",components:{default:function(t){n.e(5).then(function(){var e=[n(138)];t.apply(null,e)}.bind(this)).catch(n.oe)}}},{path:"/offer/photograph/:id",components:{default:function(t){n.e(29).then(function(){var e=[n(145)];t.apply(null,e)}.bind(this)).catch(n.oe)}}},{path:"/offer/select/:id",components:{default:function(t){n.e(25).then(function(){var e=[n(151)];t.apply(null,e)}.bind(this)).catch(n.oe)}}},{path:"/login",name:"Login",component:function(t){n.e(11).then(function(){var e=[n(134)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/setting",name:"Setting",component:function(t){n.e(23).then(function(){var e=[n(152)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/exchange",name:"exchange",component:function(t){n.e(28).then(function(){var e=[n(129)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/order",name:"order",component:function(t){n.e(0).then(function(){var e=[n(62)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/order/:id",name:"orders",component:function(t){n.e(0).then(function(){var e=[n(62)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/wallet",name:"wallet",component:function(t){n.e(1).then(function(){var e=[n(154)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/record",name:"record",component:function(t){n.e(16).then(function(){var e=[n(148)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/record/:id",name:"recordDetail",component:function(t){n.e(13).then(function(){var e=[n(149)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/cash",name:"cash",component:function(t){n.e(7).then(function(){var e=[n(126)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/donation",name:"donation",component:function(t){n.e(6).then(function(){var e=[n(128)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/detail",name:"detail",component:function(t){n.e(14).then(function(){var e=[n(127)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/balanceDetail",name:"balanceDetail",component:function(t){n.e(15).then(function(){var e=[n(125)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/message",name:"message",component:function(t){n.e(22).then(function(){var e=[n(136)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/information",name:"information",component:function(t){n.e(8).then(function(){var e=[n(133)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/edit/passwordBypay",name:"passwordBypay",component:function(t){n.e(30).then(function(){var e=[n(142)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/edit/passwordBylogin",name:"passwordBylogin",component:function(t){n.e(31).then(function(){var e=[n(141)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/aboutUs",name:"aboutUs",component:function(t){n.e(24).then(function(){var e=[n(124)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/feedback",name:"feedback",component:function(t){n.e(9).then(function(){var e=[n(130)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/question",name:"question",component:function(t){n.e(27).then(function(){var e=[n(147)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/goods/:id",name:"goods",component:function(t){n.e(2).then(function(){var e=[n(131)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/mall/:type",name:"goodsCategory",component:function(t){n.e(3).then(function(){var e=[n(132)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/register",name:"register",component:function(t){n.e(10).then(function(){var e=[n(150)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/password",name:"password",component:function(t){n.e(12).then(function(){var e=[n(140)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/pay/:id",name:"pay",component:function(t){n.e(17).then(function(){var e=[n(143)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/policy/:id",name:"policy",component:function(t){n.e(21).then(function(){var e=[n(146)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/order/detail/:id",name:"orderDetail",component:function(t){n.e(26).then(function(){var e=[n(139)];t.apply(null,e)}.bind(this)).catch(n.oe)}}]});s.beforeEach(function(t,e,n){a.a.commit("updateLoadingStatus",!0),n()}),s.afterEach(function(t){a.a.commit("updateLoadingStatus",!1)}),e.a=s},55:function(t,e,n){n(111),n(112);var o=n(16)(n(76),n(115),null,null);t.exports=o.exports},60:function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"d",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return s}),n.d(e,"e",function(){return c});var o="http://liuwbox.com/zzbao/app/user/login.htm",i="http://liuwbox.com/zzbao/app/user/sms.htm",a="http://liuwbox.com/zzbao/app/user/regist.htm",s="http://liuwbox.com/zzbao/app/user/resetPwd.htm",c=60},63:function(t,e,n){n(113);var o=n(16)(n(75),n(116),null,null);t.exports=o.exports},64:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(15),i=n(49),a=n.n(i),s=n(55),c=n.n(s),r=n(45),u=n(30),p=n(48),l=n(46),m=n(47),d=n(52),h=n.n(d),f=n(50),g=n.n(f),v=n(54),w=n(51),b=n.n(w),x=n(53),y=n.n(x);o.a.use(y.a),o.a.use(l.a),a.a.attach(document.body),o.a.config.productionTip=!1,o.a.use(b.a,5e3),o.a.use(p.a),o.a.use(v.a),o.a.use(g.a),o.a.use(m.a),o.a.use(h.a,{preLoad:1.3,error:"dist/error.png",loading:"static/img/loading.gif",attempt:1}),new o.a({router:r.a,store:u.a,render:function(t){return t(c.a)}}).$mount("#app-box")},65:function(t,e,n){"use strict";var o={exchangeList:[{id:1,cover:"static/img/score1.png",name:"香百年（Carori） 汽车香水座车载车用香水",score:1270,status:"已兑换"},{id:1,cover:"static/img/score1.png",name:"香百年（Carori） 汽车香水座车载车用香水",score:1270,status:"已兑换"}]},i={getExchangeList:function(t){return t.exchangeList}},a={getExchangeList:function(t){},getExchange:function(t){}};e.a={state:o,getters:i,mutations:a}},66:function(t,e,n){"use strict";var o={mallNav:[{text:"新品上市",icon:"static/img/index1.png",url:"/mall/new"},{text:"超值兑换",icon:"static/img/index2.png",url:"/mall/new"},{text:"时尚车载",icon:"static/img/index3.png",url:"/mall/new"},{text:"精品箱包",icon:"static/img/index4.png",url:"/mall/new"},{text:"居家生活",icon:"static/img/index5.png",url:"/mall/new"},{text:"酒水茶具",icon:"static/img/index6.png",url:"/mall/new"},{text:"潮品配饰",icon:"static/img/index7.png",url:"/mall/new"},{text:"所有商品",icon:"static/img/index8.png",url:"/mall/new"}],newProduct:[{id:1,cover:"static/img/g1.png",name:"卡儿酷 车载吸尘器 干湿两用多功能",score:1980,time:"2016-12-23"},{id:2,cover:"static/img/g2.png",name:"香百年（Carori） 汽车香水座车载车用香水",score:890,time:"2016-12-23"},{id:3,cover:"static/img/g1.png",name:"卡儿酷 车载吸尘器 干湿两用多功能",score:1980,time:"2016-12-23"},{id:4,cover:"static/img/g2.png",name:"香百年（Carori） 汽车香水座车载车用香水",score:890,time:"2016-12-23"},{id:5,cover:"static/img/g1.png",name:"卡儿酷 车载吸尘器 干湿两用多功能",score:1980,time:"2016-12-23"},{id:6,cover:"static/img/g2.png",name:"香百年（Carori） 汽车香水座车载车用香水",score:890,time:"2016-12-23"}]},i={getMallNav:function(t){return t.mallNav},getNewProduct:function(t){return t.newProduct}};e.a={state:o,getters:i}},67:function(t,e,n){"use strict";var o={messageList:[{title:"您的订单号为201602145745的订单报价成功！",content:"您的订单号为201602145745的订单报价成功！",time:"2017-12-12 17:34",read:!1},{title:"您的订单号为201602145745的订单报价成功！",content:"您的订单号为201602145745的订单报价成功！",time:"2017-12-12 17:34",read:!1},{title:"您的订单号为201602145745的订单报价成功！",content:"您的订单号为201602145745的订单报价成功！",time:"2017-12-12 17:34",read:!0},{title:"您的订单号为201602145745的订单报价成功！",content:"您的订单号为201602145745的订单报价成功！",time:"2017-12-12 17:34",read:!0},{title:"您的订单号为201602145745的订单报价成功！",content:"您的订单号为201602145745的订单报价成功！",time:"2017-12-12 17:34",read:!0}]},i={getMessageList:function(t){return t.messageList}};e.a={state:o,getters:i}},68:function(t,e,n){"use strict";var o={order:{insurance:"",city:"",carNumber:"",carOwner:"",phone:"",IDface:"",drivingLicense:"",subdrivingLicense:"",force:""},offer:{id:1,cover:"static/img/safe1.png",banner:"static/img/banner3.png",name:"人保车险",address:"各大城市",car:"9座及以下个人非营业客车",recommend:!0},offerList:[{id:1,cover:"static/img/safe1.png",banner:"static/img/banner1.png",name:"人保车险",address:"各大城市",car:"9座及以下个人非营业客车",recommend:!0},{id:2,cover:"static/img/safe2.png",banner:"static/img/banner1.png",name:"人保车险",address:"各大城市",car:"9座及以下个人非营业客车",recommend:!0},{id:3,cover:"static/img/safe3.png",banner:"static/img/banner1.png",name:"人保车险",address:"各大城市",car:"9座及以下个人非营业客车",recommend:!1},{id:4,cover:"static/img/safe1.png",banner:"static/img/banner1.png",name:"人保车险",address:"各大城市",car:"9座及以下个人非营业客车",recommend:!1},{id:5,cover:"static/img/safe2.png",banner:"static/img/banner1.png",name:"人保车险",address:"各大城市",car:"9座及以下个人非营业客车",recommend:!1},{id:6,cover:"static/img/safe3.png",banner:"static/img/banner1.png",name:"人保车险",address:"各大城市",car:"9座及以下个人非营业客车",recommend:!1}]},i={getOfferList:function(t){return t.offerList},getOffer:function(t){return t.offer}},a={getOfferList:function(t){},getOffer:function(t){}};e.a={state:o,getters:i,mutations:a}},69:function(t,e,n){"use strict";var o={orderList:[{id:1,goods:{id:123,cover:"static/img/safe1.png"},carNumber:"鄂A78458",insured:"刘勇",status:"待保险公司报价",price:"待报价",category:"offer",time:"2017-05-02  17 : 50 : 15"},{id:2,goods:{id:123,cover:"static/img/safe1.png"},carNumber:"鄂A78458",insured:"刘勇",status:"待付款",price:"￥4300.00",category:"pay",time:"2017-05-02  17 : 50 : 15"},{id:3,goods:{id:123,cover:"static/img/safe1.png"},carNumber:"鄂A78458",insured:"刘勇",status:"待出单",price:"",category:"issue",time:"2017-05-02  17 : 50 : 15"},{id:4,goods:{id:123,cover:"static/img/safe1.png"},carNumber:"鄂A78458",insured:"刘勇",status:"已出单",price:"",category:"issued",time:"2017-05-02  17 : 50 : 15"},{id:5,goods:{id:123,cover:"static/img/safe1.png"},carNumber:"鄂A78458",insured:"刘勇",status:"已撤单",price:"￥0.00",category:"kill",time:"2017-05-02  17 : 50 : 15"},{id:6,goods:{id:123,cover:"static/img/safe1.png"},carNumber:"鄂A78458",insured:"刘勇",status:"报价失败",price:"暂无保费",category:"fail",time:"2017-05-02  17 : 50 : 15"}]},i={getOrderList:function(t){return t.orderList}};e.a={state:o,getters:i}},70:function(t,e,n){"use strict";var o={isLoading:!1},i={pageLoading:function(t){return t.isLoading}},a={updateLoadingStatus:function(t,e){t.isLoading=e}};e.a={state:o,getters:i,mutations:a}},71:function(t,e,n){"use strict";var o={incomeRecord:[{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"},{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"},{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"},{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"},{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"},{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"},{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"},{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"},{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"},{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"}]},i={getIncomeRecord:function(t){return t.incomeRecord}};e.a={state:o,getters:i}},72:function(t,e,n){"use strict";var o=n(56),i=n.n(o),a=n(60),s={logined:!1,userInfo:{}},c={checkAuthor:function(t){return t.logined},getUserInfo:function(t){return t.userInfo}},r={postEditPassword:function(t,e){console.log(e.form),e.form.tel?e.form.captcha?e.form.pwd&&e.pwd?e.form.pwd!==e.pwd?e.$vux.toast.show({type:"text",width:"15em",position:"bottom",text:"两次输入的密码不同！",time:"1000"}):e.loading?e.$vux.toast.show({type:"text",width:"10em",position:"bottom",text:"请勿重复提交！",time:"1000"}):e.$http({method:"jsonp",url:a.a,jsonp:"callback",jsonpCallback:"json",params:e.form,before:function(){e.loading=!0}}).then(function(t){console.log(t),e.loading=!1,e.$vux.toast.show({type:"text",width:"15em",position:"bottom",text:t.body.msg,time:"1000"}),e.$router.replace("/login")}):e.$vux.toast.show({type:"text",width:"10em",position:"bottom",text:"请输入新密码！",time:"1000"}):e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"验证码必须填写！",time:"1000"}):e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"请填写手机号码！",time:"1000"})},postLogout:function(t,e){e.$localStorage.remove("userInfo"),e.$localStorage.set("logined",!1),e.$router.replace("/login"),t.logined=!1,t.userInfo={}},postLogin:function(t,e){""===e.form.tel||""===e.form.pwd?e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"手机号码和密码不能为空！",time:"1000"}):e.$refs.tel.valid?e.loading?e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"正在努力加载中，不要着急哦！",time:"1000"}):e.$http({method:"jsonp",url:a.b,jsonp:"callback",jsonpCallback:"json",params:{tel:e.form.tel,pwd:e.form.pwd},before:function(){e.loading=!0}}).then(function(n){console.log(n),n.body.data?(e.loading=!1,e.$vux.toast.show({type:"text",width:"10em",position:"bottom",text:"登录成功！",time:"1000"}),t.logined=!0,t.userInfo=n.body.data.userInfo,e.$localStorage.set("userInfo",i()(t.userInfo)),e.$localStorage.set("time",Date.parse(new Date)),setTimeout(function(){e.$router.replace("/")},1e3)):(e.loading=!1,e.$vux.toast.show({type:"text",width:"15em",position:"bottom",text:"用户名或者密码有误！",time:"1000"}))},function(t){e.loading=!1,e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"服务器正在维护中！",time:"1000"})}):e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"手机号格式不正确",time:"1000"})},postRegister:function(t,e){e.form.tel&&e.$refs.tel.valid?e.form.name?e.$refs.pwd.valid&&e.pwd===e.form.pwd?e.form.captcha?e.loading?e.$vux.toast.show({type:"text",width:"10em",position:"bottom",text:"正在提交注册！",time:"1000"}):e.$http({method:"jsonp",url:a.c,jsonp:"callback",jsonpCallback:"json",params:e.form,before:function(){e.loading=!0}}).then(function(n){console.log(n),e.loading=!1,n&&(e.$vux.toast.show({type:"text",width:"10em",position:"bottom",text:n.body.msg,time:"1000"}),t.logined=!0,t.userInfo=n.body.data.userInfo,e.$localStorage.set("userInfo",i()(t.userInfo)),e.$localStorage.set("time",Date.parse(new Date)),setTimeout(function(){e.$router.replace("/")},1e3))}):e.$vux.toast.show({type:"text",width:"10em",position:"bottom",text:"验证码必填！",time:"1000"}):e.$vux.toast.show({type:"text",width:"10em",position:"bottom",text:"密码输入有误！",time:"1000"}):e.$vux.toast.show({type:"text",width:"10em",position:"bottom",text:"请填写您的姓名",time:"1000"}):e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"请填写正确的手机号码！",time:"1000"})},postSMS:function(t,e){e.form.tel?e.$refs.tel.valid?e.getting?e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"正在获取验证码，请稍后！",time:"1000"}):e.$http({method:"jsonp",url:a.d,jsonp:"callback",jsonpCallback:"json",params:{tel:e.form.tel,type:e.smsType},before:function(){e.getting=!0,console.log(a.d)}}).then(function(t){console.log(t),t.body.status?(e.getting=!1,e.show=!0,e.start=!0):(e.getting=!1,e.isReg=!0),e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:t.body.msg,time:"3000"})}):e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"请填写正确的手机号码",time:"1000"}):e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"请填写手机号码！",time:"1000"})},getAuthorInfo:function(t,e){t.userInfo=JSON.parse(e.$localStorage.get("userInfo"))}};e.a={state:s,getters:c,mutations:r}},73:function(t,e,n){"use strict";var o={walletScore:[{id:1,score:199,balance:2345,status:"success",text:"提现成功",time:"2016-12-08 12:15:40"},{id:2,score:199,balance:2345,status:"waiting",text:"等待审核",time:"2016-12-08 12:15:40"},{id:3,score:199,balance:2345,status:"error",text:"提现失败",time:"2016-12-08 12:15:40"},{id:4,score:199,balance:2345,status:"success",text:"提现成功",time:"2016-12-08 12:15:40"}]},i={getWalletScore:function(t){return t.walletScore}},a={};e.a={state:o,getters:i,mutations:a}},74:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{value:{type:Boolean,default:!1},text:String,position:String},created:function(){this.show=this.value},data:function(){return{show:!1}},watch:{value:function(t){this.show=t},show:function(t){this.$emit("input",t)}}}},75:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(77);e.default={mixins:[o.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}},76:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(58),i=n.n(o),a=n(32),s=n(34),c=n.n(s);e.default={name:"app",components:{Loading:c.a},created:function(){this.getAuthorInfo(this),console.log(this.user)},computed:i()({},n.i(a.a)({pageLoading:"pageLoading",user:"getUserInfo"})),methods:i()({},n.i(a.b)({getAuthorInfo:"getAuthorInfo"}))}}},[64]);
//# sourceMappingURL=app.f5ecc51e0a8fad4cd1a6.js.map