


let myHeros= ["thor", "spiderman"];


let heroPower= {
    thor:"hammer",
    spiderman:"web",

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.ramiz= function(){
    console.log(`Ramiz is present in all Object`);
}


Array.prototype.heyRamiz= function(){
    console.log(`Ramiz says hello`);
}

heroPower.ramiz()
myHeros.ramiz()
myHeros.heyRamiz()
// heroPower.heyRamiz()




// Inheritance

const User={
    name: "Ramiz",
    email: "ramiz@gmail.com",
}

const Teacher = {
    makeVideo: true
}


const TeachingSupport= {
isAvaliable: true
}

const TASupport={
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher);



// let myName= "Ramiz     "

// console.log(myName.length);
// console.log(myName.trueLength());

let anotherUsername = "Ramiz     ";
String.prototype.truLength= function(){
    console.log(`${this}`); //Ramiz
    console.log(`${this.name}`); // undefined
    console.log(`True length is: ${this.trim().length}`);

}

anotherUsername.truLength();

"Ramiz".truLength(); 
// Ramiz
// undefined
// True length is: 5

"Raja".truLength();
// Raja
// undefined
// True length is: 4


