//Função construtura -> objeto Pessoa (new) cria um novo objeto 
//vazia faz o this apontar
// para o objeto que esta sendo utilizando e retona o mesmo

function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    const ID = 123;//atributo privado
    const metodoInterno = ()=>{

    };

    this.metodo = function() {
        console.log(this.nome + ":sou um metodo");
    }
}
const p1 = new Pessoa('Davi','Feliciano');
p1.metodo();