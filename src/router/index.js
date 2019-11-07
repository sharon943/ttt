import Vue from 'vue'
import Router from 'vue-router'
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'


// import index from '@/components/index'
import Login from '@/components/login'
import Homepage from '@/components/Homepage'
import Register from '@/components/Register'

import Vueresource from "vue-resource"
import VueClipboard from 'vue-clipboard2'

Vue.use(Router)
Vue.use(Homepage)
Vue.use(Vueresource)
Vue.use(IScrollView, IScroll)
Vue.use(Login)
Vue.use(Register)


export default new Router({
  routes: [
    // {path: '/', name: 'Register', component: Register},
    {path: '/', name: 'login', component: Login},
    {path: '/Register', name: 'Register', component: Register},
    {path: '/Homepage', name: 'Homepage', component: Homepage},
    // {path: '/index', name: 'index', component: index},

  ]
})
