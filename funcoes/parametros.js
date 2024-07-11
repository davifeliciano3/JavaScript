function funcao(a,b,c) {
    let total =0;
    for(let argumento of arguments) {
        total += argumento;
    }
    console.log(total,a,b,c);
}
funcao(1,2,3,1,23,1);

function soma(a,b = 2,c = 4) {
    //b = b || 0;
    console.log(a+b+c);
}
soma(2);
soma(2,'',32);
soma(2,undefined,1);

function soma2({nome,sobrenome,idade}) {
    console.log(nome,sobrenome,idade);
}
soma2({nome:'davi',sobrenome:'feliciano',idade:19});

let obj = {nome:'davi',sobrenome:'feliciano',idade:19}
soma2(obj);

function somaarray([valor1,valor2,valor3]) {
    console.log(valor1,valor2,valor3);
}
let arra = [1,2,3];

somaarray(arra);


function conta(operador,acumulador,...numeros) {
    console.log(operador,acumulador,numeros);
    for (let numero of numeros) {

        if (operador === '+') acumulador +=numero;
        if (operador === '-') acumulador -=numero;
        if (operador === '/') acumulador /=numero;
        if (operador === '*') acumulador *=numero;
    }

    console.log(acumulador);
}

//conta('+',0,[20,30,60,80]);//sem rest
conta('+',0,20,30,60,80);//com rest

const contaE = function(operador,acumulador,...numeros) {
    console.log(operador,acumulador,numeros);
    for (let numero of numeros) {

        if (operador === '+') acumulador +=numero;
        if (operador === '-') acumulador -=numero;
        if (operador === '/') acumulador /=numero;
        if (operador === '*') acumulador *=numero;
    }

    console.log(acumulador);
};

const contaA = (operador,acumulador,...numeros) =>{
    console.log(operador,acumulador,numeros);
    for (let numero of numeros) {

        if (operador === '+') acumulador +=numero;
        if (operador === '-') acumulador -=numero;
        if (operador === '/') acumulador /=numero;
        if (operador === '*') acumulador *=numero;
    }

    console.log(acumulador);
    console.log(arguments)//Arguments não funciona em arrow funciton
    console.log(args)//já funciona
}

contaA('+',0,34,22,33,55);