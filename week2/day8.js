// let array = [10, 20, 30, 50 ,66, 77, 54];
// let newArray = array.map((item) => {
//     return item*2
// })
// console.log(newArray);

const { question } = require("readline-sync");

// const array = (val) => {
//     let newArray = val.map((item) => {
//         return item*2;
//     })
//     return newArray;
// }
// let output = array([10, 20, 30, 50 ,66, 77, 54])
// console.log(output);

// //question1

// const calNum = (val) => {
//     let array = val.map((item) => {
//         return item*3
//     })
//     return array
// };
// let output = calNum([10, 20, 30]);
// console.log(output);

// //questions2

// const names = (nam) => {
//     let newArray = nam.map((el) => {
//         return `${el}!`
//     })
//     return newArray
// };
// let result = names(["mani", "kumar", "raj"]);
// console.log(result);

// //question3

// const adding = (num) => {
//     let addedOne = num.map((x) => {
//         return x+1;
//     })
//     return addedOne
// }

// let value = adding([5, 10, 15]);
// console.log(value);

// //question 1

// const fillNum = (val) => {
//     let filteredNum = val.filter((num) => {
//         return num > 25
//     })
//     return filteredNum
// }
// let result = fillNum([10, 20, 30, 50, 66]);
// console.log(result);

// //question 2

// const num = (x) => {
//     let value = x.filter((el) => {
//         return el < 10;
//     })
//     return value
// }

// let output = num([5, 8, 12, 3, 19, 4]);
// console.log(output);

// //question3

// let filNames = (name) => {
//     let filteredName = name.filter ((item) => {
//         return item.length > 3 ;
//     })
//     return filteredName
// }

// let names = filNames(["mani", "raj", "kumar", "sk"]);
// console.log(names);

// question1

//

const products = (val) => {
  let filteredProducts = val
    .filter((el) => {
      return el.price > 1000;
    })
    .map((el) => {
      return el.name;
    });
  return filteredProducts;
};

let output = products([
  { name: "phone", price: 10000 },
  { name: "shirt", price: 500 },
  { name: "laptop", price: 55000 },
  { name: "book", price: 300 },
  { name: "watch", price: 12000 },
]);

console.log(output);

