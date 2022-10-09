import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/content',
    name: 'content',
    props:true,
    component: () => import("../views/ContentView.vue"),
    
  },
  {
    path: '/section',
    name: 'section',
    props:true,
    component: () => import("../views/SectionView.vue"),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/LoginView.vue"),
    children:[
     
    ]
  },
  { 
    path:'/registerLogin',
    name:'registerLogin',
    component: () => import("../views/RegisterLoginView.vue"),
    },
    { 
      path:'/register',
      name:'register',
      component: () => import("../views/RegisterView.vue"),
      }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
