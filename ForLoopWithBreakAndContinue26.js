// for Loop



// for (let index = 0; index < 10; index++) {
//     const element = index;
    
//     console.log(element);
    
// }

// for loop is a block scope
// console.log(element); we can't access it outside the loop



for (let index = 0; index < 10; index++) {
    const element = index;
    if(element==5){
        console.log("5 Is best number!");
    }
    console.log(element);
}



for (let i = 1; i < 10; i++) {
    console.log(`Outer Loop Value: ${i}`);
    for (let j = 1; j <10; j++) {
        
        // console.log(`Inner Loop Value: ${j} and Inner Loop Value: ${i}`);

        console.log(i+' * ' + j + ' = ' + i*j);
    }
    
}

let myArray = ["flash","batman","superman"];
console.log(myArray.length);


for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


// KeyWords

// Break And Continue

// for (let index = 1; index <= 20; index++) {
//     console.log(`Value of i Is ${index}`);    
// }

// Break

for (let i = 1; i <= 20; i++) {
    if(i==5)
    {
        break;
    }
    console.log(`Value of i Is ${i}`);    
}


//Continue

for (let i = 1; i <= 20; i++) {
    if(i==5) 
    {
        console.log('Detected 5');
        continue;
    }
    console.log(`Value of i Is ${i}`);    
}























