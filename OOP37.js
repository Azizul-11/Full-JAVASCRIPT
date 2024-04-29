// Javascript and Classes

// OPPS 

// Object -> collection of properties and methods

// ex-> toLowerCase


// Why use OOPS

// part of OOPS
// Object literal

// Constructor function
// Prototype
// Classes
// Instances (new, this)

// 4 pillars of OOPS

// Abstraction
// Encapsulation
// Inheritance
// Polymorphism



// 1. Object literal

const user={
    username:"Ramiz",
    logingCount:8,
    signedIn:true,
    getUserDetails: function(){
        // console.log("Got user details");
        console.log(`UserName : ${this.username}`); // UserName : Ramiz
        console.log(this); // this give us current context  
        //  {
        //     username: 'Ramiz',
        //     logingCount: 8,
        //     signedIn: true,
        //     getUserDetails: [Function: getUserDetails]
        //   }
        
    }
}

console.log(user.username); //Ramiz
// console.log(user.getUserDetails()); // Got user details
console.log(this); // {}



// 2. Constructor function

// const Promise1=new Promise() // new is a constructor function


function users(username,loggingCount,isLoggedIn){
    this.username= username
    this.loggingCount=loggingCount,
    this.isLoggedIn=isLoggedIn

    this.greeting= function(){
        console.log(`Welcome ${this.username}`);  // greeting: [Function (anonymous)]
    }
    return this  // we don't need to return anything it will return this by default
}

// const UserOne= users("ramiz",12,true);

// const userTow=users("Azizul",13,false); // it will overwrite userOne's Value

// console.log(UserOne); 
// username: 'Azizul',
// loggingCount: 13,
// isLoggedIn: false


const UserOne=new users("ramiz",12,true);

const userTow=new users("Azizul",13,false);

console.log(UserOne); //users { username: 'ramiz', loggingCount: 12, isLoggedIn: true }

console.log(userTow);  // users { username: 'Azizul', loggingCount: 13, isLoggedIn: false }


//step 1. new keyword create empty object it call new instance

// step 2. call constructor function and pass arguments

// step 3. inject everything we write


console.log(UserOne.constructor);  // [Function: users]