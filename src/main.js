import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import axios from "axios"
import router from './router'
import Store from './store/index'

Vue.config.productionTip = false

axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/vuejs-http-63cdc/databases/(default)/documents"


// const interceptorsRequest = 
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// const interceptorsResponse = 
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

// console.log(interceptorsRequest)

// axios.interceptors.request.eject(interceptorsRequest)


new Vue({
  router,
  Store,
  Vuex,
  render: h => h(App),
}).$mount('#app')
