// 1. 

// let a =10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);


// 2. 

if(true){
    let a =10;
    const b = 20;
    var c = 30;
}

// console.log(a); // it give us error because it is inside the block scope
// console.log(b); // it give us error because it is inside the block scope
console.log(c);



// let see block scope and global scope

let a=300;

if(true){
    let a=10;

    console.log("Inner a: ",a);
}

console.log("Outside a: ",a);


// Inner a:  10
// Outside a:  300

