function rand(min,max){
    min *=1000;
    max *=1000;
    return Math.floor(Math.random()*(max-min)+min);
}


function esperaAi(msg,tempo){
    return new Promise((resolve, reject)=>{
        if(typeof msg !== 'string') reject('Valor ruim');
            setTimeout(()=>{
        
        resolve(msg);
    },tempo);
    });


}
esperaAi('Frase 1',rand(1,3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 2',rand(1,3));
    })
    .then(resposta =>{
        console.log(resposta);
        return esperaAi(3,rand(1,3));
    })
    .then(resposta=>{
        console.log(resposta);
    })
    .catch(e =>{
        console.log('Erro',e);
    });


//method para ajudar nas promises
// Promise.all recebe um conjunto de promises dentro de 
//um array e as trata de uma vez 
//e retorna de uma so vez dentro de um array
//Se uma der erro ele so vai retornar o erro
const promises = [
    'primeiro valor',
    esperaAi('promise 1',3000),
    esperaAi('promise 2',2000),
    esperaAi('promise 3',1000),
    'outro valor'
]
Promise.all(promises)
  .then(function(valor){
    console.log(valor);
  })
  .catch(function(erro){
    console.log(erro);
  });

// Promise.race A primeira a se revolser ele entrega o valor
//Ele terminar de executar o restante
Promise.race(promises)
  .then(function(valor){
    console.log(valor);
  })
  .catch(function(erro){
    console.log(erro);
  });

// Promise.resolve Promise.reject
// já retorna o resolve ou o reject

function baixaPage(){
    const cache = true;

    if(cache){
        return Promise.resolve("Esta em cache");//resolve representa o then
    }else {
       return esperaAi('Bixando pagina',3000);
    }
}

baixaPage()
  .then(dados =>{
    console.log(dados);
  })
  .catch(e =>{
    console.log(e);
  });


esperaAi('Fase 10',rand(0,3))
  .then(valor => 
    {console.log(valor)
    return esperaAi('Fase 20',rand(0,3))
  })
  .then(fase =>{
    console.log(fase);
    return esperaAi('Frase 30',rand(0,3))
  })
  .then(fase =>{
    console.log(fase);
    return fase;
  })
  .then(
    f => console.log(`Terminamos na fase ${f}`)
  )
  .catch(e => console.log('Erro'));

  async function executa(){
    try{
      const fase1 = await esperaAi('Fase 1',rand(0,3));
     console.log(fase1);
     const fase2 = await esperaAi('Fase 2',rand(0,3));
     console.log(fase2);
     const fase3 = await esperaAi('terminamos na fase 3',rand(0,3));
     console.log(fase3);   
    } catch(e) {
      console.log(e);
    }

  };

  executa();

//esperaAi('Jesus vive 1',rand(1,3));
//esperaAi('Jesus vive 2',rand(1,3));
//esperaAi('Jesus vive 3',rand(1,3));
//esperaAi('Jesus vive 4',rand(1,3));