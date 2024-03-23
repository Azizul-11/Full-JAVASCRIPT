const score = 400;
console.log(score);

console.log(score.toString());
console.log(score.toString().length);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2)); //for making ecommerce app

const otherNumber= 123.8966;

console.log(otherNumber.toPrecision(4));


const hundereds= 1000000;

console.log(hundereds.toLocaleString('en-IN'));  // Indian Standard Values 



// ++++++ Maths +++++++++


console.log(Math);

console.log(Math.abs(-4));  // for change -4 to 4 


console.log(Math.round(5.3));

console.log(Math.ceil(4.2)); // it gives us the top value, here it give us 5

console.log(Math.floor(5.9)); // it give us the bottom value, here it give 5

console.log(Math.sqrt(36)); // it give us the squre root value

console.log(Math.max(5,6,7,2)); // it give us the max value

console.log(Math.min(5,6,7,2)); // it give us the min value

// We most use Math.random

console.log(Math.random()); // it give us the from 0 to 1

console.log((Math.random()*10) + 1); // it give us the from 0 to 10
console.log(Math.floor(Math.random()*10) + 1); // it give us the from 0 to 10

const min= 10;
const max= 20;


console.log(Math.floor(Math.random()* (max-min +1))+min );


