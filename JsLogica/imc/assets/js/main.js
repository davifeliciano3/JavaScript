function total() {
    const form = document.querySelector('.formulario');
    

    form.addEventListener('submit', function(e){
        e.preventDefault();
        const Inputaltura = e.target.querySelector('.altura');
        const Inputpeso = e.target.querySelector('.peso');

        const altura = Number(Inputaltura.value);
        const peso = Number(Inputpeso.value);
        
        
        //if (isNumber(altura))
        if (!peso) {
            setResultado('Peso inválido',false);
            return;
        }
        if (!altura) {
            setResultado('Altura inválido',false);
            return;
        }
        const imc =getImc(peso,altura);;
        const nivelImc = getNivelImc(imc);
        const msg = `Seu IMC é ${imc} (${nivelImc})`;

        setResultado(msg,true);
       
    });

    function getNivelImc(imc) {
        const nivel = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3'];

        if (imc >= 39.9) return nivel[5];

        if (imc >= 34.9) {
            return nivel[4];
        }
        if (imc >= 29.9) {
            return nivel[3];
        }
        if (imc >= 24.9) {
            return nivel[2];
        }
        if (imc >= 18.5) {
            return nivel[1];
        } else if (imc < 18.5) {
            return nivel[0];
        }
    }

    function getImc(peso,altura){
        const imc = peso / (altura * altura);
        return imc.toFixed(2);
    }

    function criaP() {
        const p = document.createElement('p');
        return p;
    
    }

   function setResultado(msg,isValid) {
     const resultado = document.querySelector('.resultado');
     resultado.innerHTML = '';
     const p = criaP();

     if (isValid) {
            p.classList.add('cor');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
     resultado.appendChild(p);

   }
}

total();