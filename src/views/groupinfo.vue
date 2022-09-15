<template>
  <div class="main_container">
    <div style="flex-basis: 30%; height: 100vh;">
      <Nav />
    </div>
    <div style="flex-basis: 80%">
      <div class="top_details">
        <h4>
          <span class="name"><i class="fa fa-bell"></i></span>

          <span style="margin-left: 50rem"><i class="fa fa-bell"></i></span>
        </h4>
      </div>

      <div class="groupinfo">
        <h5>Derron Group</h5>
        <div class="description">
          <img src="../assets/logo.png" style="width: 10%" />
          <h4>
            <span class="descript">Description</span> <br />
            Derron group is an integrated logistics company <br />
            with global perspective that offers diverse services <br />
            maritime.
          </h4>
        </div>
        <div class="verified">
          <div>
            <h4>
              BVN <sub>verified</sub>
              <span><i class="fa fa-bell" style="margin-left: 15px"></i></span>
            </h4>
          </div>
          <div>
            <h4>
              Phone Number <sub>verified</sub>
              <span><i class="fa fa-bell" style="margin-left: 15px"></i></span>
            </h4>
          </div>
          <div>
            <h4>
              C.A.C <sub>verified</sub>
              <span><i class="fa fa-bell" style="margin-left: 15px"></i></span>
            </h4>
          </div>
          <div>
            <h4>
              I.D <sub>verified</sub>
              <span><i class="fa fa-bell" style="margin-left: 15px"></i></span>
            </h4>
          </div>
        </div>
        <div class="feedback">
          <div class="first_div">
            <i class="fa fa-bell"> 220 Positive feedback</i>
          </div>
          <div class="second_div">
            <i class="fa fa-bell"> 19 Negative feedback</i>
          </div>
        </div>
        <div class="tracking_cust">
          <div class="tracking">
            <div class="image">
              <img src="../assets/avatar.png" />
              <h4 style="">@gbenga</h4>
            </div>
            <div>
              <h5>Fast and reliable</h5>
            </div>
            <div>
              <h5>12:00pm</h5>
            </div>
            <div>
              <h5>12|05|2022</h5>
            </div>
          </div>
          <div class="tracking">
            <div class="image">
              <img src="../assets/avatar.png" />
              <h4 style="">@gbenga</h4>
            </div>
            <div>
              <h5>Fast and reliable</h5>
            </div>
            <div>
              <h5>12:00pm</h5>
            </div>
            <div>
              <h5>12|05|2022</h5>
            </div>
          </div>

          <div class="tracking">
            <div class="image">
              <img src="../assets/avatar.png" />
              <h4 style="">@gbenga</h4>
            </div>
            <div>
              <h5>Fast and reliable</h5>
            </div>
            <div>
              <h5>12:00pm</h5>
            </div>
            <div>
              <h5>12|05|2022</h5>
            </div>
          </div>

          <div class="tracking">
            <div class="image">
              <img src="../assets/avatar.png" />
              <h4 style="">@gbenga</h4>
            </div>
            <div>
              <h5>Fast and reliable</h5>
            </div>
            <div>
              <h5>12:00pm</h5>
            </div>
            <div>
              <h5>12|05|2022</h5>
            </div>
          </div>
        </div>
        <div class="chat">
          <div style="flex-basis: 30%;">1</div>
          <div class="chat_box">
                <h4>DG</h4>
            <h5>Chat with us</h5>
            <h3 style="padding-left: 150px"> <Modal/></h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/nav.vue";
import Modal from "../components/chatmodal.vue"

export default {
  components: { Nav, Modal },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
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
.groupinfo {
  width: 80%;
  margin: auto;
}
.groupinfo h5 {
  font-size: 20px;
  margin: 20px 0px;
  color: #12036b;
}
.description {
  text-align: center;
}
.description h4 {
  margin: 0px;
  font-size: 13px;
}
.descript {
  font-size: 30px;

  color: #12036b;
}
.verified {
  border: 2px solid black;
  margin: 15px;
  display: flex;
}
.verified > div {
  margin: 0px 20px;
}
.feedback {
  display: flex;
}
.feedback > div {
  width: 100%;
  border-radius: 7px;
  padding: 10px;
  margin: 10px;
}
.first_div {
  background: #b4fbae;
}
.first_div i {
  margin: 0px 30px;
}
.second_div {
  background: rgba(235, 35, 35, 0.5);
}
.second_div i {
  margin: 0px 30px;
}
.tracking {
  width: 100%;
  background: rgba(217, 217, 217, 0.4);
  border-radius: 10px;
  height: 40px;
  display: flex;
  align-items: center;
  margin: 12px 0px;
}

.tracking > div {
  width: 100%;
}
.image {
  display: flex;
  align-items: center;
}

.image img {
  margin: 5px 20px;
}
.chat {
  display: flex;

}
.chat > div{
    width: 100%;
     
}
.chat_box {
    flex-basis: 70%;
    height: 70px;
  background: rgba(217, 217, 217, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  display: flex;
  align-items: center;
   color: rgba(0, 0, 0, 0.3);
  
}
.chat_box h4, h5, h3{
    margin: 0px 40px;
}
.chat_box h4{
    padding: 20px 15px;
    background: #FFFFFF;
    border-radius: 20px;
}
</style>