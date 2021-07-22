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

var dataProd = localStorage.getObj('data_prod')
var idTarget = localStorage.getItem('idProdEdit')

//setup page functionalities
function ready(){

    if (idTarget >= 0) {
        checkID()
        addInfo()
        document.getElementsByClassName('btt-save')[0].addEventListener('click', saveChanges)
    } else  {
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

//find the product by id
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

//load product info onto the page
function addInfo() {
    document.getElementsByClassName('name_')[0].setAttribute('value', prodName)
    document.getElementsByClassName('price_')[0].setAttribute('value', prodPrice)
    document.getElementsByClassName('cat_')[0].setAttribute('value', prodCat)
    document.getElementsByClassName('img_')[0].setAttribute('value', prodImg)
    document.getElementsByClassName('cuidados_')[0].setAttribute('value', prodCuidados)
}

//save the product changes into database
function saveChanges() {

    dataProd[cont].name = document.getElementsByClassName('name_')[0].value
    dataProd[cont].price = document.getElementsByClassName('price_')[0].value
    dataProd[cont].cat = document.getElementsByClassName('cat_')[0].value
    dataProd[cont].img = document.getElementsByClassName('img_')[0].value
    dataProd[cont].cuidados = document.getElementsByClassName('cuidados_')[0].value

    localStorage.setObj('data_prod', dataProd)
    alert('Informações alteradas com sucesso!')
    window.location.replace('adminProd.html')
}

//add a new product into database
function addProd() {
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
