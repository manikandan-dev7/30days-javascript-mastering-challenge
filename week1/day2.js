//function declaration

function calculateAge(year){
    return 2026 - (year);
}
let output = calculateAge(2004);
console.log(output);

// //function expression

// const calculateAge = function(year){
//     return 2026 - year
// };
// let age = calculateAge(2004);
// console.log(age);

// //arrow function with curly braces
// const calculateAge = (year)=>{
//     return 2026 - year
// };
// let age = calculateAge(2004);
// console.log(age);

// //arrow function one line no return keyword

// const calculateAge = (year)=> 2026 - year;
// let age = calculateAge(2004);
// console.log(age);

//bouns challenge
// const doubleNumber = (givenNo) => givenNo*2;
// let result = doubleNumber(2);
// console.log(result);

//extra challenge

//pratice 1
// const isEven = (num)=>{
//     if(num%2==0&&num!==0){
//         return "Even"
//     }
//     else if(num==0){
//         return"no netural values"
//     }
//     else{
//         return "Odd"
//     }
// }
// let output = isEven(7)
// console.log(output);

// //pratice 2
// const celsiusToFehrenheit = (celsius)=>(celsius * 9/5) + 32;
// let result = celsiusToFehrenheit(100)
// console.log(result);

// //pratice 3
// const getFirstname = (name)=>{
//     return name.split(" ")[0]
// }
// let name = getFirstname("Manikandan S")
// console.log(name);

const todayIShowed = ()=> "yes i did it"
console.log(todayIShowed());
