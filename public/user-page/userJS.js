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
var userStatus


//functions to set and get objects onto the localStorage
Storage.prototype.setObj = function(key, obj) {
  return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
  return JSON.parse(this.getItem(key))
}

userStatus = localStorage.getItem("user_status")

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

  putInfo()

  document.getElementsByClassName('logout')[0].addEventListener('click', logout)
  document.getElementsByClassName('del')[0].addEventListener('click', delUser)
  if (userStatus != 2) {
    document.getElementsByClassName('rmv-adm')[0].remove()
  } else if (userStatus == 2) {
    document.getElementsByClassName('rmv-adm')[0].addEventListener('click', noAdm)
  }


}

//loads user information to the html
function putInfo (){

  document.getElementsByClassName('name_')[0].innerHTML = storedName
  document.getElementsByClassName('fone_')[0].innerHTML = storedPhone
  document.getElementsByClassName('email_')[0].innerHTML = storedEmail
  document.getElementsByClassName('city_')[0].innerHTML = storedCity
  document.getElementsByClassName('uf_')[0].innerHTML = storedUF
  document.getElementsByClassName('adress_')[0].innerHTML = storedAdd
  document.getElementsByClassName('number_')[0].innerHTML = storedNumber
}

//logout script
function logout(){
  localStorage.setObj("logged_user", {});
  localStorage.setItem("user_status", 0);
  localStorage.setItem("cart", []);
  window.location.replace("../main/main.html")
}

async function delUser(){
  var emailTarget = document.getElementsByClassName('email_')[0].innerHTML
  emailTarget = emailTarget.trim();
  var data = {
    email: emailTarget,
  }

  data = JSON.stringify(data);
  let fetch_data = {
    method:"DELETE",
    body: data,
    headers: {
      'Content-Type': 'application/json'
    }
  }
  if(confirm("Tem certeza que deseja excluir sua conta?")){
    let resp = await fetch('/users', fetch_data)
    if(resp.status == 400){
      alert("Falha ao deletar conta")
    }else{
      alert('Obrigado por fazer parte da família MAPlnatinhas, volte quando quiser!!')
      logout();
    }
  }
}

//abdicate the adm status
async function noAdm() {
  var emailTarget = document.getElementsByClassName('email_')[0].innerHTML
  emailTarget = emailTarget.trim();
  var data = {
    email: emailTarget,
    perm: 1
  }

  data = JSON.stringify(data);
  let fetch_data = {
    method:"PUT",
    body: data,
    headers: {
      'Content-Type': 'application/json'
    }
  }
  let resp = await fetch('/users/perm', fetch_data)
  if(resp.status == 400){
    alert("Falha ao mudar permissão")
  }else{
    localStorage.setItem('user_status', 1)
    alert('Você não é mais administrador da loja.')
  }

  location.reload()
}
