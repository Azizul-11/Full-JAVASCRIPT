const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
  console.log(item);
  return item; // forEach return nothing it will give undefined
});

console.log(values); // undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => num > 4);

console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]

// now inside curly brackets

const secNums = myNums.filter((num) => {
  num > 4;
});

console.log(secNums); // []

// we need to write return keywords here

const thiNums = myNums.filter((num) => {
  return num > 4;
});

console.log(thiNums); // [ 5, 6, 7, 8, 9, 10 ]

// using ForEach

const newNumber = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNumber.push(num);
  }
});

console.log(newNumber); // [ 5, 6, 7, 8, 9, 10 ]
