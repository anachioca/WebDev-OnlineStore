if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

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

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

function ready(){
  data_users = localStorage.getObj("data_users");

  if(data_users == null){
    var data_users = [];
    var adm = new User("Ana Laura","Mello", "123", "admin@admin.com", "321321", "Brasil", "São Carlos", "SP", "Rua Luiz Vaz de Toledo Piza", "222", "", 2)
    data_users.push(adm);

    var u = new User("Ana Laura","Mello", "123", "1@1", "123", "Brasil", "São Carlos", "SP", "Rua Luiz Vaz de Toledo Piza", "222", "", 1)
    data_users.push(u)
    var u = new User("Ana Laura","Mello", "123", "2@2", "123", "Brasil", "São Carlos", "SP", "Rua Luiz Vaz de Toledo Piza", "222", "", 1)
    data_users.push(u)
    var u = new User("Ana Laura","Mello", "123", "3@3", "123", "Brasil", "São Carlos", "SP", "Rua Luiz Vaz de Toledo Piza", "222", "", 1)
    data_users.push(u)

    localStorage.setObj("data_users", data_users);
  }

  var user_setup = localStorage.getItem("user_status");

  if(user_setup == null || user_setup == ""){

    localStorage.setObj("logged_user", {});
    localStorage.setItem("user_status", 0);
    localStorage.setObj("cart", []);
  }
}
