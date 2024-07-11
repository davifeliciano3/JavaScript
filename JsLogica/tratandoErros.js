

try {
    console.log(a);
} catch {
    console.log("Erro");
}

function soma(x,y) {
    if (typeof x != 'number' || typeof y != 'number') {
        throw new Error ('X e Y precisam ser numeros')
    }
    return x+y;
}

try {
    soma(10,1);
} catch (err) {
    console.log(err);
}

try {
    soma(10,1);
} catch (err) {
    console.log(err);
} finally {
    //executado sempre
}