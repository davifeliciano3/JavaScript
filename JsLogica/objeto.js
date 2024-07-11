const pessoa1 = {
    nome:'Davi',
    sobrenome:'Feliciano',
    idade:19,

    fala(){
        console.log(`Olá:${this.nome} e Idade:${this.idade}`);
    },

    Idade() {
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.Idade();
pessoa1.fala();

function criaPessoa(nome,sobrenome,idade) {
   return {
    nome:nome,
    idade:idade,
    sobrenome:sobrenome
   } 
}
function criaPessoa(nome,sobrenome,idade) {
    return {
     nome,idade,sobrenome
    } 
 }