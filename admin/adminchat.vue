<template>
  <div>
    <Nav />
  </div>
  <div class="main">
    <div style="flex-basis: 30%">
      <Side />
    </div>
    <div style="flex-basis: 80%">
      <div class="usermessage">
        <div class="user_msg">
          <h5 style="margin: 0px 20px"><i class="fa fa-bell"></i></h5>
          <h4>
            Hello kindliy, send your location and address of delivery , Take a
            picture of goods and send to make conversation easy . Thank you .
          </h4>
        </div>
        <h5 style="font-size: 30px">:</h5>
      </div>

      <div class="messagebox">
        <div class="admin_msg">
          <h5>DT</h5>
          <h4>#1000, kindly fill the agreement form</h4>
        </div>
        <input type="text" placeholder="Send a message" />
        <div class="replybox">
          <i class="fa fa-image"> image</i>
          <i class="fa fa-video"> video</i>
          <button>Reply</button>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import Nav from "../src/components/adminnav.vue";
import Side from "../src/components/sidenav.vue";

export default {
  components: { Nav, Side },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style scoped>
.main {
  display: flex;
  background: #f5f5f5;
  height: 100vh;
}
.usermessage {
    display: flex;
    align-items: center;
    
}
.user_msg {
  display: flex;
  align-items: center;
  margin: 10px;
  width: 60%;
  margin-left: 330px;
  background: rgba(217, 217, 217, 0.3);
}

.messagebox {
  margin-top: 20%;
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
.admin_msg {
  background: #888;
  border-radius: 5px;
  width: 90%;
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
</style>