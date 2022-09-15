<template>
  <div class="container">
    <div class="form">
      <div class="imgcont">
        <img src="../assets/logo1.png" alt="logo" />
      </div>
      <div class="links">
        <router-link to="usersignup">SignUp as a User</router-link>
        <router-link to="vendorsignup">SignUp as a Logistic Firm</router-link>
      </div>
      <p>
        Already have an account?
        <span class="link"><a href="#">Login</a> </span>
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
</script>

<style scoped>
.container {
  width: 50%;
  margin: 20px auto;
  padding: auto;
  height: 500px;
  text-align: center;
}
.form {
  padding-top: 50px;
  font-family: Open Sans;
}
.imgcont {
  background: #fbfaff;
  padding: 50px 10px;
  border-radius: 200px;
  width: 25%;
  height: 70px;
  margin: auto;
}
.links a {
  display: block;
  margin: 30px auto;
  padding: 20px 0px;
  width: 80%;
  background: #fae7b7;
  color: #12036b;
  font-family: Open Sans;
  font-weight: bold;
  font-size: 20px;

  text-decoration: none;
}
.link a {
  color: #12036b;
  text-decoration: none;
  font-weight: bold;
}

@media only screen and (max-width: 600px) {
  .container {
    width: 100%;
  }
  .imgcont {
    padding: 50px 10px;
    border-radius: 200px;
    width: 50%;
    height: 70px;
    margin: auto;
  }
}
</style>