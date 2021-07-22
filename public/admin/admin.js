//run the navbar function when the page is completely load
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ()=>{ready(); })
} else {
  ready()
}

//setup page functionalities
function ready() {
  var buttonProd = document.getElementsByClassName('prod')[0]
  buttonProd.addEventListener('click', adminProduct)

  var buttonUser = document.getElementsByClassName('user')[0]
  buttonUser.addEventListener('click', adminUsers)
}

//product administration button
function adminProduct() {
  window.location.replace('../adminProducts/adminProd.html')
}

//user administration button
function adminUsers() {
  window.location.replace('../admUsuarios/adminUser.html')
}
