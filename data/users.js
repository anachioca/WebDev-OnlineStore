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

data_users = localStorage.getObj("data_users");

if(data_users == null){
  var data_users = [];
  var adm = new User("Ana Laura","Mello", "123", "admin@admin.com", "321321", "Brasil", "São Carlos", "SP", "Rua Luiz Vaz de Toledo Piza", "222", "", 2)

  data_users.push(adm);

  localStorage.setObj("data_users", data_users);
}
