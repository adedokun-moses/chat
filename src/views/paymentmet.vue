<template>
  <div class="main_container">
    <div style="flex-basis: 30%; height: 100vh;">
      <Nav />
    </div>
    <div style="flex-basis: 80%">
      <div class="top_details">
        <h4>
          <span class="name"
            ><router-link to="chat"><i class="fa fa-bell"></i></router-link
          ></span>

          <span style="margin-left: 50rem"><i class="fa fa-bell"></i></span>
        </h4>
      </div>
      <div class="formcontainer">
        <form>
          <h5>Payment Method</h5>
          <div class="form_group">
            <router-link to="cardpay">Pay With Card</router-link>
          </div>

          <div class="form_group">
            <router-link to="walletpay">Pay With Wallet</router-link>
          </div>
          <div class="form_group">
            <router-link to="cashpay">Pay With Cash </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Nav from "../components/nav.vue";
export default {
  components: { Nav },
  setup() {},
};
</script>

<style scoped>
.main_container {
  display: flex;
  margin: 0px;
}
.top_details {
  border-bottom: 2px solid grey;
}
.top_details h4 {
  margin: 30px;
  font-size: 30px;
}
.formcontainer {
  width: 90%;
  margin: auto;
  background: rgba(217, 217, 217, 0.3);
  height: 520px;
}
.formcontainer h5 {
  font-size: 20px;
  padding-top: 20px;
  color: #000000;
}
form {
  width: 70%;
  margin: auto;
}
.form_group a {
    display: block;
  color: #000000;
  background: white;
  padding: 20px 10px;
  margin: 10px;
  text-decoration: none;
  border-radius: 8px;
}
.form_group a:hover{
    border: 1px solid #000000;
}


</style>