// const findingEvenNo = (num,callback) => {
//     let result = []
//     for(i=0; i < num.length; i++){
//         if(callback(num[i])){
//         result.push(num[i]+ "Even");
//     }
//     }
//   return result
// }

// let output = findingEvenNo([3, 8, 15, 22, 7, 40, 11, 6],(numbers) => {
//     return numbers %2 == 0;
// })

// console.log(output);

// let numbers = [3, 8, 15, 22, 7, 40, 11, 6];

// numbers.forEach((el) => {
//     if(el%2 == 0){
//         console.log(`${el} Even`);
//     }
// })

// let names = ["Mani", "Priya", "Jo", "Alexander", "Kumar"];

// names.forEach((el)=>{
//     console.log(`${el} has ${el.length} letters`);
// })

// let students = [
//     {name: "Mani", score: 82},
//     {name: "Ram", score: 45},
//     {name: "Priya", score: 91},
//     {name: "Kumar", score: 73},
//     {name: "Jo", score: 78}
// ];

// students.forEach((el) => {
//     if(el.score >= 75){
//         console.log(`${el.name} - ${el.score}`);
//     }
// })

// let numbers = [23, 50, 78, 12, 50, 91, 45];

// numbers.forEach((num) => {
//     if(num > 50){
//         console.log(`${num} - High`);
//     }
//     else if(num == 50){
//         console.log(`${num} - Mid`);
//     }
//     else{
//         console.log(`${num} - Low`)
//     }
// })

// let array = [10, 20, 30, 50, 60,];
// let newArray = array.forEach((el) => {
//    console.log(el*2);

// })

// console.log(newArray);

//rest operator
function restPara(x, ...rest) {
  return rest;
}
console.log(restPara(10, 12, 34, 54, "hello"));

//spread operator
function showSpread(x, y, z) {
  return `x: ${x}, y: ${y}, z: ${z}`;
}

const sourceArray = [12, 34, 54];

// Spreading the array passes 12 to x, 34 to y, and 54 to z
console.log(showSpread(...sourceArray));
// Output: "x: 12, y: 34, z: 54"

//merging
let a = {
  name: "mani",
  age: 21,
};
let b = {
  time: "shiva",
  place: 22,
};
let c = { ...a, ...b };

console.log(c);
