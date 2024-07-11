//const num1 = Number(prompt("Escolha um número"));
//const num2 = Number(prompt("Escolha um número"));
const num1 = 10;
const num2 = 12;
function maximo(x,y){
    const maior = (x > y)? console.log(x):console.log(y);
    return maior;
}
maximo(num1,num2);

function epaisagem(largura,altura) {
    const tamanho = (largura > altura)? true:false;
    return tamanho;
}
const paisagemAeria =(l,a) => l>a;

console.log(epaisagem(1000,200));


function buzz() {
    for (let x = 0;x<=100;x++) {
        if (x%3==0 && x%5==0) {
            console.log("FizzBuzz");
        } else if (x%3==0) {
            console.log("Fizz");
        }else if (x%5==0) {
            console.log("Buzz");
        } else {
            console.log(x);
        }
    }
}

buzz();