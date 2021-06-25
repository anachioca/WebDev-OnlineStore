class User{
  constructor(name, lastname, phone, email, password, country, city, uf, end, num, comp){
    this.name = name;
    this.lastname = lastname;
    this.phone = phone;
    this.email = email;
    this.password = password;
    this.country = country;
    this.city = city;
    this.uf = uf;
    this.end = end;
    this.num = num;
    this.comp = comp;
    this.hist = [];
  }
}

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}
