// var a = [1, 2, 3, 6, 5, 4, 9, 5, 7];
// a.forEach(function (val) {
//   console.log(val + 2);
// });

var obj = {
  name: "ramiz",
  age: 19,
  city: "Nagar",
};

for (var key in obj) {
  console.log(key, obj[key]);
}
