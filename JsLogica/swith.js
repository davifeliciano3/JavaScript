const data = new Date();

const dia = data.getDay();


switch (dia) {
    case 0:
        console.log("Domingo");
        break;

    case 1:
        console.log("segunda");
        break;

    case 2:
        console.log("terça");
        break;
    case 3:
        console.log("quarta");
        break;
    case 4:
        console.log("quinta");
        break;

    case 5:
        console.log("sexta");
        break;
    case 6:
        console.log("Sábado");
        break;
}