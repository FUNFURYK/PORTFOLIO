
let pupip = document.getElementById("phnpopup"),
  pupipToggle = document.getElementById ("phnbtn"),
  pupipClosed = document.querySelector(".closed");

  pupipToggle.onclick = function() {
    pupip.style.display="block";
  };

  pupipClosed.onclick = function() {
    pupip.style.display="none";
  }

  window.onclick = function (e) {
    if (e.target == pupip) {
      pupip.style.display="none";
    }
  }
