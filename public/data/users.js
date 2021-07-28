//run the ready functio when the page is completely load
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}
  //initializates user local information
function ready(){
  var user_setup = localStorage.getItem("user_status");

  if(user_setup == null || user_setup == ""){

    localStorage.setObj("logged_user", {});
    localStorage.setItem("user_status", 0);
    localStorage.setObj("cart", []);
  }
}
