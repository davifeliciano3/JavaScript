//IFFE -> Immediately invoked function expression
// tira a função do escopo global, mais segurança

 (function() {//pode receber parametros de fora
    const davi = 'davi'; // o escopo global não afeta o código
    console.log(davi);
    
 })();

const davi = 'a';