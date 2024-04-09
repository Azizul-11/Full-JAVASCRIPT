// ForEach Loop

// We use ForEach Loop Most of the time

// Syntax for ForEach Loop
// array.forEach(element => {

// });

const coding = ["js", "rb", "py", "java", "cpp"];

// ForEach Loop Take Arrow Function

coding.forEach((element) => {
  console.log(element);
});

// js
// rb
// py
// java
// cpp

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach((element, index, arrayList) => {
  console.log(element, index, arrayList);
});

// js 0 [ 'js', 'rb', 'py', 'java', 'cpp' ]
// rb 1 [ 'js', 'rb', 'py', 'java', 'cpp' ]
// py 2 [ 'js', 'rb', 'py', 'java', 'cpp' ]
// java 3 [ 'js', 'rb', 'py', 'java', 'cpp' ]
// cpp 4 [ 'js', 'rb', 'py', 'java', 'cpp' ]

// Object Inside Array

const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "Js",
  },
  {
    languageName: "Java",
    languageFileName: "Java",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
];

myCoding.forEach((element) => {
  console.log(element);
});

// { languageName: 'JavaScript', languageFileName: 'Js' }
// { languageName: 'Java', languageFileName: 'Java' }
// { languageName: 'Python', languageFileName: 'py' }

myCoding.forEach((element) => {
  console.log(element.languageName);
});

// JavaScript
// Java
// Python

myCoding.forEach((element) => {
  console.log(element.languageFileName);
});

// Js
// Java
// py
