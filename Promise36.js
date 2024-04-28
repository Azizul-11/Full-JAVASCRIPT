// The Promise Object represent the eventual completion or failure
// of an asynchronous operation and its resulting value

// A Promise is in one of  these states:

// pending - initial state , neither fulfilled or rejected
// fulfield - meaning that the operation was completed successfully
// rejected - meaning that the operation was rejected or failed

// 1

const promise1 = new Promise(function (resolve, reject) {
  // DO an async task
  // DB calls, cryptography, nettwork

  setTimeout(() => {
    console.log("Async task is completed");
    resolve(); // this resolve call connect to then
  }, 1000);
});

promise1.then(function () {
  console.log("Promise Consumed");
});

// 2
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise 2 Consumed");
});

// 3

const Promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "ramiz", email: "ramiz@gmail.com" });
  }, 1000);
});

Promise3.then(function (user) {
  console.log(user);
});

// 4

const Promise4 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "ramiz1", password: "123" });
    } else {
      reject("Something went wrong");
    }
  }, 1000);
});

const username = Promise4.then((user) => {
  console.log(user);
  return user.username;
})
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  }).finally(()=>{
    console.log("The promise either resolve or rejected");
  })


  const promise5 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true;
        if (!error) {
          resolve({ username: "ramiz1", password: "123" });
        } else {
          reject("JS went wrong");
        }
      }, 1000);
  });

 async function consumePromiseFive(){
    try {
        const response = await promise5
      console.log(response);
    } catch (error) {
        console.log(error);
    }
 }

 consumePromiseFive()



//  6

// async function getAlluser(){
//    try {
//     const response= await fetch("https://api.github.com/users/azizul-11")
//    const data=await response.json();
//    console.log(data);
//    } catch (error) {
//     console.log(error);
//    }
// }

// getAlluser();


fetch("https://api.github.com/users/azizul-11").then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})