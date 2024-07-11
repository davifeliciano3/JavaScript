const frutas = ['banna','peixe','trigp','porco'];

for (let indice in frutas) { // le os indeces
    console.log(frutas[indice]);
}

const pessoa = {
    nome:'Davi',
    altura:'170',
    sobrenome:'Feliciano'
}

for (let chaves in pessoa) {
    console.log(chaves.nome);
    console.log(chaves);
}