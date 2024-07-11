function mostrahora() {
    let data = new Date();

    return data.toLocaleDateString('pt-BR',{
        minute12:true
    });
}
function intevalo() {
    console.log(mostrahora());
}



timer = setInterval(function () {
    console.log(mostrahora());
},1000);
setTimeout(function(){
    clearInterval(timer);
},5000)