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
        /* Função que checa se o formulário está corretamente preenchido */
        checkForm: function(e){
            this.errors = [];

            if(this.nomeCompleto) {

                if(!(/^[A-Za-z\s]+$/.test(this.nomeCompleto))){
                    this.errors.push('Nome não deve conter números ou caractéres especiais');
                }

            }

            if(this.UF) {

                if(!/^[A-Za-z\s]+$/.test(this.UF) || this.UF.length != 2){
                    this.errors.push('UF deve estar no formato XX');
                }

            }

            if(this.telefone) {

                if(/[a-zA-Z]/g.test(this.telefone)){
                    this.errors.push('Telefone não deve conter letras');
                }

            }

            if(this.nomeCartao) {

                if(!(/^[A-Za-z\s]+$/.test(this.nomeCompleto))){
                    this.errors.push('Nome não deve conter números ou caractéres especiais');
                }

            }

            if(this.cartao) {

                var regExp = /[a-zA-Z]/g;

                if(regExp.test(this.telefone)){
                    this.errors.push('Telefone não deve conter letras');
                }

            }

            if(this.valCartao) {

                var data = this.valCartao.split("/");

                if (data[0] > 12 || data[0] < 1){
                    this.errors.push('Validade do cartão inválida.');
                }

                if (data[1] < 21){
                    this.errors.push('Validade do cartão inválida.');
                }

                if (!this.nascimento.includes("/") || this.nascimento.length != 5){
                    this.errors.push('Validade do cartão deve estar no formato MM/AA');
                }

            }

            if(this.CVV) {

                var regExp = /[a-zA-Z]/g;

                if(regExp.test(this.telefone) || this.CVV.length != 3){
                    this.errors.push('CVV inválido');
                }

            }

            e.preventDefault();
        }
    }
});
