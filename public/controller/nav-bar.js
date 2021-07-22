//run the navbar function when the page is completely load
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ()=>{loadNavBar(); })
} else {
  loadNavBar()
}

//functions to set and get objects onto the localStorage
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

//loads the navbar onto html
function loadNavBar () {
	var userStatus = localStorage.getItem('user_status')
	var loggedUser = localStorage.getObj('logged_user')
	if (userStatus == 0) { // não logado
		// se não tiver logado e apertar meu carirnho, vai pra pagina de login

		li = `<li class="nav-item">
	          <a class="nav-link" href="../login/login.html">Meu Carrinho</a>
					</li>`

		button = `<button class="btn btn-outline-success btn-custom" type="button" onclick="location.href='../login/login.html';">Entre ou Cadastre-se</button>`


	} else if (userStatus == 1) { // logado
		li = `<li class="nav-item">
	          <a class="nav-link" href="../carrinho/carrinho.html">Meu Carrinho</a>
					</li>`
		button = `<button class="btn btn-outline-success btn-custom" type="button" onclick="location.href='../user-page/user-page.html';">Bem-vindo, ${loggedUser.name}</button>`


	} else { // admin
		li = `<li class="nav-item">
	          <a class="nav-link" href="../admin/admin.html">Administração</a>
					</li>`
		button = `<button class="btn btn-outline-success btn-custom" type="button" onclick="location.href='../user-page/user-page.html';">Bem-vindo, ${loggedUser.name}</button>`

	}

	var navbar = `
		<nav class="navbar navbar-expand-lg navbar-custom">

	        <a class="navbar-brand logo" href="../main/main.html"><img src="../img/logo.png" class="img-responsive"alt="logo"></a>

	        <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
	          <span class="navbar-toggler-icon"></span>
	        </button>

	        <div class="collapse navbar-collapse" id="navbarResponsive">
	          <ul class="navbar-nav mr-auto">
	            <li class="nav-item active">
	              <a class="nav-link" href="../produtos/produtos.html"> Produtos <span class="sr-only">(current)</span></a>
	            </li>
	            ${li}
	          </ul>


	          <form class="form-inline">
	          	${button}
	          </form>

	        </div>
	      </nav>
	      `;




	var header = document.getElementById('nav-bar-header')
	header.innerHTML = navbar
}
