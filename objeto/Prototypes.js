function Pessoa(nome,sobrenome){
    this.nome = nome,
    this.sobrenome = sobrenome
}

Pessoa.prototype.NomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`;
}
const davi = new Pessoa('Davi','Feliciano');
console.log(davi);
console.log(davi.NomeCompleto());

const A = {
    chaveA: 'A',
}
const B = {
    chaveB: 'B',
}
const C = new Object();
C.ChaveC = 'C';
Object.setPrototypeOf(B,A);
Object.setPrototypeOf(C,B);
B.chaveA;

//Produto -> aumento, desconto
//camiseta = cor, caneca = material
function Produto(nome,preco) {
    this.nome = nome,
    this.preco = preco
}

Produto.prototype.aumento = function(q){
    this.preco += q;
}
Produto.prototype.desconto = function(q){
    this.preco -= q;
}

function Camiseta(nome,preco,cor){
    Produto.call(this,nome,preco)
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome,preco,material) {
    Produto.call(this,nome,preco);
}
Caneca.prototype = Object.create(Produto.prototype)
const caneca = new Caneca('office',10);
caneca.aumento(10);
console.log(caneca.preco);
console.log(caneca);