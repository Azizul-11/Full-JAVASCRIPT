const userEmail="Ramiz@gmail.com"

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't Have user email");
}



// Falsy values

// => false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values

// true,  "0", "false", " ", [], {}, function(){}


if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj={};

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}



// Nullish Coalescing Operator(??) :null undefined


let val1;

val1= 5 ?? 10;


console.log(val1); // 5

val1 = null ?? 10

console.log(val1); // 10

val1 = undefined ?? 15;

console.log(val1); // 15

val1 = null ?? 10 ?? 15;

console.log(val1); // 10



// Terniary Operator

// condition ? true : false

const iceTeaPrice=100;

iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More Than 80");

//  More Than 80