
const User={

    _email: "ramiz@gmail.com",
    _password: "123",

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email=value;
    }
}

const ramiz= Object.create(User)
console.log(ramiz.email);