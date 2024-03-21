// There are 2 types of memory 1. Stack memory 2. Heap memory

// Stack memory(Primitive), Heap memory(Non-Primitive)

let myName="MdAzizulIslam";

let anotherName=myName;

anotherName="Ramiz";
console.log(myName);
console.log(anotherName);



let user1={
    email:"user@gmail.com",
    upi:"user@ybl"
}

let user2=user1;

user2.email="ramiz@gmail.com";

console.log(user1.email);
console.log(user2.email);