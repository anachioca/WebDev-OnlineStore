var email_
var password_


function reg_setup(){
	email_ = document.getElementsByClassName('email_')[0] // from register
	password_ = document.getElementsByClassName('password_') // from register

	button = document.getElementsByClassName("btt-reg")[0]
	button.addEventListener("click", store)
}

function login_setup(){
	email_ = document.getElementsByClassName('emailL')[0] // from register
	password_ = document.getElementsByClassName('passwordL')[0] // from register
	console.log(email_);
	button = document.getElementsByClassName("btt-log")[0]
	console.log(button);
	button.addEventListener("click", check)
}

// from register
function store() {
	var name = document.getElementsByClassName('name_')
	var	lastname = document.getElementsByClassName('lastname_')
	var phone = document.getElementsByClassName('phone_')
	var email = document.getElementsByClassName('email_')
	var password = document.getElementsByClassName('password_')
	var country = document.getElementsByClassName('country_')
	var city = document.getElementsByClassName('city_')
	var uf = document.getElementsByClassName('uf_')
	var adress = document.getElementsByClassName('adress_')
	var num = document.getElementsByClassName('number_')
	var comp = document.getElementsByClassName('comp_')

	if(password_[0].value == password_[1].value){
		window.location.replace("login.html")
	}else{
		alert("As senhas estão diferente, por favor tente novamente")
	}
}

// check in login
function check() {
	var storedEmail = localStorage.getItem('email_')
	var storedPw = localStorage.getItem('password_')

	// entered data in login forms
	var userEmail = document.getElementsByClassName('emailL')[0];
    var userPw = document.getElementsByClassName('passwordL')[0];

    if (userEmail.value == storedEmail && userPw.value == storedPw) {
			localStorage.setItem("parmission", 1)
    	alert('Você está logado.')
    } else {
			localStorage.setItem("parmission", 0)
    	alert('ERRO!')
    }
}
