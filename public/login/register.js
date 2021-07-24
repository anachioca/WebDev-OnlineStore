var email_
var password_

//functions to set and get objects onto the localStorage
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
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
    console.log(login.email);
    console.log(login.password);

		let data = JSON.stringify(login);
		let fetch_data = {
			method:"POST",
			body: data,
			headers: {
				'Content-Type': 'application/json'
			}
		}
		let resp = await fetch('http://localhost:3000/users/login', fetch_data)
    resp  = await resp.json();
    console.log(resp);
    if(resp.erro == 0){
		  var user = resp.user;
      console.log(user);
		  localStorage.setObj("logged_user", user);
		  localStorage.setItem("user_status", user.perm);
      alert("Bem vindo "+user.name+"!")
      window.location.replace("../main/main.html")
    }else if(resp.erro == 1){
      alert("Senha incorreta")
    }else{
      alert("Usuário não encontrado")
    }

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
