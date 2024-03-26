// Array Part2

const myArr=[1,2,3,4,5,6,7,8]

const marvel_heroes=["thore","Ironman","Spiderman"];

const dc_heroes=["superman","flash","batman"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes); // [ 'thore', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heroes[3][1]); // flash


const allHeros=marvel_heroes.concat(dc_heroes);

console.log(allHeros); // [ 'thore', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]


//   spread operator


const allnewHeros= [...marvel_heroes, ...dc_heroes];

console.log(allHeros); // [ 'thore', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]




const anotherArray= [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_Array= anotherArray.flat(Infinity);


console.log(real_another_Array); // [    1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]



console.log(Array.isArray("Ramiz"));  //false

console.log(Array.from("Ramiz")); // [ 'R', 'a', 'm', 'i', 'z' ]

console.log(Array.from({name:"Ramiz"}));  // []


let score1= 100;

let score2=200;

let score3=300;

console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ]





 