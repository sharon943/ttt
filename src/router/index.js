import Vue from 'vue'
import Router from 'vue-router'
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'


// import index from '@/components/index'
import Homepage from '@/components/Homepage'        //首页
import Login from '@/components/login'              //登录页
import Register from '@/components/Register'       //注册页面
import PostOrder from '@/components/PostOrder'     //提交订单
import Pay from '@/components/Pay'                 //支付页面
import SafeAuthorization from '@/components/SafeAuthorization'   //账户安全和授权
import AttentionShops from '@/components/AttentionShops'   //厂家关注
import AccountInfo from '@/components/AccountInfo'   //账户信息
import MyPoints from '@/components/MyPoints'   //我的积分
import Message from '@/components/Message'   //消息通知
import GrandPrize from '@/components/GrandPrize'   //推广赢大奖

import Vueresource from "vue-resource"
import VueClipboard from 'vue-clipboard2'

Vue.use(Router)
Vue.use(Homepage)
Vue.use(Vueresource)
Vue.use(IScrollView, IScroll)
Vue.use(Login)
Vue.use(Register)
Vue.use(Pay)
Vue.use(PostOrder)
Vue.use(SafeAuthorization)
Vue.use(SafeAuthorization)
Vue.use(AccountInfo)
Vue.use(MyPoints)
Vue.use(Message)
Vue.use(GrandPrize)


export default new Router({
  routes: [
    {path: '/', name: 'GrandPrize', component: GrandPrize},
    // {path: '/', name: 'login', component: Login},
    {path: '/Register', name: 'Register', component: Register},
    {path: '/Homepage', name: 'Homepage', component: Homepage},
    {path: '/PostOrder', name: 'PostOrder', component: PostOrder},
    {path: '/Pay', name: 'Pay', component: Pay},
    {path: '/SafeAuthorization', name: 'SafeAuthorization', component: SafeAuthorization},
    {path: '/AttentionShops', name: 'AttentionShops', component: AttentionShops},
    {path: '/AccountInfo', name: 'AccountInfo', component: AccountInfo},
    {path: '/MyPoints', name: 'MyPoints', component: MyPoints},
    {path: '/Message', name: 'Message', component: Message},
    {path: '/GrandPrize', name: 'GrandPrize', component: GrandPrize},
    // {path: '/index', name: 'index', component: index},
  ]
})
