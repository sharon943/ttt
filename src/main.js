// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import VueQuillEditor from 'vue-quill-editor'

import './assets/css/iconfont.css'
import './assets/css/index.css'


// import Distpicker from 'v-distpicker'
// import QRCode from 'qrcodejs2'
// Vue.component('v-distpicker', Distpicker)
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.http.options.emulateJSON = true
// Vue.use(iView);


// Vue.use(VueQuillEditor)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  template: '<App/>',
  components: { App }
})
