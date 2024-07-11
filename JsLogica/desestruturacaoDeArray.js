let a = 'a';
let b = 'b';
let c = 'c';

const letras = [b,c,a];
 [a,b,c]        = letras;
 //desestruturacao

 const numeros = [109,222,333,444,545,631,7,8,9];
 //const primeiro = numeros[0];
const [primeiro,segundo,  , quarto, ...resto] = numeros;
//resto == rest
//espalhar == spread

const numeros1 = [
    [1,2,3,4],
    [4,5,5,6],
    [9,7,3,2]
];
const [,[,,,seis]] = numeros1;
console.log(seis);
console.log(numeros1[0][1]);

const [lista1,lista2,lista3] = numeros1;
console.log(lista2[3]);