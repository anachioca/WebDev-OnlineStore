var app = new Vue({
    el: "#app",
    data: {
        errors: [],
        nome: null,
        preco: null,
        categoria: null,
        imagem: null,
        cuidados: null
    },
    methods:{
        store: async function(){
            var product = new Product(this.nome, this.preco, this.categoria, this.imagem, this.cuidados, 1);
            console.log("produto...")

            try {
              let data = JSON.stringify(product);
              let fetch_data = {
                method:"PUT",
                body: data,
                headers: {
                  'Content-Type': 'application/json'
                }
              }
              let resp = await fetch('http://localhost:3000/products', fetch_data)
              if(resp.status == 201)
                alert("Produto cadastrado ou alterado com sucesso!");
                // window.location.replace("adminProd.html")
  
            } catch(e){
              console.log(e);
            }
            //redirect to login page
            
          },
  
        /* Função que checa se o formulário está corretamente preenchido */
        checkForm: function(e){
            this.errors = [];
            console.log(this.errors);

            if(this.nome) {
                
                if(!(/^[A-Za-z\s]+$/.test(this.nome))){
                    this.errors.push('Nome não deve conter números ou caractéres especiais');
                } 

            }

            if(!this.nome) {
                this.errors.push('Nome obrigatório');
            }

            if(this.preco) {

                if(this.preco <= 0){
                    this.errors.push('Preço deve ser maior que 0');
                }

            }

            if(!this.preco) {
                this.errors.push('Preço obrigatório');
            }

            if(this.categoria) {

                let categorias = ['plantas', 'ferramentas', 'vasos', 'solos'];
                if (!categorias.includes(this.categoria)) {
                    this.errors.push('Categoria Inexistente');
                }

            }

            if(!this.categoria) {
                this.errors.push('Categoria obrigatório');
            }

            if(!this.imagem) {
                this.errors.push('Imagem obrigatória');
            }

        
            if(this.errors.length == 0){
                this.store();
            }
        }
    }
});