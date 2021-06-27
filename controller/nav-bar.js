if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ()=>{loadNavBar(); })
} else {
  loadNavBar()
}

function loadNavBar () {
	console.log('oi')
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
	            <li class="nav-item">
	              <a class="nav-link" href="../terra/produtos.html">Terra</a>
	            </li>
	            <li class="nav-item">
	                <a class="nav-link" href="../vasos/produtos.html">Vasos</a>
	            </li>
	            <li class="nav-item">
	                <a class="nav-link" href="../ferramentas/produtos.html">Ferramentas</a>
	            </li>
	            <li class="nav-item">
	                <a class="nav-link" href="../carrinho/carrinho.html">Meu Carrinho</a>
	            </li>

	          </ul>

	          <form class="form-inline">
	            <button class="btn btn-outline-success btn-custom" type="button" onclick="location.href='../login/login.html';">Entre ou Cadastre-se</button>
	          </form>

	        </div>
	      </nav>
	      `;

	var header = document.getElementById('nav-bar-header')
	header.innerHTML = navbar
}
