var app = new Vue({
    el: "#app",
    data: {
        errors: [],
        nome: null,
        sobrenome: null,
        telefone: null,
        email: null,
        senha: null,
        senha2: null,
        pais: null,
        cidade: null,
        UF: null,
        endereco: null,
        num: null,
        comp: null
    },
    methods:{
        store: async function(){
          var user = new User(this.nome, this.sobrenome, this.telefone, this.email, this.senha, this.pais, this.cidade, this.UF, this.endereco, this.num, this.comp, 1);

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
        },
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

            if(this.sobrenome) {

                if(!(/^[A-Za-z\s]+$/.test(this.nome))){
                    this.errors.push('Sobrenome não deve conter números ou caractéres especiais');
                }

            }

            if(this.telefone) {

                if(/[a-zA-Z]/g.test(this.telefone)){
                    this.errors.push('Telefone não deve conter letras');
                }

            }

            if(this.senha && this.senha2) {

                if (this.senha != this.senha2){
                    this.errors.push('Senhas não correspondem');
                }
            }

            if(this.pais) {

                if(!(/^[A-Za-z\s]+$/.test(this.pais))){
                    this.errors.push('País não deve conter números ou caractéres especiais');
                }

            }

            if(this.cidade) {

                if(!(/^[A-Za-z\s]+$/.test(this.cidade))){
                    this.errors.push('Cidade não deve conter números ou caractéres especiais');
                }

            }

            if(this.UF) {

                if(!/^[A-Za-z\s]+$/.test(this.UF) || this.UF.length != 2){
                    this.errors.push('UF deve estar no formato XX');
                }

            }

            console.log(this.nome)
            console.log(this.errors);
            if(this.errors.length == 0){
              this.store();
            }
        }
    }
});
