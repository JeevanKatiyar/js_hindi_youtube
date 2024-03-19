//nums and maths.

// let marks = 99;
// console.log(marks);

// let balance = new Number(100)
// console.log(balance);
// console.log(balance.toString().length);//converted to string


//toFixed
// console.log(balance.toFixed(3));// 100.000
// console.log(balance.toFixed(2));//100.00

//toPrecision
// console.log(balance.toPrecision(6));
// console.log(balance.toPrecision(4));

// ----------------------math------------------------
// console.log(Math);
// console.log(Math.abs(-4));// provides absolute value

// console.log(Math.round(8.999)); //roundof value=9
// console.log(Math.ceil(9.8)); // top value =10;
// console.log(Math.floor(9.8));// floor value =9

//math.random -generate random value between 0-1

console.log(Math.random());

console.log(Math.floor(Math.random()*10)+1);

const min =10;
const max =20;

console.log(Math.floor(Math.random() * (max - min +1)) + min);//values between min and max

