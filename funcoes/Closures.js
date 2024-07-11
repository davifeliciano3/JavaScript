function retornaFuncao() {
    const nome = 'davi';
    return function() {
        return nome;
    }//closurs habilidade da função de acessar seus escopos lexicos
}

const funcao = retornaFuncao();
console.dir(funcao());

/*

Claro! Em JavaScript, um closure (ou fechamento) é uma função 
que lembra do ambiente em que foi criada, mesmo depois que 
essa função foi executada. Isso significa que a função tem 
acesso a variáveis fora do seu escopo imediato,
 mesmo depois que o contexto em que foi criada tenha sido encerrado. */