import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* import axios from 'axios' */
import setAuthHeader from './store/headetAuth'


if (sessionStorage.getItem("login_token")){
    let token = sessionStorage.getItem("login_token")
    setAuthHeader(token)
}

createApp(App).use(store).use(router).mount('#app')
