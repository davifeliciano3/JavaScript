function rand(min = 1000, max = 3000) {
    const ale = Math.random(min,max);
    return Math.floor(ale);
};
//Uma função de callback em JavaScript é uma função passada como argumento para outra função. Essa função é então executada dentro da função externa para completar algum tipo de rotina ou ação.
function f1(callback) {
    setTimeout(function() {
        console.log('f1');
        if (callback) callback();
    },rand());
}

function f2(callback) {
    setTimeout(function() {
        console.log('f2');
        if (callback) callback();
    },rand());
}

function f3(callback) {
    setTimeout(function() {
        console.log('f3');
        if (callback) callback();
    },rand());
}

//f1( function() {
//    f2(function(){
//        f3(function(){
 //           console.log("Hello")
 //       });
 //   });
//});

f1(callbackf1);
function callbackf1(){
    f2(callbackf2);
}

function callbackf2() {
    f3(callbackf3);
}

function callbackf3() {
    console.log('oi');
}