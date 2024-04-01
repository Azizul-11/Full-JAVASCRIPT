// if statement

// 1

if(true){ // if condition== true then we go inside.
              

}

if(false){  // And condition==false then we can't go inside. then we go else statement
    
}



const isUserLoggedIn = true;

if(isUserLoggedIn)
{
    console.log("User logged in");
}
else{
    console.log("User not logged in");
}

// 2 comparison 

// <, >, <=, >=, ==, !=, === 

// example
if(2<3)
{
    console.log("True");
}
else{
    console.log("False");
}
// True



if(2>3)
{
    console.log("True");
}
else{
    console.log("False");
}

// False

if(2<=3)
{
    console.log("True");
}
else{
    console.log("False");
}

// True

if(2>=3)
{
    console.log("True");
}
else{
    console.log("False");
}

// False


if(2==3)
{
    console.log("True");
}
else{
    console.log("False");
}

// False

if(2!=3)
{
    console.log("True");
}
else{
    console.log("False");
}

//True


if(2===2)
{
    console.log("True");
}
else{
    console.log("False");
}

// True

if(2==="2")
{
    console.log("True");
}
else{
    console.log("False");
}

//False, because it is a strict comparison 


const temperature=41;


if(temperature<50){
    console.log("Less than 50");
}
else{
    console.log("greater Than 50");
}



// scope Related

const score =200;

if(score>100)
{
    const power="fly"
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`); // power is not defined



// Short Hand notation

const balance=1000;

// if(balance>500) console.log("Test");  // it is called implicitly code


if(balance < 500){
    console.log("less than 500");
}
else if(balance < 750){
    console.log("less than 750");
}
else if(balance < 900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}


// multiple conditions check

const userLoggedIn = true;

const debitCard= true;

const LoggedInFromGoogle=false;

const LoggedInFromGmail=true;


if(userLoggedIn && debitCard ){
    console.log("Allow to shopping");
}


if(LoggedInFromGoogle || LoggedInFromGmail){
    console.log("User logged in");
}


