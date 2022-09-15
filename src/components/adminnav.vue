<template>
  <div class="nav">
    <h4><router-link to="admin"> CopperEagle Logistics</router-link></h4>
    <div>
      <i class="fa fa-bell"> <span class="digit">5</span></i>
    </div>
  </div>

</template>


<style scoped>
.nav {
  background: white;
  width: 100%;
  overflow: auto;
  margin: 0px;
  padding: 0px;
  height: 80px;
  font-size: 30px;

}
.nav i {
  float: right;
  padding: 15px;
  margin-right: 30px;
}
.nav h4 {
  float: left;
  margin: 0px;
  padding: 15px;
}
.nav a {
  text-decoration: none;
  color: black;
}
.digit{
    background: #F0BA2C;
    padding: 10px 13px;
    margin-left: 8px;
    border-radius: 13px;
}
</style>