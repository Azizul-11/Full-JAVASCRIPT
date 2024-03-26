// array

const myArr=[0,1,2,3,4,5]

console.log(myArr[0]);

const myHeros=["Batman","Ironman"];


const myArray=new Array(1,2,3,4);

// Array Methods

myArr.push(6)
myArr.push(7)
myArr.pop()

// console.log(myArr);

// myArr.unshift(9)
// console.log(myArr);


// myArr.shift()

console.log(myArr.includes(9));

console.log(myArr.indexOf(4));

const newArr= myArr.join()

console.log(myArr);

console.log(newArr);

console.log( typeof newArr);  // change into bind and convert into string 


// slice , splice 

console.log(myArr.slice(1,3)); // slice not mutate original array 
console.log(myArr);

console.log(myArr.splice(1,3)); // but splice mutate original array

console.log(myArr);









