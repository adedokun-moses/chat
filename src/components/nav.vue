<template>
  <div class="container">
    <img src="../assets/logo1.png" />
    <ul>
      <router-link to="#"
        ><li>
          <i class="fa fa-home"></i> Dashboard
        </li></router-link>

       <router-link to="#"
        ><li>
          <i class="fa fa-money"></i> Wallet
        </li></router-link>
      <router-link to="#"
        ><li>
          <i class="fa fa-cart"></i> My Orders
        </li></router-link>
    </ul>
  </div>
</template>


<style scoped>
.container {
  background: #fbfaff;
  height: 100vh;
  text-align: center;
  position: fixed;
  z-index: 1;
  width: 27.5%;
}
.container img {
  margin: 30px 0px;
}
.container ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
}
.container ul a{
    text-decoration: none;
}
.container li {
  margin: 15px 20px;
  padding: 20px;
  background: #fbfaff;
  border: 2px solid #153376;
  border-radius: 30px;
  text-align: center;
}
</style>