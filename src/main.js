import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


//引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//注册cookie
import jsCookie from 'js-cookie';
Vue.prototype.$cookie = jsCookie;



import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}


//注册api
import * as api from './api';
Vue.prototype.$api = api;

//引入js
import './assets/js/flexible.min.js'



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
