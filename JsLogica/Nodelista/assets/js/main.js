const paragrafos = document.querySelectorAll('p');
const sess = document.querySelector('section');
const b = getComputedStyle(sess);
const branco = b.backgroundColor;
console.log(branco);
const bodyEstilos = getComputedStyle(document.body);
const backgraundColor = bodyEstilos.backgroundColor;

for (let p of paragrafos) {
    p.style.backgroundColor = backgraundColor;
    p.style.color = branco;
    //p.style.color = '#FFFF;
}