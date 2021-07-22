//Product calss
class Product{
  constructor(id, name, cat, price, img, cuidados){
    this.id = id;
    this.name = name;
    this.cat = cat;
    this.price = price;
    this.img = img;
    this.cuidados = cuidados;
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
if (users == null || users == "") {
  var dataProd = [];

  //adding products to the fake data base
  dataProd.push(new Product("0","Monstera","Planta","29.99", "/img/planta1.webp", "É aconselhável colocá-la ao sol, em exposição direta, somente durante o inverno ou em dias nublados. Nos dias ensolarados, é preferível deixá-la dentro de casa, recebendo os raios solares de maneira indireta."));
  dataProd.push(new Product("1","Espadinha","Planta","29.99", "/img/planta2.webp", "Suas regas deverão ser bem espaçadas, ocorrendo uma vez a cada 20 dias. Como não permite poda, é recomendável realizar uma limpeza no momento em que sua touceira esteja muito cheia, eliminando as folhagens mais antigas e deixando as mais novas."));
  dataProd.push(new Product("2","Eucalipto","Planta","29.99", "/img/planta8.webp", "Deve manter em um ambiente que receba luz, não tendo problema em receber o sol diretamente. Pode ser regada diariamente, lembrando de nunca deixar o solo encharcado."));
  dataProd.push(new Product("3","Clusia","Planta","23.50", "/img/planta5.webp", "É aconselhável colocá-la ao sol, em exposição direta, somente durante o inverno ou em dias nublados. Nos dias ensolarados, é preferível deixá-la dentro de casa, recebendo os raios solares de maneira indireta."));
  dataProd.push(new Product("4","Bambu","Planta","60.00", "/img/planta4.webp", "É aconselhável colocá-la ao sol, em exposição direta, somente durante o inverno ou em dias nublados. Nos dias ensolarados, é preferível deixá-la dentro de casa, recebendo os raios solares de maneira indireta."));
  dataProd.push(new Product("5","Coqueiro","Planta","55.99", "/img/planta6.webp", "É aconselhável colocá-la ao sol, em exposição direta, somente durante o inverno ou em dias nublados. Nos dias ensolarados, é preferível deixá-la dentro de casa, recebendo os raios solares de maneira indireta."));
  dataProd.push(new Product("6","Regador Metal","Ferramentas","55.99", "/img/socker-watering-can-indoor-outdoor-galvanized__0635850_pe697471_s5.webp", ""));
  dataProd.push(new Product("7","Regador Preto","Ferramentas","55.99", "/img/salladskal-watering-can-indoor-outdoor-dark-gray__0569047_pe665790_s5.webp", ""));
  dataProd.push(new Product("8","Kit Ferramentas","Ferramentas","69.99", "/img/graesmaroe-3-piece-gardening-tool-set-indoor-outdoor-beige-light-turquoise__0952325_pe804314_s5.webp", ""));
  dataProd.push(new Product("9","Tesoura Poda","Ferramentas","22.99", "/img/jackfrukt-herb-scissors-beige__0953659_pe804255_s5.webp", ""));
  dataProd.push(new Product("10","Vaso Rosa","Vasos/Utensílios","69.99", "/img/chiafroen-plant-pot-indoor-outdoor-light-pink__0951777_pe804357_s5.webp", ""));
  dataProd.push(new Product("11","Vaso Branco","Vasos/Utensílios","69.99", "/img/chiafroen-plant-pot-white__0705516_pe725649_s5.webp", ""));
  dataProd.push(new Product("12","Vaso Cimento","Vasos/Utensílios","69.99", "/img/boysenbaer-plant-pot-indoor-outdoor-light-gray__0893430_pe782537_s5.webp", ""));
  dataProd.push(new Product("13","Argila Expandida","Terra","25.99", "/img/odla-growing-media-clay-pellets__0637562_pe698398_s5.webp", ""));

  localStorage.setObj("data_prod", dataProd);
}

//initializates cart
var cart = localStorage.getItem("cart");
if(cart == null || cart == "") localStorage.setObj("cart", []);
