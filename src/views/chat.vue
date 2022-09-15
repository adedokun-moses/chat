<template>
  <div class="main_container">
    <div style="flex-basis: 30%" class="nav">
      <Nav />
    </div>
    <div style="flex-basis: 80%">
      <div class="top_details">
        <h4>
          <span class="name"><i class="fa fa-bell"></i></span>

          <span style="margin-left: 50rem"><i class="fa fa-bell"></i></span>
        </h4>
      </div>
      <div class="groupchat">
        <div class="group_agreement">
          <div>
            <h5><span class="admin">DG</span> Dareen Group</h5>
          </div>
          <div class="agreement">
            <router-link to="/agreement_">Agreement </router-link>

            <div class="dropdown">
              <h5 class="dropbtn">:::</h5>
              <div class="dropdown-content">
                <a><Pay /></a>
                <a><Goods /></a>
                <a><Report /></a>
                <a><Escrow /></a>
              </div>
            </div>
          </div>
        </div>
        <div class="user">
          <div class="admin_msg">
            <h5>DT</h5>
            <h4>welcome to denon</h4>
          </div>
          <div class="admin_msg">
            <h5>DT</h5>
            <h4>What can we offer you?</h4>
          </div>
          <div class="user_msg">
            <h5 style="margin: 0px 20px">OT</h5>
            <h4>wanna send a document from ebutemetta to otto</h4>
          </div>
          <div class="user_msg">
            <h5 style="margin: 0px 20px">OT</h5>
            <h4>How much will it cost</h4>
          </div>

          <div class="admin_msg">
            <h5>DT</h5>
            <h4>kindly send picture of goods will tell you the price</h4>
          </div>
          <div class="user_msg">
            <h5 style="margin: 0px 20px">OT</h5>
            <h4><img src="../assets/logo.png" /></h4>
          </div>

          <div class="admin_msg">
            <h5>DT</h5>
            <h4>#1000, kindly fill the agreement form</h4>
          </div>
        </div>

        <div class="messagebox">
          <input type="text" placeholder="Send a message" />
          <div class="replybox">
            <i class="fa fa-image"> image</i>
            <i class="fa fa-video"> video</i>
            <button @click="chat()">Reply</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/nav.vue";
import Payment from "../components/paymentmodal.vue";
import Goods from "../components/goods.vue";
import Pay from "../components/pay.vue";
import Escrow from "../components/escrow.vue";
import Report from '../components/reports.vue'
export default {
  components: { Nav, Payment, Goods, Pay, Escrow,Report },
};
</script>


<style scoped>
.main_container {
  display: flex;
  margin: 0px;
}

.top_details {
  background: white;
  border-bottom: 2px solid grey;
  position: fixed;
  z-index: 1;
  width: 100%;
}
.top_details h4 {
  margin: 30px;
  font-size: 30px;
}
.groupchat {
  background: rgba(217, 217, 217, 0.15);
  width: 95%;
 margin: 90px 0px 0px 30px;
  
}
.group_agreement {
  display: flex;
  align-items: center;
}
.group_agreement > div {
  width: 100%;
}
.group_agreement h5 {
  font-size: 20px;
  font-weight: bold;
}
.admin {
  background: #000000;
  padding: 15px 15px;
  margin: 0px 10px;
  border-radius: 50px;
  color: white;
}
.agreement {
  display: flex;
  align-items: center;
  margin-left: 40%;
}

.agreement a {
  background: white;
  padding: 10px 30px;
  font-size: 20px;
  width: 35%;
  margin-left: 30%;
  text-align: center;

  border-radius: 10px;
  text-decoration: none;
}
.agreement h5 {
  margin-left: 10px;
}

.user_msg {
  display: flex;
  align-items: center;
  margin: 10px;
  width: 60%;
  margin-left: 330px;
  background: rgba(217, 217, 217, 0.3);
}
.user_msg h5 {
  background: rgb(252, 140, 140);
  padding: 15px 15px;
  border-radius: 50px;
}
.admin_msg {
  background: #888;
  border-radius: 5px;
  width: 50%;
  margin: 10px 10px;
  padding: 10px 0px;
  height: 50px;
  display: flex;
  align-items: center;
}
.admin_msg h5 {
  background: #000000;
  padding: 15px 15px;
  margin: 0px 10px;
  border-radius: 50px;
  color: white;
}

.admin_msg h4 {
  font-size: 20px;
}
.messagebox {
  margin: 20px 0px;

}
.messagebox input {
  width: 95.5%;
  padding: 20px 20px;
  border: none;
  outline: none;
  background: rgba(217, 217, 217, 0.4);
}
.messagebox i {
  margin: 10px 10px;
}
.messagebox button {
  background: #000000;
  margin-left: 500px;
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 13px;
  border: 2px solid #f5f5f5;
  width: 20%;
  border-radius: 8px;
  color: white;
  cursor: pointer;
}

/* >>>>>>>>> Drop Down Menu >>>>>>>> */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
  color: #200303;
  border: none;
  cursor: pointer;
  margin-left: 10px;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 5px;
  margin-top: -20px;
  background-color: #2a07f8;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: #12036b;
  padding: 0px;
  background: white;
  width: 80%;
  text-decoration: none;
  margin: 5px auto;
  display: block;
}

.dropdown-content a:hover {
  background-color: white;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: black;
}

/* >>>>>>>>Ends HERE   >>>>>>>>>>>>>>>> */
</style>