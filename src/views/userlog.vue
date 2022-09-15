<template>
  <div class="container">
    <div class="display"></div>
    <div>
      <div class="form">
        <img src="../assets/logo1.png" />
        <h5>Login To Your Chattel Account</h5>
        <div class="formgroup">
          <label>Email</label>
          <input type="email" />
        </div>
        <div class="formgroup">
          <label>Password</label>
          <input type="password" />
        </div>
        <h4><router-link to="/">Forgot Password?</router-link></h4>
        <button @click="login()">Log In</button>
        <p>
          Not a User?<span class="login"
            ><router-link to="/log"> Login as a logistics firm</router-link></span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   methods: {
        login(){
            this.$router.push('/dashboard')
        }
   }
}
</script>
<style scoped>
.container {
  display: flex;
}
.container > div {
  width: 100%;
}
.display {
  background: rgba(217, 217, 217, 0.5);
  height: 100vh;
}

.form {
  width: 80%;
  margin: 70px auto;
  height: 500px;
}
.form img {
  display: block;
  margin: auto;
}
.form h5 {
  text-align: center;
  margin: 35px;
}
.form h5 {
  color: #12036b;
  font-size: 30px;
  font-family: "Opera SF";
  font-style: normal;
  font-weight: bold;
}
.formgroup {
  width: 72%;
  display: block;
  margin: 20px auto;
}
.formgroup label {
  display: block;
  margin: 10px 0px;
  font-weight: bold;
}
.formgroup input {
  width: 98%;
  padding: 15px 5px;
  outline: none;
  border: none;
  background: #e7e6e6;
}
.form h4,
a {
  text-align: right;
  margin-right: 36px;
  text-decoration: none;
}
.form button {
  width: 72%;
  margin: 0px 78px;
  padding: 20px 10px;
  background: #12036b;
  outline: none;
  border: none;
  color: white;
  font-weight: bolder;
}
.form p {
    text-align: center;
    font-family: open sans;

}
.login a{
    font-weight: bolder;
    color: #12036b;

}
@media only screen and (max-width: 600px){
  .container {
 flex-direction: column;
}
  .display{
    display: none;
  }

.form {
  width: 100%;
  margin: 30px auto;
  height: 500px;
}

.form button {
  display:block;
  width: 73%;
  margin: auto;
  padding: 20px 10px;
  background: #12036b;
  outline: none;
  border: none;
  color: white;
  font-weight: bolder;
}
}
</style>