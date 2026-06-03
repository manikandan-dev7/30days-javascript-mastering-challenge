// pratice day

// const array = [1,2,4,5,7,8,44,55,6,4,23,4,667];
// array.forEach((array)=>{
//     console.log(array);
// })

// function checkMark(mark){
//     if(mark >= 50){
//         console.log("pass");
//     }
//     else{
//         console.log("fail");
//     }
// }
// let marks = [42,72,38,91,60];

// marks.forEach((el)=>{
//     checkMark(el)
// })

// const doSomething = (item) => {
//     if(item >= 50 ){
//         console.log("pass");
//     }
//     else{
//         console.log("fail");
//     }
// }

// let Marks = [45,75,96,98,21,34,49,66,51]
// let result = [45,75,96,98,21,34,49,66,51]

// Marks.forEach((el)=>{
//     doSomething(el)
// })
// result.forEach((el)=>{
//     doSomething(el)
// })

// let names = ["Mani", "Ram", "Priya", "Kumar", "Jo"];
// names.forEach((el)=>{
//     if(el.length> 4){
//         console.log(el)
//     }
// })

// const checkWorthy = (value) => {
//     if(value <= 500){
//         console.log("Affordable")
//     }
//     else{
//         console.log("Expensive")
//     }
// }

// let prices = [120, 450, 89, 999, 300, 1500, 75];

// prices.forEach((el) => {
//     checkWorthy(el)
// })

// const markChecker = (mark) => {
//     if(students.mark >= 50 ){
//         console.log(`${students.name} - pass `);
//     }
//     else{
//         console.log(`${students.name} - Fail `)
//     }
// }

// let students = [
//     {name : "Mani", score : 82},
//     {name : "Ram", score : 45},
//     {name : "Priya", score : 91},
//     {name : "Kumar", score : 38},
//     {name : "jo", score : 60}
// ]

// students.forEach((el) => {
//     markChecker(el)
// })

let students = [
  { name: "Mani", score: 82 },
  { name: "Ram", score: 45 },
  { name: "Priya", score: 91 },
  { name: "Kumar", score: 38 },
  { name: "Jo", score: 60 },
];

students.forEach((el) => {
  if (el.score >= 50) {
    console.log(`${el.name} - Pass `);
  }
  else{
    console.log(`${el.name} - Fail `)
  }
});
