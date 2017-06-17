export const login = 'http://liuwbox.com/zzbao/app/user/login.htm' // 登录api
export const sms = 'http://liuwbox.com/zzbao/app/user/sms.htm' // 短信接口
export const register = 'http://liuwbox.com/zzbao/app/user/regist.htm' // 注册接口
export const editPwd = 'http://liuwbox.com/zzbao/app/user/resetPwd.htm' // 修改密码接口
export const company = 'http://liuwbox.com/zzbao/app/insurance/company.htm' // 保险公司接口
export const product = 'http://liuwbox.com/zzbao/app/shop/product.htm' // 保险公司接口
export const productType = 'http://liuwbox.com/zzbao/app/shop/type.htm' // 保险公司接口
export const information = 'http://liuwbox.com/zzbao/app/user/edit.htm' // 保险公司接口
export const editLoginPwd = 'http://liuwbox.com/zzbao/app/user/editPwd.htm' // 修改登录密码
export const resetPayPwd = 'http://liuwbox.com/zzbao/app/user/resetPay.htm' // 充值支付密码
export const submitOrder = 'http://liuwbox.com/zzbao/app/order/submit.htm' // 提交保险订单
export const tokenUrl = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential'
export const ticketUrl = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket'
export const appId = 'wxabf1c20c98f9cf4c'
export const appSecret = '4e5337cb2cff85f21385ff8673e1c07a'
export const forced = [{
  text: '交通强险+车船税',
  name: 'forced'
}]
export const basic = [
  {
    text: '车辆损失保险',
    name: 'lossInsurance',
    regardless: 1
  }, {
    text: '第三者责任保险',
    name: 'thirdParty',
    value: ['5万', '10万', '15万', '20万', '30万', '50万', '100万', '150万', '200万'],
    regardless: 1
  }, {
    text: '司机座位险',
    name: 'driverSeat',
    value: ['1万/座', '2万/座', '3万/座', '4万/座', '5万/座', '6万/座'],
    regardless: 1
  }, {
    text: '乘客座位险',
    name: 'passengerSeat',
    value: ['1万/座', '2万/座', '3万/座', '4万/座', '5万/座', '6万/座'],
    regardless: 1
  }, {
    text: '盗抢险',
    name: 'robbery'
  }
]
export const additional = [
  {
    text: '玻璃破碎险',
    name: 'glassCrushing',
    value: ['国产', '进口'],
    regardless: 1
  }, {
    text: '自燃损失险',
    name: 'autoignition',
    regardless: 1
  }, {
    text: '涉水险',
    name: 'wading',
    regardless: 1
  }, {
    text: '无法找到第三方特约险',
    name: 'escape'
  }, {
    text: '制定专修厂特约险',
    name: 'appointedSpecialist'
  }
]
export const time = 600 // 获取验证码时间间隔单位：秒
