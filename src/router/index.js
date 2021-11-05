import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Area from '../views/Area.vue'
import Exit from '../views/Exit.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/area/:id',
    name: 'area',
    component: Area
  },
  {
    path: '/exit',
    name: 'exit',
    component: Exit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
