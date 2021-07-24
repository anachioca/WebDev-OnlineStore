var app = new Vue({
    el: "#app",
    data: {
        errors: [],
        nome: null,
        preco: null,
        categoria: null,
        cuidados: null
    },
    methods:{
        /* Função que checa se o formulário está corretamente preenchido */
        checkForm: function(e){
            this.errors = [];
            console.log(this.errors);

            if(this.nome) {
                
                console.log("tem um nome...")
                if(!(/^[A-Za-z\s]+$/.test(this.nome))){
                    console.log("e ele tem numeros!")
                    this.errors.push('Nome não deve conter números ou caractéres especiais');
                } 

            }

            if(this.preco) {

                if(this.preco <= 0){
                    this.errors.push('Preço deve ser maior que 0');
                }

            }

            if(this.categoria) {

                let categorias = ['plantas', 'ferramentas', 'vasos', 'solos'];
                if (!categorias.includes(this.categoria)) {
                    this.errors.push('Categoria Inexistente');
                }

            }

           

            console.log(this.nome)
            console.log(this.errors);
            e.preventDefault();
        }
    }
});