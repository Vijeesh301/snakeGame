let username = document.getElementById("username");
let username1 = document.getElementById("username1");

function loginformsubmit() {

    if (username.value=="") {
      alert("Enter your details");
      return false;
    }

    if (username1.value=="") {
      alert("Enter your details");
      return false;
    }

    else {
      window.location.href="main.html";
    }

    {
      var nameID = document.getElementById("username").value;
      var batchID = document.getElementById("username1").value;
      localStorage.setItem("id1", nameID);
      localStorage.setItem("id2", batchID);
      return false;
    }
  }