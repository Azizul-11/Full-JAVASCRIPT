//vairalbes

const accountId=14453;

let accountEmail="Ramiz@gmail.com";

var accountPassword="1234";
accountCity="Sherpur"

// accountId=2  not allowed because it is a constant and cannot be changed


console.log(accountId);

accountEmail="Ramizraja@gmail.com";

accountPassword="121212";
accountCity="Nagar"


/*

Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail, accountPassword, accountCity])


