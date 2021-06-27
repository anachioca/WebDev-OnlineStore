if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ()=>{ready(); })
} else {
  ready()
}

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}


var userStatus = localStorage.getItem('user_status')
console.log(userStatus)

function ready() {
  loadProducts()

  var addButton = document.getElementsByClassName('cart-add')
  for (var i = 0; i < addButton.length; i++) {
    var button = addButton[i]
    button.addEventListener('click', checkButton)
  }

}

function checkButton () {
  var buttonClicked = event.target
  if (buttonClicked.innerHTML == "+ carrinho"){ // precisa add
    addToCart()
  } else {
    removeFromCart()
  }
}

function addToCart() {
  var cart = localStorage.getObj("cart");
  console.log('addToCart')
  var buttonClicked = event.target
  var id = buttonClicked.parentElement.id
  id = parseInt(id);
  cart.push(id)
  localStorage.setObj("cart", cart)

  buttonClicked.innerHTML = "- carrinho"
}

function removeFromCart() {
  var cart = localStorage.getObj("cart");
  console.log('removeFromCart')
  var buttonClicked = event.target
  var id = buttonClicked.parentElement.id
  id = parseInt(id);
  for(let i=0; i<cart.length; i++){
    if(cart[i] == id){
      cart.splice(i, 1);
      break;
    }
  }
  localStorage.setObj("cart", cart)

  buttonClicked.innerHTML = "+ carrinho"
}


function loadProducts(){
  var products= localStorage.getObj("data_prod");
  for(let i of products){
    loadProduct(i);
  }
}


function loadProduct(p){
  var cart = localStorage.getObj("cart");
  var inCart = "+ carrinho"
  for (let i of cart) {
    if (i == p.id) {
      inCart = "- carrinho"
      break;
    }
  }

  var product_list = document.getElementsByClassName("row")[0];
  var basket_p = document.createElement('div');
  basket_p.classList.add("col-lg-3")
  basket_p.classList.add("col-md-4")
  basket_p.classList.add("col-sm-6")

  var product_inf_sem_modal=`
    <div class="card card-custom">
            <img class="card-img-top img-hover" src="${p.img}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${p.name}</h5>
              <p class="card-text">R$ ${p.price}</p>
              <div id="${p.id}">
                <button class="btn btn-primary btn-custom cart-add">${inCart}</button>
              </div>
    `;

  var product_inf_com_modal = ` 
  <div class="card card-custom">
            <img class="card-img-top img-hover" src="${p.img}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${p.name}</h5>
              <p class="card-text">R$ ${p.price}</p>
              <div id="${p.id}">
                <button class="btn btn-primary btn-custom cart-add">${inCart}</button>
              <!-- Modal -->
              <button type="button" class="btn btn-primary btn-custom" data-toggle="modal" data-target="#ModalMonstera">
                Cuidados
              </button>
              </div>
              <div class="modal fade" id="ModalMonstera" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">${p.name}</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      ${p.cuidados}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          `;

  if (p.cuidados == "")
    basket_p.innerHTML = product_inf_sem_modal
  else basket_p.innerHTML = product_inf_com_modal
  product_list.appendChild(basket_p);
}