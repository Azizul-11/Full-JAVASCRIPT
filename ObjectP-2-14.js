// Object part 2

// const tinderUser={} Non Singleton Object

// SingleTon

const tinderUser =new Object()  // // SingleTon Object


// console.log(tinderUser);  // {}

 tinderUser.id="123abc";
 tinderUser.name="Ramiz";
 tinderUser.isLoggedIn=false;

 
//  console.log(tinderUser); // { id: '123abc', name: 'Ramiz', isLoggedIn: false }

console.log(tinderUser);

console.log(Object.keys(tinderUser));  // [ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser));  // [ '123abc', 'Ramiz', false ]

console.log(Object.entries(tinderUser));  // [ [ 'id', '123abc' ], [ 'name', 'Ramiz' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true

console.log(tinderUser.hasOwnProperty("isLogged")); // false


const regularUser = {
    email:"Ramiz@gmail.com",
    fullname:{
        userFullName:{
            firstName:"Ramiz",
            lastName:"Raja"
        }
    }
}

console.log(regularUser.fullname); //{ userFullName: { firstName: 'Ramiz', lastName: 'Raja' } }

console.log(regularUser.fullname.userFullName.firstName); //Ramiz

const obj1={1:"a", 2:"b"}

const obj2={3:"c", 4:"d"}

// const obj3= Object.assign({},obj1, obj2)

// console.log(obj3);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3= {...obj1, ...obj2}

console.log(obj3);  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const user= [
    {
        id:1,
        email:"ramiz@gmail.com"
    },
    {
        id:2,
        email:"rz@gmail.com"
    },
]


console.log(user[0].email);  //ramiz@gmail.com



