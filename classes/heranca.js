class DispositivoEletronico{
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }
    ligar() {
        if (this.ligado){
            console.log(this.nome + 'Jáligadp')
        }
        this.ligado = true;
    }
    desligar() {
        if (!this.ligado){
            console.log(this.nome + 'Desligado')
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico{
    constructor(cor){
        super(nome);
        this.cor = cor;
    }
}

const s1 = new Smartphone('Iphone SE');
console.log(s1);


