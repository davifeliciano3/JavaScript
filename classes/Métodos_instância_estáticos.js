class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }
   static trocaPilha(){
        //methodo estatica, troca a pilha de todos com essa classe
    }
    trocaPilhainstancia(){
        //methodo de instancia
    }
}
const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();


ControleRemoto.trocaPilha();
