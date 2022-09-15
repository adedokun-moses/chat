<template>
  <div>
    <Nav />
  </div>
  <div class="main">
    <div style="flex-basis: 30%">
      <Side />
    </div>
    <div style="flex-basis: 80%">
      <div class="agreementform" v-for="det in details" :key="det.id">
       
        
          <h4> <span class="name"><span class="namelog"> HI</span> {{det.name}}</span>
            {{ det.agreement }}</h4>
     
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
          name: "Hassan Idris",
          agreement: "Good morning, i want to send goods from ikeja to alimosho",
          message: " Lagos, Abuja, Ogun",
        },
        {
          id: 2,
           name: "Hassan Idris",
          agreement: "Good morning, i want to send goods from ikeja to alimosho",
          message: " Lagos, Abuja, Ogun",
        },
        {
          id: 3,
           name: "Hassan Idris",
          agreement: "Kayode Bamidele Filled Agreement Form",
          message: " Lagos, Abuja, Ogun",
        },
        {
          id: 4,
           name: "Hassan Idris",
          agreement: "Good morning, i want to send goods from ikeja to alimosho",
          message: " Lagos, Abuja, Ogun",
        },
        {
          id: 5,
           name: "Hassan Idris",
          agreement: "Good morning, i want to send goods from ikeja to alimosho",
          message: " Lagos, Abuja, Ogun",
        },
        {
          id: 6,
           name: "Hassan Idris",
          agreement: "Good morning, i want to send goods from ikeja to alimosho",
          message: " Lagos, Abuja, Ogun",
        },
      ],
    };
  },
};
</script>


<style scoped>
.main {
  display: flex;
  background: #f5f5f5;
  height: 100vh;
}
.agreementform{
    padding-top: 8px;
}
.name{
    display: block;
    margin: 10px 0px 10px 0px;
}
.namelog{
    background: #2106C6;
    padding: 10px;
    border-radius: 14px;
}
.agreementform h4{
   background: #EAE6FE;
    padding: 20px;
    margin: 10px;
    font-size: 15px;
    width: 70%;
}
</style>