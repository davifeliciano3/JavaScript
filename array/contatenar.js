const num1 = [1,2,3];
const num2 = [4,5,6];
const num3 = num1.concat(num2 , [8,7,9]);
const num4 = [...num1 , ...num2];
console.log(num3, num4);