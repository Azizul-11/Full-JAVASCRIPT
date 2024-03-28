// function is a block of code.

function sayMyName()
{
    console.log("R");
    console.log("A");
    console.log("M");
    console.log("I");
    console.log("Z");
}

// sayMyName()


// function addTwoNumbers(number1, number2){// this is called parameter
//    console.log( number1+number2);  

// }

// addTwoNumbers(3,4)  // this is called argument


// function addTwoNumbers(number1, number2){// this is called parameter
//    console.log( number1+number2);  

// }

// const result=addTwoNumbers(3,4)  // this is called argument

// console.log("result:", result); // result: undefined


function addTwoNumbers(number1, number2){// this is called parameter
//   let result =number1+number2
//   return result 
  return number1+number2
}

const result=addTwoNumbers(3,4)  // this is called argument

// console.log("Result:", result); // Result: 7



function loginUseerMessage(username){

    return `${username} just logged in`
}

console.log(loginUseerMessage("Ramiz")); // Ramiz just logged in
