<template>
  <button @click="openModal()" id="myBtn">...</button>

  <!-- The Modal -->
  <div id="myModal_" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">&times;</span>
      <div class="user">
        <div class="user_msg">
          <h5 style="margin: 0px 20px">OT</h5>
          <h4>I want to send a package to Abuja</h4>
        </div>
        <div class="user_msg">
          <h5 style="margin: 0px 20px">OT</h5>
          <h4>How much will it cost</h4>
        </div>

        <div class="admin_msg">
          <h5>DT</h5>
          <h4>kindly send picture of goods will tell you the price</h4>
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
</template>

<script>
export default {
  methods: {
    openModal() {
      //alert("working");
      // Get the modal
      var modal = document.getElementById("myModal_");

      // Get the button that opens the modal
      var btn = document.getElementById("myBtn");

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks on the button, open the modal
      btn.onclick = function () {
        modal.style.display = "block";
      };

      // When the user clicks on <span> (x), close the modal
      span.onclick = function () {
        modal.style.display = "none";
      };

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    },
    chat(){
        this.$router.push('/chat')  
    }
  },
};
</script>

<style scoped>
#myBtn {
  background: none;
  border: 0px solid white;
  color: black;
  cursor: pointer;
  font-size: 50px;
}
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */

  right: 50px;
  bottom: 0;

  width: 50%; /* Full width */
  height: 40%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 0%; /* 15% from the top and centered */
  padding: 0px;
  border: 1px solid #888;
  width: 100%; /* Could be more or less, depending on screen size */
  color: black;
  border-radius: 8px;
  height: auto;
}


/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.user{
    height: 100px;
    overflow: auto;
}

.user_msg {
  display: flex;
  align-items: center;
  margin-left: 150px;
}
.user_msg h5 {
  background: rgb(252, 140, 140);
  padding: 15px 15px;
  border-radius: 50px;
}
.admin_msg {
  background: #888;
  border-radius: 5px;
  width: 80%;
  margin: 0px 10px;
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
.messagebox {
  margin: 20px 0px;
  z-index: 1;
  position: sticky;
  bottom: 0;

}
.messagebox input {
  width: 93.8%;
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
  margin-left: 350px;
  margin-top: 10px;
    padding: 13px;
  border: 2px solid #f5f5f5;
  width: 20%;
  border-radius: 8px;
  color: white;
  cursor: pointer;
}
@media only screen and (max-width: 600px) {
  .modal-content {
    width: 80%;
  }

  .modal-content button {
    padding: 13px;
    border: 2px solid #f5f5f5;
    background: #f5f5f5;
    margin-left: px;
    width: 50%;
    border-radius: 8px;
    margin-top: 20px;
    color: black;
  }
}
</style>

