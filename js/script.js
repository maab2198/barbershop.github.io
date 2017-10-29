var formLink = document.querySelector(".login");
var formPopup = document.querySelector(".modal-content");
var formClose = formPopup.querySelector(".modal-content-close");
var formForm = formPopup.querySelector("form");
var formLogin = formPopup.querySelector("[name=login]");
var formPassword = formPopup.querySelector("[name=password]");

var overlay =document.querySelector(".modal-overlay");

var storageLogin = localStorage.getItem("login");


formLink.addEventListener("click", function(event) {
    event.preventDefault();
    formPopup.classList.add("modal-content-show");
    overlay.classList.add("modal-content-show");
    if(storageLogin) {
      formLogin.value=storageLogin;
      formPassword.focus();
    }
    else {
    formLogin.focus();
  }
  });

formClose.addEventListener("click", function(event) {
    {
      event.preventDefault();
      formPopup.classList.remove("modal-content-show");  
      formPopup.classList.remove("modal-error");
      overlay.classList.remove("modal-content-show");
    }
  });

formForm.addEventListener("submit", function(event) {
      if (!formLogin.value || !formPassword) {
      event.preventDefault();
      formPopup.classList.add("modal-error");
    }
    else {
      localStorage.setItem("login",formLogin.value);
    }
  });

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27 && formPopup.classList.contains("modal-content-show"))
    {
      event.preventDefault();
      formPopup.classList.remove("modal-content-show");
      formPopup.classList.remove("modal-error");
      overlay.classList.remove("modal-content-show");
    }
  });






var mapLink = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");



mapLink.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("modal-content-show");
    overlay.classList.add("modal-content-show");
  });

mapClose.addEventListener("click", function(event) {
    {
      event.preventDefault();
      mapPopup.classList.remove("modal-content-show");  
      overlay.classList.remove("modal-content-show");
    }
  });


window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27 && mapPopup.classList.contains("modal-content-show"))
    {
      event.preventDefault();
      mapPopup.classList.remove("modal-content-show");
      overlay.classList.remove("modal-content-show");
    }
  });
