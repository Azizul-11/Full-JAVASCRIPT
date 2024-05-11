// A closure gives you access to an outer function's scope from an inner function

//  function init(){
//             let name = "Mozila";

//             function displayName(){
//                 console.log(name);
//             }
//             displayName();
//         }
//         init();


//         Lexical Scope 

//          function outer(){
//             let username="Ramiz";
//             console.log("Outer",secret); // secret is not defined
//             function inner(){
//                 let secret= "my123";
//                 console.log("Inner ",username);
//             }
//             function inner2(){
//                 console.log("Inner 2", username);
//                 console.log(secret); // secret is not defined
//             }
//             inner();  // Inner  Ramiz
//             inner2();  // Innner 2 Ramiz

//          }
//          outer();
//          console.log("To Outer",username); // username is not defined



//         Closure 
//           function makeFunc(){
//             const name= "Ramiz";
//             function displayName(){
//                 console.log(name);
//             }
//             return displayName;
//           }  
//           const myFunc= makeFunc();
//           myFunc(); // Ramiz