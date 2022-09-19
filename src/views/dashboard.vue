<template>
  <div class="main_container">
    <div style="flex-basis: 30%; height: 100vh">
      <Nav />
    </div>
    <div style="flex-basis: 80%">
      <div class="top_details">
        <h4>
          <span class="name">Hi Afeez</span> <br />
          Available logistics company
          <span style="margin-left: 30rem"><i class="fa fa-bell"></i></span>
        </h4>
      </div>
      <div class="companygroup">
        <div class="search">
          <input type="text" placeholder="Search Company" />
          <select>
            <option>Filter</option>
            <option>By Online</option>
            <option>By Location</option>
            <option>By Region</option>
          </select>
        </div>
        <div class="groups">
          <div class="group_det" v-for="det in details" :key="det.id">
            <router-link :to="{ name: 'groupinfo', params: { id: det.id } }">
              <div class="group_logo">
                <h3>DG</h3>
                <h4>
                  <!-- Devoron Group -->
                  {{ det.compname }}
                  <span style="margin-left: 100px">{{ det.status }}</span>
                  <br />
                  <span style="font-size: 12px"
                    >Covered Area: {{ det.areas }}</span
                  >
                </h4>
              </div>
              <div class="online">
                <h5>
                  <i class="fa fa-bell" style="margin-right: 10px">
                    {{ det.toprate }}</i
                  >
                  <i class="fa fa-bell" style="margin-left: 10px">
                    {{ det.lowrate }}</i
                  >
                  <span style="margin-left: 10px">{{ det.rate }}</span>
                  <span style="margin-left: 10px">
                    Maximum: {{ det.kg }} kg</span
                  >
                </h5>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import Nav from "../components/nav.vue";
import axios from "axios";

export default {
  components: { Nav },
  data() {
    return {
      details: [],
    };
  },
  methods: {
    fetchLogistic() {
      axios
        .get("/api/user_auth/logistic_list")
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },

  mounted(){
    this.fetchLogistic()
  }
  /* 
    async created() {
    try {
      const res = await axios.get("/api/user_auth/logistic_list");
      this.details = res.data;
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }, */
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
  margin: 20px;
  font-size: 30px;
}
.name {
  color: #0e2558;
}

.companygroup {
  width: 80%;
  margin: auto;
}
.search {
  margin-top: 50px;
}
.search input {
  width: 60%;
  padding: 20px;
  margin: 10px;
  border: 3px solid #153376;
  border-radius: 20px;
  outline: none;
}
.search select {
  color: #0a2155;
  font-size: 20px;
  border: none;
  outline: none;
}
.groups {
  display: flex;
  flex-wrap: wrap;
}
.groups > div {
  margin: 10px;
  width: 40%;
  background: ;
  padding: 30px 5px;
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.4);
  box-shadow: 2px 1px 2px rgba(217, 217, 217, 0.4);
}
.group_det {
  display: flex;
  flex-wrap: wrap;
  margin: 0px;
}
.group_det a {
  text-decoration: none;
  color: black;
}
.group_det a:hover {
  color: black;
}
.group_det h3,
h5 {
  margin: 0px;
}
.group_logo {
  display: flex;
}
.group_logo h3 {
  background: #0a2155;
  color: white;
  padding: 5px 10px;
  border-radius: 10px;
}
.group_logo h4 {
  margin: 0px 10px;
}
.online h5 {
  margin-top: 20px;
}
</style>
