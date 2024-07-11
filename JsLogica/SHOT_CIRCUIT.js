/*
&& -> false && true -> false "o própio valor"
|| -> true && false -> vai retornar "o primeiro valor verdadeiro"

FALSY
false
0
'' "" ``
null/ undefined
NaN
*/ 

function fala(){
    return 'Olá';
}
const vaiExecutar = 'davi';
console.log(vaiExecutar && fala());

console.log(0|| false||null||true||'davi');