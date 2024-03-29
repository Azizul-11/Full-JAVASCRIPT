// 1. Nested scope

function one()
{
    const username="Ramiz"

    function two(){
        const website="Instagram"
        console.log(username);
    }
    // console.log(website); // it give us error because we cannot access block scope

    two();
}

one();  // it print Ramiz



// 2. if else block scope

if(true)
{
    const username="Ramiz"
    if(username==="Ramiz")
    {
        const website="youtube.com"
        console.log(username + website); // just it give us output Ramizyoutube.com

    }
    // console.log(website); // through erroe because we cannot access block scope
}

// console.log(username); // through erroe because we cannot access block scope


// 3.


console.log(addOne(5)); // it give us output 6
function addOne(num){
    return num + 1;
}

// addOne(5)


console.log(addTwo(5)); // Cannot access 'addTwo' before initialization

const addTwo = function (num){
    return num +2;
}

// console.log(addTwo(5));