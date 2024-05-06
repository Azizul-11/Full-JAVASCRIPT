class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`username: ${this.username}`);
    }

   static creteId(){
        return `123`
    }
}

const ramiz= new User("ramiz");
// console.log(ramiz.creteId());  // not accessible

class Teacher extends User{
    constructor(username,email) {
        super(username);
        this.email=email;
    }
}

const Phone= new Teacher("iphone", "i@phone.com");

Phone.logMe();  // username: iphone

Phone.creteId(); // not accessible



