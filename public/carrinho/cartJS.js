//run the ready function and the loadCart function when the page is completely load
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ()=>{ready(); loadCart();})
} else {
  ready()
}

function ready() {
  var removeCartItens = document.getElementsByClassName('remove')
  for (var i = 0; i < removeCartItens.length; i++) {
    var button = removeCartItens[i].childNodes[1];
    button.addEventListener('click', removeItem) // remove item
  }

  var quantityInputs = document.getElementsByClassName('quantity-field')
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged) // add quantity
  }

  document.getElementsByClassName('checkout-cta')[0].addEventListener('click', purchaseClicked)
}

//load products onto page
async function loadCart(){
  var cart = localStorage.getObj("cart");
  var p;
  for(let i of cart){
   await loadProduct(i);
  }

  var removeDiv = document.getElementById('blank')
  removeDiv.remove()

  updateTotal()

}

async function getProd(id){
  let fetch_data = {
    method:"GET",
  }
  let resp = await fetch('/products/'+id, fetch_data)
  resp  = await resp.json();
  return resp;
}

//load one product onto page
async function loadProduct(item){
  var product_list = document.getElementsByClassName("product-list")[0];
  var basket_p = document.createElement('div');
  basket_p.classList.add("basket-product")

  var p = await getProd(item.id);
  var product_inf=`
    <div class="item">
      <div class="product-image">
        <img src="${p.img}" alt="${p.name}" class="product-frame">
      </div>

      <div class="product-details">
        <h1 class="name-item"><strong>${p.name}</strong></h1>
        <p class="item-description"><strong>${p.cat}</strong></p>
        <p class="item-code">Código - <span>${p._id}</span></p>
      </div>

    </div>

    <div class="price">${p.price}</div>
    <div class="quantity">
      <input type="number" value="${item.quant}" min="1" max="${p.quant}" class="quantity-field">
    </div>

    <div class="subtotal">${p.price}</div>
    <div class="remove">
      <button>Excluir</button>
    </div>
    `;
  if(p!=null){
    basket_p.innerHTML = product_inf;
    product_list.appendChild(basket_p);
    ready()
  }
}

//remove a product from the cart
function removeItem (event) {
  var cart = localStorage.getObj("cart");
  var buttonClicked = event.target
  var id = buttonClicked.parentElement.parentElement.childNodes[1].childNodes[3].childNodes[5].childNodes[1].innerHTML
  for(let i=0; i<cart.length; i++){
    if(cart[i].id == id){
      cart.splice(i, 1);
      break;
    }
  }
  localStorage.setObj("cart", cart)
  buttonClicked.parentElement.parentElement.remove()
  updateTotal()
}

function quantityChanged (event) {
  var cart = localStorage.getObj("cart");
  var input = event.target
  var id = input.parentElement.parentElement.childNodes[1].childNodes[3].childNodes[5].childNodes[1].innerHTML;
  var max = input.max;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  if(parseInt(input.value) > parseInt(max)){
    input.value = max;
  }
  for(let i=0; i<cart.length; i++){
    if(cart[i].id == id){
      cart[i].quant = input.value;
      break;
    }
  }
  localStorage.setObj("cart", cart)
  updateTotal()
}

//run when purchase bustton is clicked
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
    alert('Você será redirecionado para a página de pagamento!')
    window.location.replace("../pagamento/pagamento.html")
  }
}

//update the tocal cost
function updateTotal() {

  var p = document.getElementsByClassName('price')
  if (p.length == 0) { // if there are no elements
    var cartItens = document.getElementsByClassName('product-list')[0]
    while (cartItens.hasChildNodes()){
      cartItens.removeChild(cartItens.firstChild)
    }
    document.getElementsByClassName('final-value')[0].innerHTML = '0'
    document.getElementsByClassName('total-value')[0].innerHTML = '0'
  }

  // arrumar o subtotal
  var subtotalArray = []
  for (var i = 0; i < p.length; i++) {
    var priceItem = parseFloat(p[i].innerText)
    var quantity = document.getElementsByClassName('quantity-field')[i].value
    var subtotal = 0
    subtotal = priceItem*quantity
    subtotal = parseFloat(subtotal).toFixed(2)
    document.getElementsByClassName('subtotal')[i].innerText = subtotal
    subtotalArray.push(subtotal)
  }

  // arrumar o total final
  var total = 0
  for (var i = 0; i < subtotalArray.length; i++) {
    total += parseFloat(subtotalArray[i])
  }
  total = parseFloat(total).toFixed(2)
  document.getElementsByClassName('final-value')[0].innerHTML = total
  document.getElementsByClassName('total-value')[0].innerHTML = total
}

//functions to set and get objects onto the localStorage
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}
