// import { students } from './data.js';

let students;
console.log("init Students",students);


//forEach
// students.forEach((element)=>console.log('Student: ', element))


//map
const newArray = students && students.map((element)=>{return {...element, new: true}})

console.log('newArray: ', newArray);

