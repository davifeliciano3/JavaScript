//ObjectProperty- define apenas uma, Trava a classe
//ObjectProperties- define mais de uma
function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco

    Object.defineProperty(this,'estoque',{
        enumerable: true,//torna visivel chave
        value:estoque,//atribui valor
        writable: false,//pode ser alterado
        configurable:true //Apagar /reconfigurar
    })
    Object.defineProperty(this,'estoque',{
        enumerable: true,//torna visivel chave
        value: function(){
            return estoque;
        },//atribui valor
        writable: true,//pode ser alterado
        configurable:false //Apagar /reconfigurar
    })
}

const p1 = new Produto('Camisa',20,3);

function Produto2(nome,preco,estoque){


   Object.defineProperties(this,{
    nome:{
        enumerable: true,//torna visivel chave
        value:nome,//atribui valor
        writable: true,//pode ser alterado
        configurable:true //Apagar /reconfigurar
    },
    preco:{
        enumerable: true,//torna visivel chave
        value:preco,//atribui valor
        writable: true,//pode ser alterado
        configurable:true //Apagar /reconfigurar
    }
   })
}