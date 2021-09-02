import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Redirect from '../views/Redirect.vue'
import Slide1 from '../views/Slide_1.vue'
import Slide2 from '../views/Slide_2.vue'
import Slide3 from '../views/Slide_3.vue'
import Slide4 from '../views/Slide_4.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Redirect',
    component: Redirect
  },
  {
    path: '/1',
    name: 'Slide1',
    component: Slide1,
  },
  {
    path: '/2',
    name: 'Slide2',
    component: Slide2,
  },
  {
    path: '/3',
    name: 'Slide3',
    component: Slide3,
  },
  {
    path: '/4',
    name: 'Slide4',
    component: Slide4,
  },
]

const router = new VueRouter({
  routes
})

export default router
