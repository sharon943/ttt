import Vue from 'vue'
import Router from 'vue-router'
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'


// import index from '@/components/index'
import Login from '@/components/login'

import Vueresource from "vue-resource"
import VueClipboard from 'vue-clipboard2'

Vue.use(Router)
Vue.use(Vueresource)
Vue.use(IScrollView, IScroll)
Vue.use(Login)


export default new Router({
  routes: [
    {path: '/', name: 'login', component: Login},
    // {path: '/index', name: 'index', component: index},

  ]
})
