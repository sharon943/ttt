import Vue from 'vue'
import Router from 'vue-router'
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'


// import index from '@/components/index'
import Login from '@/components/login'

import allproduct from '@/components/allproduct'//所有产品
import Consultingdetail from '@/components/Consultingdetail'//平台公告
import Consultingprogram from '@/components/Consultingprogram'//资讯栏目
import storehome from '@/components/storehome'//店铺首页
import productsearch from '@/components/productsearch'//产品搜索页
import Shopdetails from '@/components/Shopdetails'//店铺详情页
import userhome from '@/components/userhome'//用户中心
import mycar from '@/components/mycar'//我的购物车
import shoporders from '@/components/shoporders'//店铺订单

//用户中心（还未开发的）
import Undertakesorder from '@/components/Undertakesorder'//代发订单
import saleorder from '@/components/saleorder'//售后订单
import relatedproducts from '@/components/relatedproducts'//关联产品
import storeproducts from '@/components/storeproducts'//店铺商品
import uploadpicpackage from '@/components/uploadpicpackage'//下载图片包
import productcollection from '@/components/productcollection'//产品收藏
import Manufacturersfocus from '@/components/Manufacturersfocus'//厂家关注
import Browsefootprint from '@/components/Browsefootprint'//浏览足迹
import Supplydynamic from '@/components/Supplydynamic'//货源动态


import Vueresource from "vue-resource"
import VueClipboard from 'vue-clipboard2'

Vue.use(Router)
Vue.use(Vueresource)
Vue.use(IScrollView, IScroll)
Vue.use(Login)


export default new Router({
  routes: [
    {path: '/', name: 'login', component: Login},
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
