//run the navbar function when the page is completely load
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ()=>{ready();})
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


//setup page functionalities
async function ready(){
  var idTarget = await localStorage.getItem('idProdEdit')

  let fetch_data = {
    method:"GET",
  }
  console.log(fetch_data);
  let resp = await fetch('/products/'+idTarget, fetch_data);
  console.log(resp);
  var prod = await resp.json();
  console.log(prod);

  document.getElementById("prodId").innerHTML = prod._id;
  app.id = prod._id;
  app.nome = prod.name;
  app.preco = prod.price;
  app.categoria = prod.cat;
  app.imagem = prod.img;
  app.quant = prod.quant;
  app.cuidados = prod.cuidados;
}
