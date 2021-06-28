if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ()=>{ready();})
  } else {
    ready()
}

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}

Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

var dataProd = localStorage.getObj('data_prod')
console.log(dataProd)
var idTarget = localStorage.getItem('idProdEdit')

function ready(){
    // console.log("oi"); 
    if (idTarget >= 0) {
        checkID()
        addInfo()
        document.getElementsByClassName('btt-save')[0].addEventListener('click', saveChanges)
    } else  {
        // addProd()
        document.getElementsByClassName('btt-save')[0].addEventListener('click', addProd)
    }
}

var prodID 
var prodName
var prodCat 
var prodPrice
var prodCuidados
var prodImg 
var cont = 0    

function checkID() {
    for (var i of dataProd) {
        console.log(i)  
        if (i.id == idTarget) {
            console.log('if')
            prodID = i.id
            prodName = i.name
            prodCat = i.cat
            prodPrice = i.price
            prodCuidados = i.cuidados
            prodImg = i.img            
            break;
        }
        cont++
    }
}


function addInfo() {
    document.getElementsByClassName('name_')[0].setAttribute('value', prodName)
    document.getElementsByClassName('price_')[0].setAttribute('value', prodPrice)
    document.getElementsByClassName('cat_')[0].setAttribute('value', prodCat)
    document.getElementsByClassName('img_')[0].setAttribute('value', prodImg)
    document.getElementsByClassName('cuidados_')[0].setAttribute('value', prodCuidados)
}

function saveChanges() {
    // console.log(document.getElementsByClassName('name_')[0].value)
    // console.log(document.getElementsByClassName('price_')[0].value)
    // console.log(document.getElementsByClassName('cat_')[0].value)
    // console.log(document.getElementsByClassName('img_')[0].value)
    // console.log(document.getElementsByClassName('cuidados_')[0].value)

    dataProd[cont].name = document.getElementsByClassName('name_')[0].value
    dataProd[cont].price = document.getElementsByClassName('price_')[0].value
    dataProd[cont].cat = document.getElementsByClassName('cat_')[0].value
    dataProd[cont].img = document.getElementsByClassName('img_')[0].value
    dataProd[cont].cuidados = document.getElementsByClassName('cuidados_')[0].value

    localStorage.setObj('data_prod', dataProd)
    alert('Informações alteradas com sucesso!')
    window.location.replace('adminProd.html')
}

function addProd() {
    // console.log('oi')
    var last = parseInt(dataProd[dataProd.length-1].id)
    var next = parseInt(last+1)

    var name = document.getElementsByClassName('name_')[0].value
    var price = document.getElementsByClassName('price_')[0].value
    var cat = document.getElementsByClassName('cat_')[0].value
    var img = document.getElementsByClassName('img_')[0].value
    var cuidados = document.getElementsByClassName('cuidados_')[0].value

    dataProd.push(new Product(next, name, cat, price, img, cuidados))

    localStorage.setObj('data_prod', dataProd)

    alert('Produto adicionado com sucesso!')
    window.location.replace('adminProd.html')
}