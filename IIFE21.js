// Immediately Invoke Function Expression (IIFE)

(function db() {
  console.log("DB Connected");
})();


// (function db() {  1. //This is named IFFE
//   console.log("DB Connected");
// })();

// How to Create IFFE Functions

// 1. ()

// 2. (function db(){
//     console.log("DB Connected");
// })

// 3. (function db(){
//     console.log("DB Connected");
// })()

// Now We need To Add A semicolon after the function to stop Iffe function

// 4. (function db(){
//     console.log("DB Connected");
// })();

// for Arrow Functions

( ()=> {
  console.log("Db Connected Two");
})();

// Give some Parameters

( (name)=> {
  console.log(`Db Connected Two ${name}`);
})("Ramiz");
