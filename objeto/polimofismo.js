//superclasse
function Conta(agencia,conta,saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor){
    if(valor > this.saldo) {
        console.log("Saldo insuficiente");
        this.verSaldo();
        return
    }

    this.saldo -=valor;
    this.verSaldo();
};

Conta.prototype.depositar = function (valor){
    this.saldo +=valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function (){
    console.log(`Ag/Banco:${this.agencia}/${this.conta}` +
        `Saldo: R$${this.saldo.toFixed()}`    );
};

const conta1 = new Conta(11,22,10);
conta1.sacar(100);
console.log(conta1);

function ContaCorrente(agencia,conta,saldo,limite){
    Conta.call(this,agencia,conta,saldo)
    this.limite = limite;
};
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

Conta.prototype.sacar = function (valor){
    if(valor >(this.saldo + this.limite)) {
        console.log("Saldo insuficiente");
        this.verSaldo();
        return
    }

    this.saldo -=valor;
    this.verSaldo();
};

const cc = new ContaCorrente(11,22,0,100);
//cc.depositar(10);
//cc.sacar(100);

function Cp(agencia,conta,saldo) {
    Conta.call(this,agencia,conta,saldo);
}
Cp.prototype = Object.create(Conta.prototype);
Cp.prototype.constructor = Cp;
Cp.prototype.sacar = function(valor) {
    if (valor > this.saldo) {
        console.log("Saque não esta disponível")
    }
}
const CP = new Cp(1,21,100);

CP.sacar(110);
