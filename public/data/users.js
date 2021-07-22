//run the ready functio when the page is completely load
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

//user class
class User{
  constructor(name, lastname, phone, email, password, country, city, uf, adress, num, comp, perm){
    this.name = name;
    this.lastname = lastname;
    this.phone = phone;
    this.email = email;
    this.password = password;
    this.country = country;
    this.city = city;
    this.uf = uf;
    this.adress = adress;
    this.num = num;
    this.comp = comp;
    this.perm = perm;
    this.hist = [];
  }
}

//functions to set and get objects onto the localStorage
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}


function ready(){
  data_users = localStorage.getObj("data_users");
//if the fake database doesn't exists creates it
  if(data_users == null){
    var data_users = [];
    var adm = new User("Ana Laura","Mello", "123", "admin@admin.com", "321321", "Brasil", "São Carlos", "SP", "Rua Luiz Vaz de Toledo Piza", "222", "", 2)
    data_users.push(adm);

    var u = new User("Paulo","Teresa", "11929102812", "1@1", "123", "Brasil", "Piracicaba", "SP", "Rua Rosa", "111", "", 1)
    data_users.push(u)
    var u = new User("Zé","Silva", "11929102843", "2@2", "123", "Brasil", "São José do Rio Preto", "SP", "Rua Azul", "222", "", 1)
    data_users.push(u)
    var u = new User("João","Santos", "11929108112", "3@3", "123", "Brasil", "Guarujá", "SP", "Rua Amarela", "333", "", 1)
    data_users.push(u)

    localStorage.setObj("data_users", data_users);
  }

  //initializates user local information
  var user_setup = localStorage.getItem("user_status");

  if(user_setup == null || user_setup == ""){

    localStorage.setObj("logged_user", {});
    localStorage.setItem("user_status", 0);
    localStorage.setObj("cart", []);
  }
}
