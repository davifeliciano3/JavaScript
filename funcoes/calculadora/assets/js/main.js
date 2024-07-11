function criaCalculadora() {
    return {
        display:document.querySelector('.display'),
        btnClear:document.querySelector('btn-num-clear'),
        ClearDisplay(){
            this.display.value = '';
        },
        inicia() {
            this.clickBotao();
            this.pressionaEnter();
        },
        pressionaEnter(){
            this.display.addEventListener('keyup',(e)=>{
                if (e.keyCode===13) {
                    this.realizaConta();
                }
            });
        },
        ApagaUm(){
            this.display.value = this.display.value.slice(0,-1);
        },
        realizaConta(){
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
        },
        clickBotao() {
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
        },
        btnParaDisplay(valor){
            this.display.value +=valor;
        },
    };
}

const calculadora = criaCalculadora();

calculadora.inicia();