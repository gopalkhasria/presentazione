import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VuePageTransition from 'vue-page-transition'

require('vue2-animate/dist/vue2-animate.min.css')

Vue.config.productionTip = false

Vue.use(VuePageTransition)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
