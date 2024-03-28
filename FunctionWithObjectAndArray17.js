function calculateCartPrice(...num1){
    
    return num1
}

console.log(calculateCartPrice(200, 400, 500));

// pass object in fuction

const user={
    username:"Ramiz",
    price:188
}

function handelObject(anyobject)
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}


// handelObject(user)

handelObject({
    username:"Ramiz raja",
    price:399
})


// pass Array in fuction


const myNewArry=[100,200,500,600];

function retunSecondValue(getArray){
    return getArray[1]
}

// console.log(retunSecondValue(myNewArry)); // 200

console.log(retunSecondValue([200,500,800,900])); // 500




