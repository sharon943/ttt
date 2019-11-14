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
import SafeAuthorization from '@/components/userCenter/SafeAuthorization'   //账户安全和授权
import Manufacturersfocus from '@/components/userCenter/Manufacturersfocus'   //厂家关注
import AccountInfo from '@/components/userCenter/AccountInfo'   //账户信息
import MyPoints from '@/components/userCenter/MyPoints'   //我的积分
import Message from '@/components/userCenter/Message'   //消息通知
import GrandPrize from '@/components/userCenter/GrandPrize'   //推广赢大奖

import allproduct from '@/components/allproduct'//所有产品
import Consultingdetail from '@/components/Consultingdetail'//平台公告
import Consultingprogram from '@/components/Consultingprogram'//资讯栏目
import storehome from '@/components/storehome'//店铺首页
import productsearch from '@/components/productsearch'//产品搜索页
import Shopdetails from '@/components/Shopdetails'//店铺详情页
import userhome from '@/components/userhome'//用户中心
import mycar from '@/components/userCenter/mycar'//我的购物车
import shoporders from '@/components/userCenter/shoporders'//店铺订单

//用户中心（还未开发的）
import Undertakesorder from '@/components/userCenter/Undertakesorder'//代发订单
import saleorder from '@/components/userCenter/saleorder'//售后订单
import relatedproducts from '@/components/userCenter/relatedproducts'//关联产品
import storeproducts from '@/components/userCenter/storeproducts'//店铺商品
import uploadpicpackage from '@/components/userCenter/uploadpicpackage'//下载图片包
import productcollection from '@/components/userCenter/productcollection'//产品收藏
import Browsefootprint from '@/components/userCenter/Browsefootprint'//浏览足迹
import Supplydynamic from '@/components/userCenter/Supplydynamic'//货源动态


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
Vue.use(Manufacturersfocus)


export default new Router({
  routes: [
    {path: '/', name: 'Login', component: Login},
    // {path: '/', name: 'login', component: Login},
    {path: '/Register', name: 'Register', component: Register},
    {path: '/Homepage', name: 'Homepage', component: Homepage},
    {path: '/PostOrder', name: 'PostOrder', component: PostOrder},
    {path: '/Pay', name: 'Pay', component: Pay},
    {path: '/SafeAuthorization', name: 'SafeAuthorization', component: SafeAuthorization},
    {path: '/AccountInfo', name: 'AccountInfo', component: AccountInfo},
    {path: '/MyPoints', name: 'MyPoints', component: MyPoints},
    {path: '/Message', name: 'Message', component: Message},
    {path: '/GrandPrize', name: 'GrandPrize', component: GrandPrize},
    {path: '/Supplydynamic', name: 'Supplydynamic', component: Supplydynamic},
    {path: '/Browsefootprint', name: 'Browsefootprint', component: Browsefootprint},
    {path: '/Manufacturersfocus', name: 'Manufacturersfocus', component: Manufacturersfocus},
    {path: '/productcollection', name: 'productcollection', component: productcollection},
    {path: '/uploadpicpackage', name: 'uploadpicpackage', component: uploadpicpackage},
    {path: '/storeproducts', name: 'storeproducts', component: storeproducts},
    {path: '/relatedproducts', name: 'relatedproducts', component: relatedproducts},
    {path: '/Undertakesorder', name: 'Undertakesorder', component: Undertakesorder},
    {path: '/saleorder', name: 'saleorder', component: saleorder},
    {path: '/shoporders', name: 'shoporders', component: shoporders},
    {path: '/storehome', name: 'storehome', component: storehome},
    {path: '/mycar', name: 'mycar', component: mycar},
    {path: '/allproduct', name: 'allproduct', component: allproduct},
    {path: '/Consultingdetail', name: 'Consultingdetail', component: Consultingdetail},
    {path: '/Consultingprogram', name: 'Consultingprogram', component: Consultingprogram},
    {path: '/productsearch', name: 'productsearch', component: productsearch},
    {path: '/Shopdetails', name: 'Shopdetails', component: Shopdetails},
    {path: '/userhome', name: 'userhome', component: userhome}
    // {path: '/index', name: 'index', component: index},
  ]
})
