import axios from 'axios';
import { createStore } from 'vuex';



if (sessionStorage.getItem("login_token")) {
    let token = sessionStorage.getItem("login_token")
    setAuthHeader(token)
}

export default createStore({
    state: {
        baseUrl: process.env.VUE_APP_CHATTEL_API ? process.env.VUE_APP_CHATTEL_API : "",
        firstname: '',
        surname: '',
        gender: '',
        address: '',
        state: '',
        country: '',
        city: '',
        postcode: '',
        password: '',
        password_confirmation: '',
        email: '',
        phone_no: '',
    },
    getters: {
    },
    mutations: {

        /*    SIGN_UP(state, params) {
                   axios.post(state.params +/api/user_auth/register, params).then((responce) => {
                       console.log(responce.data)
                   })
           },
    *//* 
               LOG_IN(state, params){
                   axios.post(state.params,'/api/user_auth/login', params).then((res) => {
                       console.log(res.data)
                   }).catch(error => {
                       if(error.res){
                           console.log(error.res.data)
                       }
                   })
               } */

    /*     login() {
            var params = new FormData();
            params.append("email", this.email);
            params.append("password", this.password);
            // this.$store.dispatch('login', params)
            if (this.email == "") {
                alert("Email can not be empty, input your mail");
                return false;
            }
            if (this.password == "") {
                alert("Password can not be empty, input your mail");
                return false;
            }

            axios
                .post("/api/user_auth/login", params)
                .then((res) => {
                    console.log(res.data);
                    let result = res.data
                    if (result.success) {
                        sessionStorage.getItem('login_token', result.token)
                        this.$router.push("dashboard");
                    }
                })
                .catch((error) => {
                    if (error.res) {
                        console.log(error.res.data);
                    }
                });


        }, */
    },
    actions: {
        async login({ commit }, payload) {
            commit('LOG_IN', payload)
        }

    },
    modules: {
    }
})
