function Calculadora() {
    this.display  = document.querySelector('.display');
    this.btnClear = document.querySelector('btn-num-clear');

    this.ClearDisplay =function(){
        this.display.value = '';
    };
    this.inicia = function() {
        this.clickBotao();
        this.pressionaEnter();
    };
    this.pressionaEnter = function(){
        this.display.addEventListener('keyup',(e)=>{
            if (e.keyCode===13) {
                this.realizaConta();
            }
        });
    };

    this.ApagaUm = function(){
        this.display.value = this.display.value.slice(0,-1);
    };
    this.realizaConta = function(){
        let conta = this.display.value;

        try{
            conta = eval(conta);
            if(!conta){
                alert('Conta inválida');
                this.ClearDisplay();
                return;
            }

            this.display.value = String(conta);
        }catch(e){
            alert('Conta inválida');
            this.ClearDisplay();
            return;
        }
    };
    this.clickBotao = function() {
        document.addEventListener('click',(e) =>{//Arrow function não altera o this
            const el = e.target;
            
            if (el.classList.contains('btn-num')){
                this.btnParaDisplay(el.innerText);
            }
            if (el.classList.contains('btn-num-clear')){
                this.ClearDisplay();
            }
            if(el.classList.contains('btn-num-del')){
                this.ApagaUm();
            }
            if(el.classList.contains('btn-num-eq')){
                this.realizaConta();
            }
            this.display.focus();
        });
    };
    this.btnParaDisplay = function(valor){
        this.display.value +=valor;
    };
};

const calculadora = new Calculadora();
calculadora.inicia();