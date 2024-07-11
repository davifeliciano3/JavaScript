//Filtrar números pares
const a = [1,2,3,4,5,6,7,8,9,10];
const numerosPares = a.filter(valor => valor % 2 ===0
);
console.log(numerosPares);

//Filtrar números maiores que 5
const maiorQueCinco = a.filter(valor => valor>5);
console.log(maiorQueCinco);

//Filtrar palavras com mais de 3 letras
const nome = ['Davi','Juliana','Ivanilde','Edn','Let','sos'];
const nomeMaiorQueTres = nome.filter(valor => (valor.length > 3));
console.log(nomeMaiorQueTres);

//Filtrar números positivos
const n = [-1,-3,-2,-5,1,3,5,2,3,1];
const nP = n.filter( valor => valor > 0);
console.log(nP);

//Filtrar produtos com preço maior que um valor específico
const produtos = [
    {produto:'Chocolate',preco:10},
    {produto:'pão',preco:5},
    {produto:'balinha',preco:1},
    {produto:'peixe',preco:20},
    {produto:'queijo',preco:4},
]

const produtoPorValor = produtos.filter((valor) => (valor.preco > 10))
console.log(produtoPorValor);

//Filtrar pessoas maiores de idade
const pessoas = [
    {Nome:'Davi',Idade:19},
    {Nome:'Let',Idade:15},
    {Nome:'Paulo',Idade:18},
    {Nome:'Carlos',Idade:30},
]
const Maior18 = pessoas.filter(valor => valor.Idade >= 18);
console.log(Maior18);

//Filtrar números primos
const n2 = [2,3,8,7,10,15];
const primo = n2.filter(function(valor){
    
});
console.log(primo);