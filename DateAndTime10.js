// Date

let myDate=new Date();

console.log(myDate);   //2024-03-23T15:46:35.603Z


console.log(myDate.toString()); //Sat Mar 23 2024 21:16:35 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); //Sat Mar 23 2024

console.log(myDate.toISOString()); //2024-03-23T15:48:23.465Z

console.log(myDate.toJSON()); //2024-03-23T15:48:47.048Z

console.log(myDate.toLocaleDateString()); //2024-03-23T15:48:47.048Z

console.log(myDate.toLocaleString()); //15:48:47.048Z

console.log(myDate.toLocaleTimeString()); //9:20:10 pm

console.log(myDate.toTimeString()); //21:20:44 GMT+0530 (India Standard Time)

console.log(myDate.toUTCString()); //Sat, 23 Mar 2024 15:51:14 GMT

console.log(myDate.getTimezoneOffset());  //-330

console.log(typeof myDate); //object

let myCreatedDate=new Date(2024, 0 ,23)

console.log(myCreatedDate.toDateString()); //Tue Jan 23 2024


let CreateDate=new Date("2024-01-14");

console.log(CreateDate.toLocaleString()); //14/1/2024, 5:30:00 am



let myTimeStamp = Date.now();

console.log(myTimeStamp); //1711209455873


console.log(CreateDate.getTime()); // 1705190400000

console.log(Math.floor(Date.now()/1000));  // 1711210051


let newDate= new Date();



console.log(newDate.getMonth()+1); // because it starts from 0

console.log(newDate.getDay());  

console.log(newDate.getFullYear()); //2024


newDate.toLocaleString('default',{
    month: 'long',
    day: 'numeric',
    year: 'numeric'
});