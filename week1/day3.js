// Create a program that has:
// 1. A global variable called userName = "Manikandan"
// 2. A function called checkScore that takes one parameter: score
// 3. Inside the function declare a variable called grade
// 4. If score >= 90, grade = "A"
//    If score >= 70, grade = "B"
//    Otherwise grade = "C"
// 5. Return both userName and grade together
//    like "Manikandan got grade A"
// 6. console.log the result

// let userName = "Manikandan";

// function checkScore(score){
//     let grade = ['A','B','C'];
//     if(score >= 90){
//         return `${userName} got grade ${grade[0]}`
//     }
//     else if(score >= 70){
//         return `${userName} got grade ${grade[1]}`
//     }
//     else{
//         return`${userName} got grade ${grade[2]}`
//     }
// }
// let result = checkScore(90)
// console.log(result)

// diff way 
// let userName = "Manikandan";
// function checkScore(score){
//     let grade;
//     if(score >= 90){
//         grade = "A";
//     }
//     else if(score >= 70){
//         grade = "B";
//     }
//     else{
//         grade = "C";
//     }
//     return `${userName} got grade ${grade}`
// }

// let result = checkScore(30)
// console.log(result);
function outer(){
    let x = 10

    function inner(){
        let y = 20
        console.log(x)    // line 1
        console.log(y)    // line 2
    }

    inner()
    console.log(x)        // line 3
    console.log(y)        // line 4
}

outer()
console.log(x)            // line 5
console.log(result);
