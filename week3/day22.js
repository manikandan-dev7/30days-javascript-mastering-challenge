//destructuring an array
const scores = [85, 92, 78];
const [math, science, english] = scores;

console.log(math + science + english);

//giving default value to an array
let x = 10;
let y = 0;
const [z = 99] = [y];
console.log(z);

//object destructring with nested objects
const student = {name: "Arun", marks: {physics: 88, chemistry: 91}};

const{name, marks :{physics,chemistry} } = student

console.log(`${name} scored ${physics} in physics and ${chemistry} in chemistry`)

//destructure using function params and argue with default value

function displayProfile({name, age, city = "unknown"}){
    return `${name} is ${age} years old and lives in ${city}`;
}

const profile1 = displayProfile({name:"mani", age:18, city:"madurai"})

const profile2 = displayProfile({name:"mani", age:18})

console.log(profile1);
console.log(profile2);

