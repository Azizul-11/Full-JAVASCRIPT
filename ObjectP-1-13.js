// Object part 1

// Object Literal

const mySym= Symbol("Key1")

const JsUser= {
    name:"Ramiz",
    "Full name":"Ramiz Raja",
    age:20,
    location:"India",
    email:"Ramiz@gmail.com",
    isLoggedIn:false,
    LastLogingDays:["Monday","Saturday","Sunday"],
    [mySym]:"mykey1"
} 

console.log(JsUser.email); //Ramiz@gmail.com

console.log(JsUser["email"]); //Ramiz@gmail.com


console.log(JsUser["Full name"]); //Ramiz Raja


console.log(JsUser[mySym]); // mykey1    // [Symbol(Key1)]: 'mykey1'


JsUser.email= "Ramiz@google.com";

// Object.freeze(JsUser);

JsUser.email= "Ramiz@outlook.com";

console.log(JsUser); 


JsUser.greeting= function (){
    console.log("Hello");
}




console.log(JsUser.greeting); //[Function (anonymous)] 


console.log(JsUser.greeting()); //Hello  



JsUser.greetingTwo= function (){
    console.log(`Hello ${this.name}`);
}



console.log(JsUser.greetingTwo); //[Function (anonymous)] 


console.log(JsUser.greetingTwo()); //  Hello Ramiz  