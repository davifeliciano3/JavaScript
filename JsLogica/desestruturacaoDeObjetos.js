const pessoa = {
    nome:'Davi',
    sobrenome:'Feliciano',
    idade:'19',
    endereco: {
        rua:6,
        bairo:'guara I'
    }
}
const nome1 =pessoa.nome
//atribuição via desestruturação
const {nome:teste, sobrenome='',idade} = pessoa;
const {
    endereco:{rua:r, bairo}
} = pessoa;
console.log(r,bairo);

const {nome:NomeUsuario,...resto} = pessoa;
