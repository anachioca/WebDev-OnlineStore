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
        comp: ""
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
            let resp = await fetch('/users', fetch_data)
            if(resp.status == 201){
              alert("Usuário cadastrado com sucesso!");
              window.location.replace("login.html")
            }else{
                alert("Email já cadastrado!");
            }
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

                console.log("tem um nome...")
                if(!(/^[A-Za-z\s]+$/.test(this.nome))){
                    console.log("e ele tem numeros!")
                    this.errors.push('Nome não deve conter números ou caractéres especiais');
                }

            }

            if(!this.nome) {
                this.errors.push('Nome obrigatório');
            }

            if(this.sobrenome) {

                if(!(/^[A-Za-z\s]+$/.test(this.sobrenome))){
                    this.errors.push('Sobrenome não deve conter números ou caractéres especiais');
                }

            }

            if(!this.sobrenome) {
                this.errors.push('Sobreome obrigatório');
            }

            if(this.telefone) {

                if(/[a-zA-Z]/g.test(this.telefone)){
                    this.errors.push('Telefone não deve conter letras');
                }

            }

            if(!this.telefone) {
                this.errors.push('Telefone obrigatório');
            }

            if(this.email) {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                if(!re.test(String(this.email).toLowerCase())){
                    this.errors.push('Email inválido');
                }
            }

            if(!this.email) {
                this.errors.push('Email obrigatório');
            }

            if(this.senha && this.senha2) {

                if (this.senha != this.senha2){
                    this.errors.push('Senhas não correspondem');
                }
            }

            if(!this.senha || !this.senha2) {
                this.errors.push('Senha obrigatória');
            }

            if(this.pais) {

                if(!(/^[A-Za-z\s]+$/.test(this.pais))){
                    this.errors.push('País não deve conter números ou caractéres especiais');
                }

            }

            if(!this.pais) {
                this.errors.push('País obrigatório');
            }

            if(this.cidade) {

                if(!(/^[A-Za-z\s]+$/.test(this.cidade))){
                    this.errors.push('Cidade não deve conter números ou caractéres especiais');
                }

            }

            if(!this.cidade) {
                this.errors.push('Cidade obrigatório');
            }

            if(this.UF) {

                if(!/^[A-Za-z\s]+$/.test(this.UF) || this.UF.length != 2){
                    this.errors.push('UF deve estar no formato XX');
                }

            }

            if(!this.UF) {
                this.errors.push('UF obrigatório');
            }

            if(this.errors.length == 0){
              this.store();
            }
        }
    }
});
