function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco
    let estoqueValor = estoque;
    Object.defineProperty(this,'estoque',{
        enumerable: true,//torna visivel chave
        //value:estoque,//atribui valor
        //writable: false,//pode ser alterado
        configurable:true, //Apagar /reconfigurar
        get : function(){
            return estoqueValor;
        },
        set : function(valor){
            if (typeof valor !== 'number'){
                console.log('Valor não é número');
                return;
            }
            estoqueValor = valor;
        }
    })

}

const p1 = new Produto('Camisa',20,3);