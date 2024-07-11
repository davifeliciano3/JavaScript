function tudo(){
    const elementos = [
        {tag:'p',texto:'frase 1'},
        {tag:'div',texto:'frase 2'},
        {tag:'footer',texto:'frase 3'},
        {tag:'section',texto:'frase 4'},
    ];
    const inseir = document.querySelector('.p');
   
    for (let i = 0;i <= elementos.length;i++) {
        const texto = elementos[i].texto
        inseir.innerHTML = `${texto} <br/>`
    }
};
tudo();
