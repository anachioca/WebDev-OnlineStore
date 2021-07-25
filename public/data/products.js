//Product calss
class Product{
  constructor(name, cat, price, img, cuidados, quant){
    this.name = name;
    this.cat = cat;
    this.price = price;
    this.img = img;
    this.cuidados = cuidados;
    this.quant = quant;
  }
}

//functions to set and get objects onto the localStorage
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

var users = localStorage.getItem("data_prod")
//if the fake database doesn't exists creates it

async function load_databse(){
  var dataProd = [];

  //adding products to the fake data base
  dataProd.push(new Product("Monstera","Planta","29.99", "/img/planta1.webp", "É aconselhável colocá-la ao sol, em exposição direta, somente durante o inverno ou em dias nublados. Nos dias ensolarados, é preferível deixá-la dentro de casa, recebendo os raios solares de maneira indireta.", 8));
  dataProd.push(new Product("Espadinha","Planta","29.99", "/img/planta2.webp", "Suas regas deverão ser bem espaçadas, ocorrendo uma vez a cada 20 dias. Como não permite poda, é recomendável realizar uma limpeza no momento em que sua touceira esteja muito cheia, eliminando as folhagens mais antigas e deixando as mais novas.", 10));
  dataProd.push(new Product("Eucalipto","Planta","29.99", "/img/planta8.webp", "Deve manter em um ambiente que receba luz, não tendo problema em receber o sol diretamente. Pode ser regada diariamente, lembrando de nunca deixar o solo encharcado.", 12));
  dataProd.push(new Product("Clusia","Planta","23.50", "/img/planta5.webp", "É aconselhável colocá-la ao sol, em exposição direta, somente durante o inverno ou em dias nublados. Nos dias ensolarados, é preferível deixá-la dentro de casa, recebendo os raios solares de maneira indireta.", 80));
  dataProd.push(new Product("Bambu","Planta","60.00", "/img/planta4.webp", "É aconselhável colocá-la ao sol, em exposição direta, somente durante o inverno ou em dias nublados. Nos dias ensolarados, é preferível deixá-la dentro de casa, recebendo os raios solares de maneira indireta.", 15));
  dataProd.push(new Product("Coqueiro","Planta","55.99", "/img/planta6.webp", "É aconselhável colocá-la ao sol, em exposição direta, somente durante o inverno ou em dias nublados. Nos dias ensolarados, é preferível deixá-la dentro de casa, recebendo os raios solares de maneira indireta.", 3));
  dataProd.push(new Product("Regador Metal","Ferramentas","55.99", "/img/socker-watering-can-indoor-outdoor-galvanized__0635850_pe697471_s5.webp", "", 7));
  dataProd.push(new Product("Regador Preto","Ferramentas","55.99", "/img/salladskal-watering-can-indoor-outdoor-dark-gray__0569047_pe665790_s5.webp", "", 22));
  dataProd.push(new Product("Kit Ferramentas","Ferramentas","69.99", "/img/graesmaroe-3-piece-gardening-tool-set-indoor-outdoor-beige-light-turquoise__0952325_pe804314_s5.webp", "", 43));
  dataProd.push(new Product("Tesoura Poda","Ferramentas","22.99", "/img/jackfrukt-herb-scissors-beige__0953659_pe804255_s5.webp", "", 9));
  dataProd.push(new Product("Vaso Rosa","Vasos/Utensílios","69.99", "/img/chiafroen-plant-pot-indoor-outdoor-light-pink__0951777_pe804357_s5.webp", "", 8));
  dataProd.push(new Product("Vaso Branco","Vasos/Utensílios","69.99", "/img/chiafroen-plant-pot-white__0705516_pe725649_s5.webp", "", 7));
  dataProd.push(new Product("Vaso Cimento","Vasos/Utensílios","69.99", "/img/boysenbaer-plant-pot-indoor-outdoor-light-gray__0893430_pe782537_s5.webp", ""));
  dataProd.push(new Product("Argila Expandida","Terra","25.99", "/img/odla-growing-media-clay-pellets__0637562_pe698398_s5.webp", "", 6));

  for(let i of dataProd){
    try {
      let data = JSON.stringify(i);
      let fetch_data = {
        method:"PUT",
        body: data,
        headers: {
          'Content-Type': 'application/json'
        }
      }
      let resp = await fetch('http://localhost:3000/products', fetch_data)
      if(resp.status == 201)
        console.log("Produto cadastrado com sucesso!");

    } catch(e){
      console.log(e);
    }
  }


}

//initializates cart
var cart = localStorage.getItem("cart");
if(cart == null || cart == "") localStorage.setObj("cart", []);
