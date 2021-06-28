var email_
var password_

//functions to set and get objects onto the localStorage
Storage.prototype.setObj = function(key, obj) {
	return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
	return JSON.parse(this.getItem(key))
}

//setup register functionality
function reg_setup(){
	email_ = document.getElementsByClassName('email_')[0] // from register
	password_ = document.getElementsByClassName('password_') // from register

	button = document.getElementsByClassName("btt-reg")[0]
	button.addEventListener("click", store)
}

//setup login functionality
function login_setup(){
	email_ = document.getElementsByClassName('emailL')[0] // from register
	password_ = document.getElementsByClassName('passwordL')[0] // from register
	console.log(email_);
	button = document.getElementsByClassName("btt-log")[0]
	console.log(button);
	button.addEventListener("click", check)
}

//stores the user information in database
function store() {
	//get the input data
	var name = document.getElementsByClassName('name_')[0].value
	var	lastname = document.getElementsByClassName('lastname_')[0].value
	var phone = document.getElementsByClassName('phone_')[0].value
	var email = document.getElementsByClassName('email_')[0].value
	var password = document.getElementsByClassName('password_')
	var country = document.getElementsByClassName('country_')[0].value
	var city = document.getElementsByClassName('city_')[0].value
	var uf = document.getElementsByClassName('uf_')[0].value
	var adress = document.getElementsByClassName('adress_')[0].value
	var num = document.getElementsByClassName('number_')[0].value
	var comp = document.getElementsByClassName('comp_')[0].value

	//check if the passwords are the same
	if(password_[0].value == password_[1].value){
		//add the user to the data base
		var user = new User(name, lastname, phone, email, password[0].value, country, city, uf, adress, num, comp, 1);
		var data_users = localStorage.getObj("data_users");
		data_users.push(user);
		localStorage.setObj("data_users", data_users);
		//redirect to login page
		window.location.replace("login.html")
	}else{
		alert("As senhas estão diferentes, por favor tente novamente")
	}
}

// check in login
function check() {


	// entered data in login forms
	var userEmail = document.getElementsByClassName('emailL')[0].value;
  var userPw = document.getElementsByClassName('passwordL')[0].value;

	//error flag
	var error = true;

	//load users from memory
	var data_users = localStorage.getObj("data_users");


	//check the login
	for(let i of data_users){
		if(i.email == userEmail){
			error = false;
			if(i.password == userPw){
				//set the user as logged
				var user = i;
				localStorage.setObj("logged_user", i);
				localStorage.setItem("user_status", i.perm);
				break;
			}else{
				error = true;
				break;
			}
		}
	}

	//user response message
	if(error == true){
		alert("Email ou senha incorretos");
	}else{
		alert("Bem vindo "+user.name+"!")
		window.location.replace("../main/main.html")
	}

}

//logout script
function logout(){
	localStorage.setObj("logged_user", {});
	localStorage.setItem("user_status", 0);
	localStorage.setItem("cart", []);
	window.location.replace("../main/main.html")
}
