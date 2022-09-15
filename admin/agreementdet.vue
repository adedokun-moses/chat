<template>
  <div>
    <Nav />
  </div>
  <div class="main">
    <h4>
      <router-link to="/agreement"
        ><i
          class="fa fa-angle-left"
          style="margin-right: 20px"
        ></i></router-link
      >Agreement Form
    </h4>
    <div class="agreementform">
        <h5>Customer name: Kayode Bamidele</h5>
        <h5>Description of goods: A bag of clothes and shoes</h5>
        <h5>Pick-up Address: Ayinde Avenue Ajah</h5>
        <h5>DestinationAddress: Ibadan, Oyo State</h5>
        <button style="background: #12036B; color: white;">Accept</button>
        <button>Decline</button>
    </div>
  </div>
</template>

<script>
import Nav from "../src/components/adminnav.vue";
export default {
  components: { Nav },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
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
.agreementform {
  width: 80%;
  margin: auto;
}
.agreementform {
  background: white;
  padding: 15px;
  margin: 10px auto;
 
  border-radius: 8px;
  width: 35%;
}

.agreementform button{
    width: 40%;
    margin: 10px 20px;
    padding: 20px;
    outline: none;
    border: blue 1px solid;
    border-radius: 5px;
    background: white;


}
</style>