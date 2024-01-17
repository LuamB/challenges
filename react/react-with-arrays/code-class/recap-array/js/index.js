import { students } from "./data.js";

// let students;
console.log("init Students", students);



//map
const newArray =
  students &&
  students.map((element) => {
    return { ...element, new: true };
  });
console.log("newArray", newArray);
