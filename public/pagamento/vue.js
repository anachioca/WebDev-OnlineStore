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
            console.log("oii");

            /* Caso o usuário tenha preenchido o telefone, checa se foi preenchido corretamente */
            if(this.telefone) {

                var regExp = /[a-zA-Z]/g;
            
                if(regExp.test(this.telefone)){
                    this.errors.push('Telefone não deve conter letras');
                } 

            }

            e.preventDefault();
        }
    }
});