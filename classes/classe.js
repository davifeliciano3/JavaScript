class Pessoa {
    constructor(nome,sobrenome) { // recebe parametros e metodos
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    
    falar(){
        console.log(`${this.nome} esta falando`)
    }
    comendo(){
        console.log(`${this.nome} esta comendo`)
    }
}

function Pessoa1(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
Pessoa1.prototype.falar = function () {
    console.log(`${this.nome} esta falando`);
}

const p1 = new Pessoa('Luiz','Miranda');