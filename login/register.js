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
	if(password_[0].value == password_[1].value){
		localStorage.setItem('email_', email_.value)
		localStorage.setItem('password_', password_[0].value)
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
