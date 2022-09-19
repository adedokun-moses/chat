<template>
  <div class="form">
    <form>
      <div class="logo">
        <img src="../assets/logo1.png" alt="logo" />
        <h5>Sign Up</h5>
      </div>

      <div class="formgroup">
        <div class="form_det">
          <label>First Name <span style="color: red">*</span></label>
          <input type="text" v-model="firstname" required />
        </div>
        <div class="form_det">
          <label>Last Name <span style="color: red">*</span></label>
          <input type="text" v-model="surname" required />
        </div>
      </div>
      <div class="formgroup">
        <div class="form_det">
          <label>Email <span style="color: red">*</span></label>
          <input type="email" v-model="email" required />
        </div>
        <div class="form_det">
          <label>Phone Number <span style="color: red">*</span></label>
          <input type="text" v-model="phone_no" required />
        </div>
      </div>
      <div class="gender">
        <label>Gender</label>
        <select v-model="gender">
          <option>-Select Gender-</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>

      <div class="formgroup">
        <div class="form_det">
          <label>Street Address</label>
          <input type="text" v-model="address" />
        </div>
        <div class="form_det">
          <label>City</label>
          <input type="text" v-model="city" />
        </div>
      </div>

      <div class="formgroup">
        <div class="form_det">
          <label>Country</label>
          <input type="text" v-model="country" />
        </div>
        <div class="form_det">
          <label>State</label>
          <input type="text" v-model="state" />
        </div>
      </div>

      <div class="formgroup">
        <div class="form_det">
          <label>Postal Code</label>
          <input type="text" v-model="postcode" />
        </div>
        <div class="form_det">
          <label>Country Code</label>
          <input type="text" v-model="countrycode" />
        </div>
      </div>

      <div class="formgroup">
        <div class="form_det">
          <label>Password <span style="color: red">*</span></label>
          <input type="password" v-model="password" />
        </div>
        <div class="form_det">
          <label>Confirm Password <span style="color: red">*</span></label>
          <input type="password" v-model="password_confirmation" />
        </div>
      </div>

      <div class="button">
        <button @click.prevent="signup()">Sign Up</button>
        <p>
          Already have an account?
          <span class="login"
            ><router-link to="/userlog">Login</router-link></span
          >
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      firstname: "",
      surname: "",
      gender: "",
      postcode: "",
      email: "",
      password_confirmation: "",
      password: "",
      phone_no: "",
      state: "",
      address: "",
      city: "",
      country: "",
      countrycode: "",
    };
  },
  methods: {
    signup() {
      var params = new FormData();
      params.append("firstname", this.firstname);
      params.append("surname", this.surname);
      params.append("gender", this.gender);
      params.append("postcode", this.postcode);
      params.append("password", this.password);
      params.append("password_confirmation", this.password_confirmation);
      params.append("state", this.state);
      params.append("country", this.country);
      params.append("city", this.city);
      params.append("countrycode", this.countrycode);
      params.append("email", this.email);
      params.append("address", this.address);
      params.append("phone_no", this.phone_no);
      // this.$store.dispatch('login', params)
      axios
        .post("/api/user_auth/register", params)
        .then((res) => {
          //let res = res.data;
          if (res.status == "success") {
            this.$router.push("admin");
          } else {
            alert("User already exist");
          }
        })  .catch((error) => {
          if (error.res) {
            console.log(error.res.data);
          }
        });

      /*   this.$router.push("admin"); */
    },
  },
};
</script>



<style scoped>
.form {
  width: 80%;
  margin: auto;
}

.logo {
  text-align: left;
  margin-top: 20px;
}
.logo h5 {
  margin: 0px;
  font-size: 30px;
  font-weight: bold;
  color: #12036b;
}
.formgroup {
  margin: 10px 0px;
  width: 100%;
  display: flex;
}
.formgroup > div {
  width: 100%;
  margin: 0px 40px 0px 0px;
}
.form_det input {
  width: 100%;
  margin: 0px 0px 10px;
  padding: 15px 5px;
  outline: none;
  background: #e7e6e6;
  border: none;
}
.form_det label {
  display: block;
  margin: 10px 0px;
  font-family: "Opera SF";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
}
.gender label {
  display: block;
  margin: 10px 0px;
  font-family: "Opera SF";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
}
.gender select {
  width: 97%;
  padding: 15px 5px;
  outline: none;
  background: #e7e6e6;
  border: none;
}
.button {
  width: 60%;
  margin: auto;
  text-align: center;
}

.button button {
  background: #12036b;
  padding: 15px;
  outline: none;
  border: none;
  border-radius: 5px;
  font-weight: bolder;
  color: white;
  font-family: Opera SF;
  width: 100%;
}
.login a {
  color: #12036b;
  text-decoration: none;
  font-weight: bold;
}

@media only screen and (max-width: 600px) {
  .logo {
    text-align: center;
    margin-top: 20px;
  }
  .formgroup {
    flex-direction: column;
  }

  .gender select {
    width: 100%;
    padding: 15px 8px;
    outline: none;
    background: #e7e6e6;
    border: none;
  }
}
</style>