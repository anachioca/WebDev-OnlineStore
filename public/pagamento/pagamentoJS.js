//run teh ready functio when the page is completely load
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

//function that setup all the responsive parts
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


  document.getElementsByClassName('info_cadastrada')[0].addEventListener('click', checkButton)
  //document.getElementsByClassName('btt-pay')[0].addEventListener('click', buyCheckout)
}

//button functionality
function checkButton () {
  if (document.getElementsByClassName('info_cadastrada')[0].checked){ //unchecked
    putInfo()
  } else {
    removeInfo()
  }
}

//load user info
function putInfo (){

  app.nomeCompleto = storedName;
  app.telefone = storedPhone;
  app.email = storedEmail;
  app.pais = storedCountry;
  app.cidade = storedCity;
  app.UF = storedUF;
  app.endereco = storedAdd;
  app.num = storedNumber;
  app.complemento = storedComp;
}

//remove user info
function removeInfo() {

  document.getElementsByClassName('name_')[0].setAttribute('value', '')
  document.getElementsByClassName('fone_')[0].setAttribute('value', '')
  document.getElementsByClassName('email_')[0].setAttribute('value', '')
  document.getElementsByClassName('country_')[0].setAttribute('value', '')
  document.getElementsByClassName('city_')[0].setAttribute('value', '')
  document.getElementsByClassName('uf_')[0].setAttribute('value', '')
  document.getElementsByClassName('adress_')[0].setAttribute('value', '')
  document.getElementsByClassName('number_')[0].setAttribute('value', '')
  document.getElementsByClassName('comp_')[0].setAttribute('value', '')
}
