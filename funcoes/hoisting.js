function falaoi() {
    console.log('oi')
}//function hoisting eleva a função para o topo
//da mesma forma que o var faz

//First-class objects(objetos de primeira classe)
//A função pode ser tratada como Dado
//Function expression

const souumdado = function() {
    console.log("sou um dado");
};
souumdado();

function executaFuncao(funcao) {
    funcao();
}
executaFuncao(souumdado);

//Arrow function

const arrowF = () => {
    console.log("Sou um arrow function");
}

arrowF();

const obj = {
    falar:function() {
        console.log("Função dentro do objeto");
    },
    falarD() {
        console.log("Função direta dentro do objeto");
    }
};

