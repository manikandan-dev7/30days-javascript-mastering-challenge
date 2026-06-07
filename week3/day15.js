let expenses = [
  { name: "Biryani", amount: 180 },
  { name: "Bus pass", amount: 600 },
  { name: "Coffee", amount: 80 },
  { name: "Biryani", amount: 180 },
];

// 1. Write calcTotal() using reduce()
function calTotal(){
     return expenses.reduce((acc,curr) => {
        return acc + curr.amount
    },0)
}

// 2. Write calcAverage() using calcTotal() + Math.ceil()
const calcAverage = () => {
    return Math.ceil(calTotal()/expenses.length)
}

// 3. Write showUnique() — get only unique names using map + Set + spread
// console.log all three results
const showUnique = ()=> {
    let names = expenses.map(el => el.name);
    let unique = [...new Set(names)]
    return unique
}

console.log(calTotal());
console.log(calcAverage());
console.log(showUnique());
