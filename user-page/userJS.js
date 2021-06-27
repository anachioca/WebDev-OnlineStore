if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

var storedName
var storedPhone
var storedEmail
var storedCountry
var storedCity
var storedUF
var storedAdd
var storedNumber
var storedComp

Storage.prototype.setObj = function(key, obj) {
  return this.setItem(key, JSON.stringify(obj))
}

function ready() {

  var storage = window.localStorage;
  var results = (storage.getItem("logged_user")) ? JSON.parse(storage.getItem("logged_user")) : [];

  storedName = results.name
  storedName += " "
  storedName +=  results.lastname
  storedPhone = results.phone
  storedEmail = results.email
  storedCountry = results.country
  storedCity = results.city
  storedUF = results.uf
  storedAdd = results.adress
  storedNumber = results.num
  storedComp = results.comp
  
  putInfo()

  document.getElementsByClassName('logout')[0].addEventListener('click', logout)

  // console.log(document.getElementsByClassName('info_cadastrada')[0].checked)  
}

function putInfo (){

  document.getElementsByClassName('name_')[0].innerHTML = storedName
  document.getElementsByClassName('fone_')[0].innerHTML = storedPhone
  document.getElementsByClassName('email_')[0].innerHTML = storedEmail
  document.getElementsByClassName('city_')[0].innerHTML = storedCity
  document.getElementsByClassName('uf_')[0].innerHTML = storedUF
  document.getElementsByClassName('adress_')[0].innerHTML = storedAdd
  document.getElementsByClassName('number_')[0].innerHTML = storedNumber
}


function logout(){
  localStorage.setObj("logged_user", {});
  localStorage.setItem("user_status", 0);
  localStorage.setItem("cart", []);
  window.location.replace("../main/main.html")
}
