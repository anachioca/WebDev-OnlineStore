//run the navbar function when the page is completely load
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ()=>{ready();})
  } else {
    ready()
}


function ready(){
    loadProds();
}

//load products onto page
async function loadProds(){
    let fetch_data = {
      method:"GET",
    }

    let resp = await fetch('/products', fetch_data)
    resp  = await resp.json();
    console.log(resp);
    var products = resp;
    for(let i of products){
      loadProd(i);
    }
    makeButtons(products);
}

//load one product onto page
function loadProd(p){
    var prodList = document.getElementsByClassName("list-group")[0];
    var prodItem = document.createElement('div');
    prodItem.classList.add("item")


    var delButton = `<button type="button" class="btn btn-prod-rm btn-custom"> Excluir </button>`
    var editButton = `<button type="button" class="btn btn-prod-ed btn-custom"> Editar </button>`

    var listItem = `<a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                          <strong>${p._id}</strong>
                          <spam>${p.name}</spam>
                          <spam>${p.cat}</spam>
                          <spam>Estoque: ${p.quant}</spam>
                          <spam>R$ ${p.price}</spam>
                          <div>
                          ${delButton}
                          ${editButton}
                          </div>
                        </div>
                    </a>`;
    prodItem.innerHTML = listItem;
    prodList.appendChild(prodItem);
}

//functions to set and get objects onto the localStorage
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}

Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

//set the action buttons
function makeButtons(prods){
    for(let i=0; i<prods.length; i++){
      button = document.getElementsByClassName("btn-prod-rm")[i]
	    button.addEventListener("click", removeProd)
    }
    for(let i=0; i<prods.length; i++){
      button = document.getElementsByClassName("btn-prod-ed")[i]
        button.addEventListener("click", editProd)
    }

    button = document.getElementsByClassName("btn-prod-add")[0]
    button.addEventListener("click", addProd)
}

//remove one product from database
async function removeProd(event){
    var buttonClicked = event.target
    var idTarget = buttonClicked.parentElement.parentElement.childNodes[1].innerHTML
    idTarget = idTarget.trim();

    let fetch_data = {
      method:"DELETE",
    }
    let resp = await fetch('/products/'+idTarget, fetch_data)

    if(resp.status == 200){
      alert("Produto removido com sucesso")
    }else{
      alert("Falha ao remover produto")
    }

    location.reload()
}

//product edition script
function editProd(event) {
    var buttonClicked = event.target
    var idTarget = buttonClicked.parentElement.parentElement.childNodes[1].innerHTML
    idTarget = idTarget.trim();
    console.log(idTarget);
    localStorage.setItem('idProdEdit', idTarget)
    window.location.replace("editProduct.html")
}

//product addition script
function addProd(event) {
    var buttonClicked = event.target
    var idTarget = -1
    localStorage.setItem('idProdEdit', idTarget)
    window.location.replace("editProduct.html")
}
