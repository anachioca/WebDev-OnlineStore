if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  var removeCartItens = document.getElementsByClassName('remove')
  console.log(removeCartItens)
  for (var i = 0; i < removeCartItens.length; i++) {
    var button = removeCartItens[i]
    button.addEventListener('click', removeItem) // remove item
  }

  var quantityInputs = document.getElementsByClassName('quantity-field')
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged) // add quantity
  }

  // add to cart function


  // buy
  document.getElementsByClassName('checkout-cta')[0].addEventListener('click', purchaseClicked)
}


function removeItem (event) {
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateTotal()
}

function quantityChanged (event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  updateTotal()
}


function purchaseClicked () {

  // checar se foi selecionado um tipo de entrega
  var unselected = 0
  var sel = document.getElementsByClassName('summary-delivery-selection')
  console.log(sel[0])
  if (document.getElementsByClassName('final-value')[0].innerHTML == '0') {
    alert('Carrinho vazio. Selecione os produtos que deseja comprar!')
  } else if (sel[0].value == unselected) {
    alert ('Por favor, selecione a forma de entrega.')
  } else {
    alert('Obrigado pela compra!')
    var cartItens = document.getElementsByClassName('basket')[0]
    while (cartItens.hasChildNodes()){
      cartItens.removeChild(cartItens.firstChild)
    }
    document.getElementsByClassName('final-value')[0].innerHTML = '0'
    document.getElementsByClassName('total-value')[0].innerHTML = '0'
    window.location.replace("../pagamento/pagamento.html")
  }
}


function updateTotal() {
  
  var p = document.getElementsByClassName('price')
  console.log(p)
  if (p.length == 0) { // if there are no elements
    var cartItens = document.getElementsByClassName('basket')[0]
    while (cartItens.hasChildNodes()){
      cartItens.removeChild(cartItens.firstChild)
    }
    document.getElementsByClassName('final-value')[0].innerHTML = '0'
    document.getElementsByClassName('total-value')[0].innerHTML = '0'
  }

  // arrumar o subtotal 
  var subtotalArray = []
  for (var i = 0; i < p.length; i++) {
    var priceItem = p[i].innerText
    var quantity = document.getElementsByClassName('quantity-field')[i].value
    var subtotal = 0 
    subtotal = priceItem*quantity
    subtotal = Math.round(subtotal * 100) / 100
    document.getElementsByClassName('subtotal')[i].innerText = subtotal    
    subtotalArray.push(subtotal)
  }

  // arrumar o total final
  var total = 0
  for (var i = 0; i < subtotalArray.length; i++) {
    total += subtotalArray[i]
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('final-value')[0].innerHTML = total
    document.getElementsByClassName('total-value')[0].innerHTML = total
  }
}