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
  //initializates user local information
  var user_setup = localStorage.getItem("user_status");

  if(user_setup == null || user_setup == ""){

    localStorage.setObj("logged_user", {});
    localStorage.setItem("user_status", 0);
    localStorage.setObj("cart", []);
  }
}
