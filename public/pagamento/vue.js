//functions to set and get objects onto the localStorage
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}


var app = new Vue({
    el: "#app",
    data: {
        errors: [],
        nomeCompleto: null,
        telefone: null,
        email: null,
        pais: null,
        cidade: null,
        UF: null,
        endereco: null,
        num: null,
        nomeCartao: null,
        cartao: null,
        valCartao: null,
        CVV: null
    },
    methods:{
        sell: async function(){
            var cart = await localStorage.getObj("cart")
            console.log(cart.length)
            for (let i of cart) {
                try {
                    let data = JSON.stringify(i)
                    console.log(data)
                    let fetch_data = {
                        method: "PUT",
                        body: data,
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                    console.log(fetch_data)
                    let resp = await fetch('/products/'+i+'/sell', fetch_data)
                    if(resp.status == 201) {
                        console.log('Venda efetuada com sucesso!');
                        localStorage.setObj("cart", []) // se deu td certo, remove os itens do carrinho
                        /* Em uma aplicação real, dados seriam enviados para distribuidora. */
                        alert('Compra efeituada com sucesso! Obrigada por comprar em nossa loja! :)')
                        window.location.replace("../main/main.html")
                    } else {
                        console.log('Algo deu errado...');
                    }

                } catch(e) {
                    console.log(e);
                }
            }
          },

        /* Função que checa se o formulário está corretamente preenchido */
        checkForm: function(e){
            this.errors = [];

            if(this.nomeCompleto) {

                if(!(/^[A-Za-z\s]+$/.test(this.nomeCompleto))){
                    this.errors.push('Nome não deve conter números ou caractéres especiais');
                }

            }

            if(!this.nomeCompleto) {
                this.errors.push('Nome obrigatório');
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

            if(!this.pais) {
                this.errors.push('País obrigatório');
            }
            
            if(!this.cidade) {
                this.errors.push('Cidade obrigatório');
            }

            if(!this.endereco) {
                this.errors.push('Endereço obrigatório');
            }

            if(this.cidade) {

                if(!/^[A-Za-z\s]+$/.test(this.cidade)){
                    this.errors.push('Cidade não deve conter números ou caracteres especiais');
                }

            }

            if(this.UF) {

                if(!/^[A-Za-z\s]+$/.test(this.UF) || this.UF.length != 2){
                    this.errors.push('UF deve estar no formato XX');
                }

            }

            if(!this.UF) {
                this.errors.push('UF obrigatório');
            }


            if(this.nomeCartao) {

                if(!(/^[A-Za-z\s]+$/.test(this.nomeCartao))){
                    this.errors.push('Nome não deve conter números ou caractéres especiais');
                }

            }

            if(!this.nomeCartao) {
                this.errors.push('Nome Cartão obrigatório');
            }

            if(this.cartao) {

                var regExp = /[a-zA-Z]/g;

                if(regExp.test(this.cartao)){
                    this.errors.push('Cartao não deve conter letras');
                }

            }

            if(!this.cartao) {
                this.errors.push('Número do cartão obrigatório');
            }

            if(this.valCartao) {

                var data = this.valCartao.split("/");

                if (data[0] > 12 || data[0] < 1){
                    this.errors.push('Validade do cartão inválida.');
                }

                if (data[1] < 21){
                    this.errors.push('Validade do cartão inválida.');
                }

                if (!this.valCartao.includes("/") || this.valCartao.length != 5){
                    this.errors.push('Validade do cartão deve estar no formato MM/AA');
                }

            }

            if(!this.valCartao) {
                this.errors.push('Data de validade obrigatório');
            }

            if(this.CVV) {

                var regExp = /[a-zA-Z]/g;

                if(regExp.test(this.CVV) || this.CVV.length != 3){
                    this.errors.push('CVV inválido');
                }

            }

            if(!this.CVV) {
                this.errors.push('CVV obrigatório');
            }

            console.log(this.errors)

            if(this.errors.length == 0){
                console.log("sell")
                this.sell();
            }
        }
    }
});
