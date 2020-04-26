import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Cart from '../views/Cart.vue'
import Detail from '../views/Detail.vue'
import Category from '../views/Category.vue'
import Mine from '../views/Mine.vue'
import Regist from '../views/Regist.vue'
import Search from '../views/Search.vue'
import Login from '../views/Login.vue'
import SearchEnd from '../views/SearchEnd.vue'






Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
	meta : {
		showtaber : true
	}
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
	
  },
  {
    path: '/regist',
    name: 'Regist',
    component: Regist,
  	
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
	
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
	
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine,
	
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,

  },
  {
    path: '/searchend',
    name: 'SearchEnd',
    component: SearchEnd,
  
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  	
  },
  // {
  //   path: '/search/list',
  //   name: 'SearchEnd',
  //   component: SearchEnd,
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes,
  // scrollBehavior : function(t,f,seaveposition) {
	 //  return {
		//   x : 0,
		//   y : 0
	 //  }
  // }
})

//导航守卫 全局导航守卫  t : to到哪里了，f : from来自那里， next : 下一此跳转
// router.beforeEach( (t,f,next) => {
// 	if(t.meta.auth) {
// 		let logined = jsCookie.get('username');
// 		if(logined) {
// 			next();
// 		}else {
// 			next('/login?next=' + t.path);
// 		}
// 	}else {
// 		next();
// 	}
// })
export default router
