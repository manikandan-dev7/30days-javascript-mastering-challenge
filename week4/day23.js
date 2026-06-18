let arr1 = ["hi", "hello", "shiva"];
let arr2 = ["welcome", "thankyou", "mani"];

let arr3 = [...arr1, ...arr2];
console.log(arr3);

function multiply(...val) {
  console.log(val);
  let result = val.reduce((acc, curr) => {
    return acc * curr;
  }, 1);

  return result;
}
let output = multiply(10, 20, 30);
let output2 = multiply(10, 20, 30, 40, 50);
console.log(output);
console.log(output2);



const user = {name: "Arun", age: 25, city: "Chennai", job: "Developer"};
const {name, ...details} = user;

console.log(`Name: ${name}
Other Details: ${JSON.stringify(details)}`);