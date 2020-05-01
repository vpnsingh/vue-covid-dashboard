import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './core/routing'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import './core/apptheme.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.use(VueRouter)
Vue.use(VueMaterial)

const router = new VueRouter({
  routes : Routes
})

  
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
