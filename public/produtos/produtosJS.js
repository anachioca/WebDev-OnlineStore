//run the ready function when the page is completely load
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ()=>{ready(); })
} else {
  ready()
}

//functions to set and get objects onto the localStorage
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}


var userStatus = localStorage.getItem('user_status')
console.log(userStatus)

//function that setup all the responsive parts
async function ready() {
  await loadProducts()

  var addButton = document.getElementsByClassName('cart-add')
  for (var i = 0; i < addButton.length; i++) {
    var button = addButton[i]
    console.log(i);
    button.addEventListener('click', checkButton)
  }

}

//add/remove to cart button function
function checkButton () {
  var buttonClicked = event.target
  if (buttonClicked.innerHTML == "+ carrinho"){
    addToCart()
  } else {
    removeFromCart()
  }
}

//add to cart script
function addToCart() {
  var cart = localStorage.getObj("cart");
  console.log('addToCart')
  var buttonClicked = event.target
  var item = {
    id: buttonClicked.parentElement.id,
    quant: 1
  }
  cart.push(item)
  localStorage.setObj("cart", cart)

  buttonClicked.innerHTML = "- carrinho"
}

//remove from cart script
function removeFromCart() {
  var cart = localStorage.getObj("cart");
  console.log('removeFromCart')
  var buttonClicked = event.target
  var id = buttonClicked.parentElement.id
  for(let i=0; i<cart.length; i++){
    if(cart[i].id == id){
      cart.splice(i, 1);
      break;
    }
  }
  localStorage.setObj("cart", cart)

  buttonClicked.innerHTML = "+ carrinho"
}

//load all products onto the page
async function loadProducts(){
  let fetch_data = {
    method:"GET",
  }

  let resp = await fetch('/products', fetch_data)
  resp  = await resp.json();

  var products = resp;
  console.log(products);
  for(let i of products){
    loadProduct(i);
  }
}

//load one product onto the page
async function loadProduct(p){
  var cart = await localStorage.getObj("cart");
  var inCart = "+ carrinho"
  for (let i of cart) {
    if (i.id == p._id) {
      inCart = "- carrinho"
      break;
    }
  }

  var user_status = localStorage.getItem("user_status")

  var product_list = document.getElementsByClassName("row")[0];
  var basket_p = document.createElement('div');
  basket_p.classList.add("col-lg-3")
  basket_p.classList.add("col-md-4")
  basket_p.classList.add("col-sm-6")


  var cartButton =`<button class="btn btn-primary btn-custom cart-add">${inCart}</button>`;
  if(user_status == 2){
    cartButton = ``;
  }else if(p.quant <= 0){
    cartButton =`<button class="btn btn-custom-disabled cart-add" disabled>Esgotado</button>`;
  }

  var modal = p.name.replace(/\s/g, '');

  var product_inf_sem_modal=`
    <div class="card card-custom">
            <img class="card-img-top img-hover" src="${p.img}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${p.name}</h5>
              <p class="card-text">R$ ${p.price}</p>
              <div id="${p._id}">
                ${cartButton}
              </div>
    `;

  var product_inf_com_modal = `
  <div class="card card-custom">
            <img class="card-img-top img-hover" src="${p.img}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${p.name}</h5>
              <p class="card-text">R$ ${p.price}</p>
              <div id="${p._id}">
                ${cartButton}
              <!-- Modal -->
              <button type="button" class="btn btn-primary btn-custom" data-toggle="modal" data-target="#Modal${modal}">
                Cuidados
              </button>
              </div>
              <div class="modal fade" id="Modal${modal}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

  if (p.cuidados == "")basket_p.innerHTML = product_inf_sem_modal
  else basket_p.innerHTML = product_inf_com_modal
  product_list.appendChild(basket_p);
}
