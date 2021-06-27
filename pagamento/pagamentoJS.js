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

  document.getElementsByClassName('btt-pay')[0].addEventListener('click', buyCheckout)

  // console.log(document.getElementsByClassName('info_cadastrada')[0].checked)  
}

function checkButton () {
  if (document.getElementsByClassName('info_cadastrada')[0].checked){ //unchecked
    putInfo()
  } else {
    removeInfo()
  }
}


function putInfo (){

  document.getElementsByClassName('name_')[0].setAttribute('value', storedName)
  //console.log(document.getElementsByClassName('name_')[0])
  document.getElementsByClassName('fone_')[0].setAttribute('value', storedPhone)
  document.getElementsByClassName('email_')[0].setAttribute('value', storedEmail)
  document.getElementsByClassName('country_')[0].setAttribute('value', storedCountry)
  document.getElementsByClassName('city_')[0].setAttribute('value', storedCity)
  document.getElementsByClassName('uf_')[0].setAttribute('value', storedUF)
  document.getElementsByClassName('adress_')[0].setAttribute('value', storedAdd)
  document.getElementsByClassName('number_')[0].setAttribute('value', storedNumber)
  document.getElementsByClassName('comp_')[0].setAttribute('value', storedComp)    
}

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

function buyCheckout () {
  alert('Compra efeituada com sucesso! Obrigada por comprar em nossa loja! :)')
  window.location.replace("../main/main.html")
}