if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ()=>{ready(); })
} else {
  ready()
}

function ready() {
  var buttonProd = document.getElementsByClassName('prod')[0]
  buttonProd.addEventListener('click', adminProduct)

  var buttonUser = document.getElementsByClassName('user')[0]
  buttonUser.addEventListener('click', adminUsers)
}

function adminProduct() {
  window.location.replace('../adminProducts/adminProd.html')
}

function adminUsers() {
  window.location.replace('../admUsuarios/adminUser.html')
}