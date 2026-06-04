// // array concepts

// let fruits = ["apple", "banana", "mango"];

// //add to end push
// fruits.push("grape");
// console.log(fruits);

// //remove from end
// fruits.pop();
// console.log(fruits);

// //add to front
// fruits.unshift("kiwi");
// console.log(fruits);

// //remove from front
// fruits.shift();
// console.log(fruits);

// //check if exists
// console.log(fruits.includes("banana"));

// //find position
// console.log(fruits.indexOf("mango"));

// //warmup task

// let cities = ["Chennai", "Madurai", "Coimbatore"];

// cities.push("Bengaluru")
// console.log(cities);
// cities.pop()
// console.log(cities);
// cities.unshift("Salem");
// console.log(cities);
// cities.shift();
// console.log(cities);
// console.log(cities.includes("Madurai"));
// console.log(cities.indexOf("Coimbatore"));

//task 2

let students = ["Ravi", "Priya", "Arjun", "Deepa"];
if (!students.includes("Karthik")) {
  students.push("Karthik");
}
students.shift();
students.unshift("Meena");
console.log(`Arjun is at position ${students.indexOf("Arjun")}`);
console.log(students);
