<template>
  <button @click="openModal_1()" id="myBtn11">Report</button>

  <!-- The Modal -->
  <div id="myModal11" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <!--  <span class="close">&times;</span> -->
      <form>
        <h5>Comment: </h5>
       <textarea name="" id="" cols="30" rows="10" placeholder=" NOte-: you can only report after
4hrs  of payment and no response Not More Than 30 Words"></textarea>
        <div class="payment">
          <button>Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openModal_1() {
      //alert("working");
      // Get the modal
      var modal_link = document.getElementById("myModal11");

      // Get the button that opens the modal
      var btn_ = document.getElementById("myBtn11");

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
  background: #4d2525;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 0px;
  border: 1px solid #888;
  width: 50%; /* Could be more or less, depending on screen size */
  color: black;
  border-radius: 10px;
  height: 42%;
}
.modal-content  h5{
    margin: 5px;
    color: white;

}
.modal-content textarea{
    border-radius: 8px;
    outline: none;
    width: 60%;
    border: none;
    margin: 0px;
    text-align: left;
    padding: 5px 10px;
}

button {
  display: block;
  color: black;
  background: white;
  padding: 12px 20px;
  width: 100%;
  text-decoration: none;
  margin: 0px;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  color: #2a07f8;
}
.payment{
    margin-top: 10px;
}
.payment button {
  
  padding: 20px 20px;
  margin: auto;
  width: 30%;
  background: #fbfaff;
  border-radius: 8px;
  color: #12036B;
}
.modal-content p {
  text-align: center;
  font-size: 30px;
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

