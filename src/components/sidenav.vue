<template>
  <div class="sidenav">
    <ul>
      <router-link to="admin"><li>Dashboard</li></router-link>

      <router-link to="#"><li>Wallet </li></router-link>
      <router-link to="adminmessage"><li>Message <span class="num">5</span></li></router-link>
      <router-link to="report"><li>Report <span class="num">5</span></li></router-link>
      <router-link to="unread"><li>Unread Message <span class="num">3</span></li></router-link>

      <router-link to="agreement"><li>Agreement Form <span class="num">2</span></li></router-link>
      <router-link to="trade"><li>Successfiul Trade <span class="num">2</span></li></router-link>
    </ul>
  </div>
</template>

<style scoped>
.sidenav ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
}

.sidenav ul a {
  text-decoration: none;
}
.sidenav li {
  margin: 15px 20px;
  padding: 20px;
  color: #2a07f8;
  background: #eae6fe;
  border-radius: 5px;
  text-align: center;
}
.sidenav li:hover {
  background: #2a07f8;
  color: white;
}

.num {
    background: white;
    padding: 8px 14px;
    border-radius: 8px;
    color: #2a07f8;
}
</style>