console.log("Hello World");

const name="Ramiz ";
const repoCount=50;

console.log(name + repoCount + " Value");


console.log(`hello my name is ${name} and my remo count is ${repoCount}`);


//  String Methods

const gameName= new String("Battle-star");

console.log(gameName[0]);


console.log(gameName.__proto__);


console.log(gameName.length);


console.log(gameName.toUpperCase());

console.log(gameName.charAt("4"));


console.log(gameName.indexOf("e"));


const newString= gameName.substring(0,4); 

console.log(newString);


const anotherString= gameName.slice(-8,4);

console.log(anotherString);


const otherString= "    Ramiz    ";

console.log(otherString);

console.log(otherString.trim());


const url="https://www.google.com/search%20hello";

console.log(url.replace("%20","-"));

console.log(url.includes("search"));


const game= new String("Temple-Run-game");


console.log(game.split('-'));