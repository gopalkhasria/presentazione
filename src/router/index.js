import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Redirect from '../views/Redirect.vue'
import Gopher from '../components/gopher.vue'
import Slide2 from '../views/Slide_2.vue'
import Slide3 from '../views/Slide_3.vue'
import Slide4 from '../views/Slide_4.vue'
import Slide5 from '../views/Slide_5.vue'
import Storia from  '../views/Storia.vue'
import Problemi from '../views/Problemi.vue'

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
    name: 'Storia',
    component: Storia,
  },
  {
    path: '/2',
    name: 'Problemi',
    component: Problemi,
  },
  {
    path: '/3',
    name: 'Slide2',
    component: Slide2,
  },
  {
    path: '/4',
    name: 'Gopher',
    component: Gopher,
  },
  {
    path: '/5',
    name: 'Slide3',
    component: Slide3,
  },
  {
    path: '/6',
    name: 'Slide4',
    component: Slide4,
  },
  {
    path: '/7',
    name: 'Slide5',
    component: Slide5,
  },
]

const router = new VueRouter({
  routes
})

export default router
