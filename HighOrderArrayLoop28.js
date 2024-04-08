// For-of Loop

// for (const iterator of object) {

// }

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const num of arr) {
  console.log(num);
}

const greeting = "Hello,world!";

for (const greet of greeting) {
  console.log(`Each Char is ${greet}`);
}

// Maps

// The Map object holds key-value pairs and remembers the original insertion order of the keys.

const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");

console.log(map);

// //Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'Fr' => 'France'
//   }

// Map is known for Unique values.

for (const key of map) {
  console.log(key);
}

// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

// IN :- India
// USA :- United States of America
// Fr :- France

const myObj = {
  Game1: "NFS",
  Game2: "spiderman",
};

// for (const [key,value] of myObj) {
//     console.log(key ,":-", value);
// }

//myObj is not iterable

// We can't Iterate Object using Forof
