import Vue from 'vue'
import Router from 'vue-router'
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'


// import index from '@/components/index'
import Login from '@/components/login'
import Homepage from '@/components/Homepage'
import Register from '@/components/Register'
import Pay from '@/components/Pay'

import Vueresource from "vue-resource"
import VueClipboard from 'vue-clipboard2'

Vue.use(Router)
Vue.use(Homepage)
Vue.use(Vueresource)
Vue.use(IScrollView, IScroll)
Vue.use(Login)
Vue.use(Register)
Vue.use(Pay)


export default new Router({
  routes: [
    {path: '/', name: 'Pay', component: Pay},
    // {path: '/', name: 'login', component: Login},
    {path: '/Register', name: 'Register', component: Register},
    {path: '/Homepage', name: 'Homepage', component: Homepage},
    {path: '/Pay', name: 'Pay', component: Pay},
    // {path: '/index', name: 'index', component: index},

  ]
})
