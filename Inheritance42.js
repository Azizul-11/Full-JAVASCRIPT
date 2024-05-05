class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`username is : ${this.username}`);
    }
}


class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password;
    }
    addCourse(){
        console.log(`A new Course was added by ${this.username}`);

    }
}

const user1= new Teacher("ramiz","ramiz@gmail.com", "123");

user1.addCourse() // A new Course was added by ramiz

const user2= new Teacher("hello" )

user2.logMe() // username is : hello

console.log(user1===user2);  // false

console.log(user1===Teacher); //false

console.log(user1 instanceof Teacher); //true

console.log(user1 instanceof User); // true