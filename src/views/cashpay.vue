<template>
  <div class="main_container">
    <div style="flex-basis: 30%; height: 100vh;">
      <Nav />
    </div>
    <div style="flex-basis: 80%">
      <div class="top_details">
        <h4>
          <span class="name"
            ><router-link to="payment"><i class="fa fa-bell"></i></router-link
          ></span>

          <span style="margin-left: 50rem"><i class="fa fa-bell"></i></span>
        </h4>
      </div>
      <div class="formcontainer">
        <form>

          <div class="form_group">
            <label>Amount</label>
            <input type="text" />
          </div>
            <div class="form_group">
              <button>PROCEED</button>
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
  margin: 20px auto;
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
  padding-top: 80px;
}
.form_group label {
  color: #000000;
  margin: 20px 0px;
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
.group {
  display: flex;
}
.group > div {
  width: 100%;
  margin: 0px 0px;
}
.group_input input {
  width: 90%;
}
.form_group button {
  display: block;
  width: 100%;
  margin: 60px 0px;
  padding: 20px;
  background: #12036b;
  border-radius: 8px;
  color: white;
  border: none;
  outline: none;
  font-weight: bold;
}
</style>