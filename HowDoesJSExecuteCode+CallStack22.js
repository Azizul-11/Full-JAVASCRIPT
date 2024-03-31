// JavaScript Execution Context

// 1. Code 
// 2. Global Execution Context (alocates to this)
 


// Type of Execution Context

// 1 Global Execution Context
// 2 Function Execution Context
// 3 Eval  Execution Context

//  How dose javascript execution

// 1 Memory Creation Phase -> (alocates memory)
// 2 Execution Phase 


// examples.

let val1=10;
let val2=5;

function addNum(num1, num2)
{
    let total=num1+num2;
    return total;
}

let result=addNum(val1, val2);

let result2=addNum(10,2);

// 1. Global Execution = (alocates to this)
// 2. Memory Creation Phase --> (alocates memory)

//  First Cycle ->
//  val1-> undefined
//  val2-> undefined
//  addNum->  defination
//  result1 -> undefined
//  result2 -> undefined

// second Cycle ->

// 3. Execution phase 

//  val1-> 10;
//  val2-> 5;
//  then it goes directly to addNum
// addNum-> will Create new Execution context

// then it create new variable environment + Execution Thread

//  now js will create a new Memory Phase and Execution Phase

// Memory Phase-> val1-> undefined, val2-> undefined, Total -> undefined

// Execution Context -> num1-> 10, numm2-> 5, total-> 15

// now total return to global Execution context

//  then final delete value

// then return to exection phase

//  new Variable Environment+ thared

// 1 memory Phase
// 2 execution phase
// then same work repeat 

//  2  ********* CalStacks ****************

//1. Global Execution Context 
// then it will execte and any method calls
// first method goes to global Execution context Stack
// Second After execution that method it will leave global Execution Stack

// now it we call more than one method. then here we get LIFO (Last In First Out) Order

function one()
{
    console.log("one");
}
function two(){
    console.log("Two");
}
function three(){
    console.log("Three");
}

one()
two()
three()

