//array -> Object -> null

// String -> Object -> null

// in js everything is object

function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5)); // 25
console.log(multiplyBy5.power); // 2
console.log(multiplyBy5.prototype); // {}

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function (score) {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`score is ${this.score}`);
};

const ramiz = new createUser("Ramiz", 35);
const raja = new createUser("Raja", 250);

ramiz.printMe();

/*

Here's what happens behind the scence when the new keyword is 
used:

A new Object is created: The new Keyword initiats the creation of
a new javascript Object.

a prototype is Linked: the newly created object gets Linked
to the prototype property of the constructor function. this means
that it has access to properties and methods defined


the constructor is called: the constructor function is called 
with the specified argument and this is bound to newly created 
object. If no explicit return value is specified from the constructor,
JavaScript assumes this, the newly created object, to be the intended 
return value.

The new Object is returned: After the constructor function has been called,
if it doesn't return a non-primitive value (Object, array, function, etc),
the newly created Object is returned.

*/
