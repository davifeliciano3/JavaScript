//Math.floor() arredonda pra baixo
//Math.ceil() arredonda para cima
//Math.raund() arredonda
//Math.max() o maior numero de uma sequencia
//Math.max() menor número da sequencia
//Math.random() numero aleatorio entre 0 e 1
//Math.pow() potenciação
//pode dividir por zero infinity e verdadeiro

const numero = Number(prompt("Digite um numero"));
document.getElementById("numero").innerHTML = `Seu número é:${numero}`;

let raiz = document.getElementById("raiz");
raiz.innerHTML =`A raiz quadrada deste número é:${Math.sqrt(numero)}`;

let inteiro = document.getElementById("inteiro");
inteiro.innerHTML = `Numero é inteiro:${Number.isInteger(numero)}`;

let nan = document.getElementById("nan");
nan.innerHTML = `è NaN:${Number.isNaN(numero)}`;

let baixo = document.getElementById("baixo");
baixo.innerHTML = `Arredondando para baixo:${Math.floor(numero)}`;

let cima = document.getElementById("cima");
baixo.innerHTML = `Arredondando para cima:${Math.ceil(numero)}`;

let duas = document.getElementById("duas");
duas.innerHTML = `Duas casas decimais:${numero.toFixed(2)}`;