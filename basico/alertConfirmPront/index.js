//alert('Bem-Vindo!');
//confirm
//prompt

//const num1 = Number(prompt("Digite um número: "));
//const num2 = Number(prompt("Digite um número: "));

//let resultado = num1 + num2;
//alert(`O resultado é ${resultado}`);
let temp;
let varA = 'A';//B
let varB = 'B';//C/
let varC = 'C';//A
temp = varA;
varA = varB;
varB = varC;
varC = temp;
[varA,varB,varC] = [varB,varC,varA];
console.log(`varA:${varA} varB:${varB} varC:${varC}`);