const MyNums = [1, 2, 3];

const myTotal = MyNums.reduce(function (acc, currval) {
  console.log(`acc = ${acc} and currval = ${currval}`);
  return acc + currval;
}, 0);

console.log(myTotal);

// acc = 0 and currval = 1
// acc = 1 and currval = 2
// acc = 3 and currval = 3
// 6

// using arrow functions

const mySum = MyNums.reduce((acc, currval) => {
  console.log(`acc = ${acc} and currval = ${currval}`);
  return acc + currval;
}, 0);

console.log(mySum);

// acc = 0 and currval = 1
// acc = 1 and currval = 2
// acc = 3 and currval = 3
// 6

const shoppingCart = [
  { itemName: "Apple", price: 100 },
  { itemName: "Banana", price: 105 },
  { itemName: "Orange", price: 208 },
  { itemName: "Grapes", price: 105 },
  { itemName: "Mango", price: 200 },
];



const shoppingSum=shoppingCart.reduce((acc,item) => acc + item.price,0);

console.log(shoppingSum);

//  718


