import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "@/assets/css/app-style.css"
import router from '@/router/router'
import axios from "axios";


Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:9000'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
