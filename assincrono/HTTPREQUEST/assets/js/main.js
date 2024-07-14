const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method ,obj.url , true);
    xhr.send();

    xhr.addEventListener('load', ()=>{
        if(xhr.status >=200 && xhr.status < 300) {
            obj.success(xhr.responseText);
        } else {
            obj.error({
                code: xhr.statusText,
            })
        }
   });
};
function carregaPagina(el){
    const href = el.getAttribute('href');

    request({
        method:'GET',
        url:href,
        success(response){
            carregaResultado(response);
        },
        error(errorText){
            console.log(errorText);
        }
    })
};
function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML += response;
}
document.addEventListener('click',e =>{
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
});


//fetch api

fetch('padina1.html')//já retorna uma promise
    .then(resposta =>
    {
        if (resposta.status != 200)throw new Error("Erro diferenciado");
        return resposta.text();
    }
    )
    .then(html =>console.log(html))
    .catch(e =>{
        console.log(e);
    });