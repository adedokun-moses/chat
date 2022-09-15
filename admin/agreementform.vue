<template>
  <div>
    <Nav />
  </div>
  <div class="main">
    <h4>
      <router-link to="/adminmessage"
        ><i
          class="fa fa-angle-left"
          style="margin-right: 20px"
        ></i></router-link
      >Agreement Form
    </h4>

    <div class="agreementform" v-for="det in details" :key="det.id">
        <router-link :to="{ name: 'agreementdet', params: { id: det.id } }">
               <h4><i class=" fa fa-bell"></i> {{ det.agreement }}</h4>
        </router-link>
   
    </div>
  </div>
</template>

<script>
import Nav from "../src/components/adminnav.vue";

export default {
  components: { Nav },
   data() {
    return {
      details: [
        {
            id: 1,
          agreement: "Kayode Bamidele Filled Agreement Form",
          message: " Lagos, Abuja, Ogun",
        
        },
       {
            id: 2,
          agreement: "Kayode Bamidele Filled Agreement Form",
          message: " Lagos, Abuja, Ogun",
        
        },
           {
            id: 3,
          agreement: "Kayode Bamidele Filled Agreement Form",
          message: " Lagos, Abuja, Ogun",
        
        },
           {
            id: 4,
          agreement: "Kayode Bamidele Filled Agreement Form",
          message: " Lagos, Abuja, Ogun",
        
        },
           {
            id: 5,
          agreement: "Kayode Bamidele Filled Agreement Form",
          message: " Lagos, Abuja, Ogun",
        
        },
           {
            id: 6,
          agreement: "Kayode Bamidele Filled Agreement Form",
          message: " Lagos, Abuja, Ogun",
        
        }
      
      ]
    }
   }
};
</script>

<style scoped>
.main {
  background: #f5f5f5;
  height: 100vh;

}
.main h4 {

    margin-left: 90px;
  font-size: 20px;
  padding-top: 30px;
}
.agreementform{
    width: 80%;
    margin: auto;
}
.agreementform h4{
    background: white;
    padding: 15px;
    margin: 10px;
    font-size: 15px;
    width: 60%;
}
.agreementform h4:hover{
    background:   #2a07f8;
    padding: 15px;
    margin: 10px;
    font-size: 15px;
    width: 60%;
    color: white;
}

.agreementform a{
    text-decoration: none;
    color: black;
}



</style>