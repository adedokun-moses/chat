<template>
  <div>
    <Nav />
  </div>
  <div class="main">
    <div style="flex-basis: 30%">
      <Side />
    </div>
    <div style="flex-basis: 80%">
      <div class="container">
        <div class="settings">
          <h4><span class="set">DG</span>Name: Copper Eagle</h4>
          <i class="fa fa-bell"></i>
        </div>

        <h3>Address:21,Omorinre Johnson street,Lekki Phase 1</h3>
        <h3>Email: coppereagle@gmail.com</h3>
        <h3>Phone Number:08120245674</h3>
        <div class="rt">
          <h5>BVN <sub>verified</sub></h5>
          <h5>Phone Number <sub>verified</sub></h5>
          <h5>C.A.C<sub>verified</sub></h5>
          <h5>I.D<sub>verified</sub></h5>
        </div>
        <div class="message">
          <textarea name="" id="" cols="20" rows="10"></textarea>
        </div>

        <div class="ter">
          <button class="c">Positive feedback</button>
          <button class="b">Negative feedback</button>
          <button class="a">Recent Comment</button>
        </div>

        <div class="tracking">
          <div class="image">
            <img src="../src/assets/avatar.png" />
            <h4 style="">@gbenga</h4>
          </div>
          <div>
            <h5>Fast and reliable</h5>
          </div>
         
          <div class="date">
          
            <h5>12:00pm 12|05|2022</h5>
          </div>
        </div>

          <div class="tracking">
          <div class="image">
            <img src="../src/assets/avatar.png" />
            <h4 style="">@gbenga</h4>
          </div>
          <div>
            <h5>Fast and reliable</h5>
          </div>
         
          <div class="date">
          
            <h5>12:00pm 12|05|2022</h5>
          </div>
        </div>

          <div class="tracking">
          <div class="image">
            <img src="../src/assets/avatar.png" />
            <h4 style="">@gbenga</h4>
          </div>
          <div>
            <h5>Fast and reliable</h5>
          </div>
         
          <div class="date">
          
            <h5>12:00pm 12|05|2022</h5>
          </div>
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
  setup() {},
};
</script>
<style scoped>
.main {
  display: flex;
  background: #f5f5f5;
  height: 100vh;
}
.container {
  width: 90%;
  margin: 20px auto;
  background: white;
  padding: 10px;
}
.set {
  padding: 13px 10px;
  background: #12036b;
  border-radius: 20px;
  margin-right: 10px;
  color: white;
}
.settings {
  overflow: auto;
}
.settings h4 {
  float: left;
}
.settings i {
  float: right;
  margin: 5px;
}
.container h3 {
  line-height: 2;
  margin: 0px;
}
.rt {
  display: flex;
}
.rt > h5 {
  width: 100%;
}
.message textarea {
  width: 97%;
  background: #efefef;
  opacity: 0.4;
  border-radius: 20px;
  padding: 10px;
  outline: none;
  height: 80px;
}

.ter {
  display: flex;
}
.ter button {
  margin: 5px;
  width: 33%;
  padding: 13px;
  border-radius: 5px;
  outline: none;
  font-weight: bold;
  border: none;
}
.a {
  background: blue;
  color: white;
}
.b {
  background: yellow;
}
.c {
  background: #12036b;
  color: white;
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
  font-size: 20px;
}
.image {
  display: flex;
  align-items: center;
}

.image img {
  margin: 5px 20px;
}
.date h5{
  margin-left: 40px;
}
</style>