<template>
  <button @click="openModal_1()" id="myBtn1">Escrow</button>

  <!-- The Modal -->
  <div id="myModal1" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <!--  <span class="close">&times;</span> -->
      <!--    <p>Are you sure you want <br> an escrow to join you <br> click <br> <span class="btn"><router-link to="#">okay </router-link></span> to continue</p> -->
     <p> You are only permitted to invite an escrow only if -: <br> (1) You have filled
      the agreement form <br>(2) Make payment <br> (3) filled a report and you got no
      response <br> click to continue </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openModal_1() {
      //alert("working");
      // Get the modal
      var modal_link = document.getElementById("myModal1");

      // Get the button that opens the modal
      var btn_ = document.getElementById("myBtn1");

      // Get the <span> element that closes the modal
      //var span = document.getElementsByClassName("close")[0];

      // When the user clicks on the button, open the modal
      btn_.onclick = function () {
        modal_link.style.display = "block";
      };

      // When the user clicks on <span> (x), close the modal
      /*   span.onclick = function () {
        modal_.style.display = "none";
      }; */

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal_link) {
          modal_link.style.display = "none";
          // alert('working')
        }
      };
    },
  },
};
</script>

<style scoped>
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  right: 0;
  bottom: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background: white;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 0px;
  border: 1px solid #888;
  width: 50%; /* Could be more or less, depending on screen size */
  color: black;
  border-radius: 10px;
  height: 40%;
}
.btn a {
  text-decoration: none;
  display: block;
  margin: 10px auto;
  background: #12036b;
  border-radius: 8px;
  padding: 15px;
  width: 30%;
  color: white;
}
button {
  display: block;
  color: black;
  background: white;
  padding: 12px 20px;
  width: 100%;
  text-decoration: none;
  margin: 5px;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  color: #2a07f8;
}
.payment {
  text-align: center;
  margin-top: 80px;
}
.payment a {
  margin: 20px;
  padding: 20px 100px;
  margin: 10px;
  background: #12036b;
  border-radius: 8px;
  color: white;
  text-decoration: none;
}
.modal-content p {
  text-align: center;
  font-size: 30px;
  color: #12036b;
  line-height: 1.5;

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

