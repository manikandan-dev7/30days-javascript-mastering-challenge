//map and filter combo

const students = [
  { name: "Ravi", score: 45 },
  { name: "Priya", score: 82 },
  { name: "Karan", score: 38 },
  { name: "Sneha", score: 91 },
  { name: "Arjun", score: 55 },
];

let result = students
  .filter((el) => {
    return el.score >= 60;
  })
  .map((el) => {
    return `${el.name} - PASS (${el.score})`;
  });
console.log(result);

//reduced to find total avg and highest.
const scores = [72, 45, 88, 33, 95, 61];

let total = scores.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(total);

let avg = total / scores.length;
console.log(avg);

let highest = scores.reduce((acc, curr) => {
  return acc > curr ? acc : curr;
}, 0);
console.log(highest);


//spread split and set
const batch1 = ["Ravi", "Priya", "Karan"];
const batch2 = ["Sneha", "Priya", "Arjun", "Ravi"];
const newInput = "Meena, Karan, Divya, Sneha";
let batch3 = newInput.split(',').map(el => el.trim()); // making string into seprate string and then make trim and turn into array
console.log(batch3);
console.log(batch3);

let combine = [...batch1, ...batch2, ...batch3];
console.log(combine);
let removeDuplicate = [...new Set(combine)];
console.log(removeDuplicate);

