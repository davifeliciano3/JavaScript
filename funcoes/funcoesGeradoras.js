//Consegue 'pausar' o código em determinado local
// Funções geradoras permitem que você pause e retome a execução do
// código. Elas são definidas com a sintaxe function* e utilizam a palavra-chave 
//yield para pausar a execução e retornar um valor.
function* geradora1() {
    //código
    yield 'Valor 1;'
        //código
    yield 'Valor 2;'
        //código
    yield 'Valor 3;'
        //código
    yield 'Valor 4;'
};

const g1 =geradora1();
console.log(g1);
console.log(g1.next());
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

