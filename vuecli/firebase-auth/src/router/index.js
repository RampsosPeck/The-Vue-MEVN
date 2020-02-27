import Vue from 'vue'
import VueRouter from 'vue-router'
var firebase = require("firebase/app");

Vue.use(VueRouter)

const routes = [
  {
    path: '/registro',
    name: 'registro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
  },
  {
    path: '/',
    name: 'inicio',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue'),
    meta: { requiresAuth: true}
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
    //Si la ruta esta protegida /false / true
    const rutaProtegida = to.matched.some(record => record.meta.requiresAuth)
    //si el usuario se registro false / true
    const user = firebase.auth().currentUser;

    //Si el usuario tiene ruta protegida
    if(rutaProtegida === true && user === null){
      next({name:'ingreso'})
    }else{
      next()
    }
})

export default router
