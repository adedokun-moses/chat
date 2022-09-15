<template>
  <div>
    <Nav />
  </div>
  <div class="main">
    <div style="flex-basis: 30%">
      <Side />
    </div>
    <div style="flex-basis: 80%">
      <div class="message" v-for="message in details" :key="message.id">
        <router-link   :to="{ name: 'adminchat', params: { id: message.id } }">
              <h4>{{message.notification}}</h4>
        </router-link>
      
      </div>
    </div>
  </div>
</template>


<script>
import Nav from "../src/components/adminnav.vue";
import Side from "../src/components/sidenav.vue";
export default {
  components: { Nav, Side },
  data() {
    return {
      details: [
        {
            id: 1,
          notification: "Taiwo Idowu sent a message",
          message: " Lagos, Abuja, Ogun",
        
        },
       {
            id: 2,
          notification: "Taiwo Idowu sent a message",
          message: " Lagos, Abuja, Ogun",
        
        },
           {
            id: 3,
          notification: "Taiwo Idowu sent a message",
          message: " Lagos, Abuja, Ogun",
        
        },
           {
            id: 4,
          notification: "Taiwo Idowu sent a message",
          message: " Lagos, Abuja, Ogun",
        
        },
           {
            id: 5,
          notification: "Taiwo Idowu sent a message",
          message: " Lagos, Abuja, Ogun",
        
        },
           {
            id: 6,
          notification: "Taiwo Idowu sent a message",
          message: " Lagos, Abuja, Ogun",
        
        },
           {
            id: 7,
          notification: "Taiwo Idowu sent a message",
          message: " Lagos, Abuja, Ogun",
        
        },
      ]
    }
  }
};
</script>

<style scoped>
.main {
  display: flex;
  background: #f5f5f5;
  height: 100vh;
}
.message h4 {
  background: white;
  padding: 15px;
  width: 70%;
}
.message a{
    text-decoration: none;
    color: #000000;
}
</style>