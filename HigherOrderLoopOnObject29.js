// For-In Loop
// We Can use ForIn Loop For Object

// syntax

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }

const myObj = {
  hero1: "SuperMan",
  hero2: "SpiderMan",
  hero3: "Batman",
  hero4: "IronMan",
  hero5: "Thor",
  hero6: "Flash",
};

for (const key in myObj) {
  console.log(key);
}

// hero1
// hero2
// hero3
// hero4
// hero5
// hero6

for (const key in myObj) {
  console.log(`${key} is ${myObj[key]}`);
}

// hero1 is SuperMan
// hero2 is SpiderMan
// hero3 is Batman
// hero4 is IronMan
// hero5 is Thor
// hero6 is Flash

// forIn for Array

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  console.log(`${key} is ${programming[key]}`);
}

// 0 is js
// 1 is rb
// 2 is py
// 3 is java
// 4 is cpp

// forin for Map

const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");

for (const key in map) {
  console.log(key);
}

// Nothing, we can iterate over the map
