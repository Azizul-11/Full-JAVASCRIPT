function SetUsername(username){
    // Complex Db Calls
    this.username=username;
    console.log("Called");

}

function createUser(username,email,password){
    SetUsername.call(this,username);

    this.email=email;
    this.password=password
}

const user1=new createUser("Ramiz","ramiz@gmail.com","123");

console.log(user1);  //createUser { email: 'ramiz@gmail.com', password: '123' }

// now after writing call and this it give us
// createUser {
//     username: 'Ramiz',
//     email: 'ramiz@gmail.com',
//     password: '123'
//   }