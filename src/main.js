import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import axios from 'axios'
import setAuthHeader from './store/headetAuth'


if (sessionStorage.getItem("token") & sessionStorage.getItem("token") != "" & sessionStorage.getItem("token") != "undefine") {
    let token = sessionStorage.getItem("token")
    setAuthHeader(token)
}

createApp(App).use(store).use(router).mount('#app')
