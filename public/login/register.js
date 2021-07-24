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
async function store() {

	//get the input data
	var _name = document.getElementsByClassName('name_')[0].value
	var	_lastname = document.getElementsByClassName('lastname_')[0].value
	var _phone = document.getElementsByClassName('phone_')[0].value
	var _email = document.getElementsByClassName('email_')[0].value
	var _password = document.getElementsByClassName('password_')
	var _country = document.getElementsByClassName('country_')[0].value
	var _city = document.getElementsByClassName('city_')[0].value
	var _uf = document.getElementsByClassName('uf_')[0].value
	var _adress = document.getElementsByClassName('adress_')[0].value
	var _num = document.getElementsByClassName('number_')[0].value
	var _comp = document.getElementsByClassName('comp_')[0].value

	//check if the passwords are the same
	if(password_[0].value == password_[1].value){
		//add the user to the data base
		var user = new User(_name, _lastname, _phone, _email, _password[0].value, _country, _city, _uf, _adress, _num, _comp, 1);
		
		try {
			let data = JSON.stringify(user);
			let fetch_data = {
				method:"PUT",
				body: data,
				headers: {
					'Content-Type': 'application/json'
				}
			}
			let resp = await fetch('http://localhost:3000/users', fetch_data)
			if(resp.status == 201)
				alert("Usuário cadastrado com sucesso!");

		} catch(e){
			console.log(e);
		}
		//redirect to login page
		window.location.replace("login.html")
	}else{
		alert("As senhas estão diferentes, por favor tente novamente")
	}

}

// check in login
async function check() {


	// entered data in login forms
	var userEmail = document.getElementsByClassName('emailL')[0].value;
  	var userPw = document.getElementsByClassName('passwordL')[0].value;

	//load users from memory
	var data_users = localStorage.getObj("data_users");

	try {
		var login = {
			email: userEmail,
			password: userPw
		}
		let data = JSON.stringify(login);
		let fetch_data = {
			method:"POST",
			body: data,
			headers: {
				'Content-Type': 'application/json'
			}
		}
		let resp = await fetch('http://localhost:3000/login', fetch_data)
		var user = resp.body.user;
		localStorage.setObj("logged_user", user);
		localStorage.setItem("user_status", user.perm);

		alert("Bem vindo "+user.name+"!")
		window.location.replace("../main/main.html")

	} catch(e){
		alert("Erro! Tente novamente.")
		console.log(e);
	}
}

//logout script
function logout(){
	localStorage.setObj("logged_user", {});
	localStorage.setItem("user_status", 0);
	localStorage.setItem("cart", []);
	window.location.replace("../main/main.html")
}