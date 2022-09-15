<template>
  <div class="main_container">
    <div style="flex-basis: 30%; height: 100vh;">
      <Nav />
    </div>
    <div style="flex-basis: 80%">
      <div class="top_details">
        <h4>
          <span class="name"><router-link to="chat"><i class="fa fa-bell"></i></router-link></span>

          <span style="margin-left: 50rem"><i class="fa fa-bell"></i></span>
        </h4>
      </div>
      <div class="formcontainer">
        <form >
          <h5>Agreement Form</h5>
          <div class="form_group">
            <label>Amount</label>
            <input type="text" />
          </div>

          <div class="form_group">
            <label>Nature of Goods</label>
            <input type="text" />
          </div>
          <div class="form_group">
            <label>Pick-Up address</label>
            <input type="text" />
          </div>
          <div class="form_group">
            <label>Destination Address</label>
            <input type="text" />
          </div>
        
        </form>
        <div><label><Payment/></label></div>
      </div>
    </div>
  </div>
</template>
<script>
import Nav from "../components/nav.vue";
import Payment from '../components/paymentmodal.vue'
export default {
  components: { Nav, Payment },
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
.form_group label {
  color: #000000;
}

.form_group input {
  display: block;
  width: 100%;
  margin: 10px 0px;
  padding: 20px 5px;
  outline: none;
  background: #ffffff;
  border: none;
}
.form_group button {
  display: block;
  width: 80%;
  margin: 10px 0px;
  padding: 20px;
  background: #12036b;
  border-radius: 8px;
  color: white;
  border: none;
  outline: none;
}
</style>