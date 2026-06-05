// spread rest and merging;

// spread... = unpacks an array
// ["ravi", "priya"] -> "ravi" "priya"

//rest ... collects into an array
// "ravi" "priya" "arjun" -> ["ravi", "priya", "arjun"];

//code skeleton 
// SPREAD — copy an array
let a = ["Ravi", "Priya"];
let b = [...a];                        // ["Ravi", "Priya"]
console.log(b);

// SPREAD — merge two arrays
let c = ["Arjun", "Deepa"];
let merged = [...b, ...c];             // ["Ravi", "Priya", "Arjun", "Deepa"]
console.log(merged);


// SPREAD — add item while merging
let merged2 = [...a, "Karthik", ...c]; // ["Ravi", "Priya", "Karthik", "Arjun", "Deepa"]
console.log(merged2);


// REST — collect extra arguments into array
function showNames(first, ...rest) {
    console.log(first);  // "Ravi"
    console.log(rest);   // ["Priya", "Arjun", "Deepa"]
}
showNames("Ravi", "Priya", "Arjun", "Deepa");


//warmup task

let morning = ["Ravi", "Priya"];
let copy = [...morning]
let evening = ["Arjun", "Deepa"];

console.log(morning);
console.log(evening);

let allNames = [...morning, ...evening]
console.log(allNames);

let allNames2 = [...morning, "Karthi", ...evening];
console.log(allNames2);

function showFirst(first,...rest){
    console.log(first);
    console.log(rest);
}
showFirst("Ravi", "Priya", "Arjun", "Deepa")

// Without spread — both point to same array!
let x = ["Ravi", "Priya"];
let y = x;
y.push("Arjun");
console.log(x); // ["Ravi", "Priya", "Arjun"] ← x also changed! 😱

// With spread — independent copy
let z = [...x];
z.push("Deepa");
console.log(x); // ["Ravi", "Priya", "Arjun"] ← x is safe ✅

// 🔺 Medium Task
// Real use case — merging two class lists and finding unique names only.
// jslet batch1 = ["Ravi", "Priya", "Arjun"];
// let batch2 = ["Arjun", "Deepa", "Ravi", "Karthik"];
// Do these in order:

// Merge both arrays into combined using spread
// Remove duplicates — store result in unique

// Hint: [...new Set(combined)]


// Write a function addStudents(existing, ...newOnes) that:

// Takes existing array as first param
// Collects any number of new names via rest
// Returns merged array using spread
// Call it: addStudents(unique, "Meena", "Salem", "Deepa")


// console.log the final result
//set fn
// Set automatically removes duplicates
let removeDuplicate = [...new Set([1, 2, 2, 3, 3])]
// → [1, 2, 3]
console.log(removeDuplicate);

let batch1 = ["Ravi", "Priya", "Arjun"];
let batch2 = ["Arjun", "Deepa", "Ravi", "Karthik"];

let combined = [...batch1, ...batch2];
console.log(combined);

let unique = [...new Set(combined)]
console.log(unique);

function addStudents(existing, ...newOnes){
    console.log(existing);
    console.log(newOnes);
    return [...existing, ...newOnes]
}
let result = addStudents(unique, "Meena", "Salem", "Deepa")
console.log(result);

