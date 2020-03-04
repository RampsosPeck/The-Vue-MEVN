import Vue from 'vue'
import VueRouter from 'vue-router'

//var firebase = require("firebase/app");
import { auth } from "@/firebase";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/ingreso',
    name: 'ingreso',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ingreso.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

    const user = auth.currentUser;

    if(to.matched.some(record => record.meta.requiresAuth)){

        if(user){
          next()
        }else{
          next({name:'ingreso'})
        }

    }else {
      next()
    }
})

export default router
