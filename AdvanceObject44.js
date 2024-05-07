// console.log(Math.PI);
// Math.PI=5;
// console.log(Math.PI);


const descriptor= Object.getOwnPropertyDescriptor(Math,"PI");

console.log(descriptor);

// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

// const myNewobject= Object.create()

const user={
    name:"Ramiz",
    age:20,
    isAvailable:true,
    orderCoures: function(){
        console.log("Order successfully");
    }
}

console.log(user);

console.log(Object.getOwnPropertyDescriptor(user)); // undefined

console.log(Object.getOwnPropertyDescriptor(user, "name")); 

for (let [key,value] of Object.entries(user)) {
    if(typeof value !== 'function')
    {
        console.log(`${key} : ${value}`);
    }
}


// {
//     value: 'Ramiz',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }

Object.defineProperty(user,"name",{
    writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(user, "name"));

for (let [key,value] of Object.entries(user)) {
    if(typeof value !== 'function')
    {
        console.log(`${key} : ${value}`);
    }
}

// {
//     value: 'Ramiz',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }
//   age : 20
//   isAvailable : true


