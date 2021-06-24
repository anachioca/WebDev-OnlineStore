var email_ = document.getElementsByClassName('email_') // from register
var password_ = document.getElementsByClassName('password_') // from register

console.log(document.getElementsByClassName('btt-reg'))
document.getElementsByClassName("btt-reg")[1].addEventListener("click", store)

// from register
function store() {
	localStorage.setItem('email_', email_.value)
	localStorage.setItem('password_', password_.value)
}

// check in login
function check() {
	var storedEmail = localStorage.getItem('email_')
	var storedPw = localStorage.getItem('password_')

	// entered data in login forms
	var userEmail = document.getElementById('emailF');
    var userPw = document.getElementById('passwordF');

    if (userEmail.value == storedEmail && userPw == storedPw) {
    	alert('Você está logado.')
    } else {
    	alert('ERRO!')
    }
}