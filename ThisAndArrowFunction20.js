//1. This -> In Js, this keyword refer current context

const user = {
  username: "Ramiz",
  price: 188,
  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to Website`);
    console.log(this);
  },
};

user.welcomeMessage(); // Ramiz,Welcome to Website

user.username = "Azizul"; // we can change value from ramiz to azizul

user.welcomeMessage(); // Azizul,Welcome to Website

// console.log(this); //  {} empty because we run in node.
// but if we console.log(this) in windows then it give windows object

// function one(){
//     let username ="Ramiz"
//     // console.log(this.username); // undefined
// }

// one()

// 2. arrow function

// const arrow = () => {

//     console.log(this); // {}
//     let username= "Ramiz";
//     console.log(this.username); // undefined
// }

// arrow();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(addTwo(10, 20)); // 30

// 3. implicit return function

// const addTwo = (num1, num2) => num1 + num2;

// console.log(addTwo(10, 20)); // 30

// const obj =()=> {username:"Ramiz"}

// console.log(obj()); // undefined

const obj = () => ({ username: "Ramiz" }); // wrap with ()

console.log(obj()); // { username: 'Ramiz' }

const addTwo = (num1, num2) => {
  return num1 + num2;
};
