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

import allproduct from '@/components/allproduct'//所有产品
import Consultingdetail from '@/components/Consultingdetail'//平台公告
import Consultingprogram from '@/components/Consultingprogram'//资讯栏目
import storehome from '@/components/storehome'//店铺首页
import productsearch from '@/components/productsearch'//产品搜索页
import Shopdetails from '@/components/Shopdetails'//店铺详情页
import userhome from '@/components/userhome'//用户中心
import news_detail from '@/components/news_detail'//用户中心

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


export default new Router({
  routes: [
    { path: '/', name: 'userhome', component: userhome },
    // {path: '/', name: 'login', component: Login},
    { path: '/Register', name: 'Register', component: Register },
    { path: '/Homepage', name: 'Homepage', component: Homepage },
    { path: '/PostOrder', name: 'PostOrder', component: PostOrder },
    { path: '/Pay', name: 'Pay', component: Pay },
    { path: '/storehome', name: 'storehome', component: storehome },
    { path: '/allproduct', name: 'allproduct', component: allproduct },
    { path: '/Consultingdetail', name: 'Consultingdetail', component: Consultingdetail },
    { path: '/news_detail', name: 'news_detail', component: news_detail},
    { path: '/Consultingprogram', name: 'Consultingprogram', component: Consultingprogram },
    { path: '/productsearch', name: 'productsearch', component: productsearch },
    { path: '/Shopdetails', name: 'Shopdetails', component: Shopdetails },
    //用户中心
    { path: '/userhome', name: 'userhome', component: userhome },
    //厂家直销
    { path: '/factoryDirect', name: 'factoryDirect', component: () => import('@/components/team/factoryDirect.vue'), },
    //今日新款
    { path: '/newStyle', name: 'newStyle', component: () => import('@/components/team/newStyle.vue'), },
     //视频专区
     { path: '/videoArea', name: 'videoArea', component: () => import('@/components/team/videoArea.vue'), },
    //一周人气
    { path: '/weekhot', name: 'weekhot', component: () => import('@/components/team/weekhot.vue'), },
  ]
})
