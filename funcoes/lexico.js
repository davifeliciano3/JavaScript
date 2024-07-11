const nome = 'luiz';

function falaNome() {
    console.log(nome);
}

falaNome(nome);
//Afunção conhece o que esta declarado em volta dela e dentro dela;
//Sempre vai ir buscando no pai até encontrar


function usaFalanome() {
    falaNome();
}
usaFalanome();