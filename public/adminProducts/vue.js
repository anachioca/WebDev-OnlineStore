var app = new Vue({
    el: "#app",
    data: {
        errors: [],
        nome: null,
        preco: null,
        categoria: null,
        imagem: null,
        quant: null,
        cuidados: ""
    },
    methods:{
        store: async function(){
            var product = new Product(this.nome, this.categoria, this.preco, this.imagem, this.cuidados, this.quant);
            console.log("produto...")
            console.log(product);
            try {
              let data = JSON.stringify(product);
              let fetch_data = {
                method:"PUT",
                body: data,
                headers: {
                  'Content-Type': 'application/json'
                }
              }
              console.log(fetch_data);
              let resp = await fetch('/products', fetch_data)
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

            if(this.quant) {

                if(this.quant <= 0){
                    this.errors.push('Quantidade deve ser maior que 0');
                }

            }

            if(!this.quant) {
                this.errors.push('Quantidade obrigatório');
            }

            if(this.categoria) {

                let categorias = ['Plantas', 'Ferramentas', 'Vasos', 'Solos'];
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
