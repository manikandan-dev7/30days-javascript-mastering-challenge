//reduce, Math.Random, Math.floor, Math.cell

// reduce
//sum
const nums = [10, 20, 30, 40];
const total = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(total); // 100

// Average = total / count
const avg = total / nums.length; // 25
console.log(avg);

// Find max
const max = nums.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
}, 0);
console.log(max); // 40

console.log(Math.random()); // 0.0 to 0.999... (never exactly 1)
console.log(Math.floor(4.9)); // → 4  (always rounds DOWN)
console.log(Math.ceil(4.1)); // → 5  (always rounds UP)
console.log(Math.round(4.5)); // → 5  (normal rounding — bonus)
// The golden pattern — random integer from 1 to N:
console.log(Math.floor(Math.random() * 6) + 1); // random dice roll: 1–6

//warm up task
const prices = [120, 450, 80, 200, 330];
let result = prices.reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(result);
let highestPrice =  prices.reduce((acc,cur) => {
    return acc > cur ? acc : cur
},0)
console.log(highestPrice);


//generate random score task

let output = Math.floor(Math.random()*100)+1
console.log(`${output}/100`);

