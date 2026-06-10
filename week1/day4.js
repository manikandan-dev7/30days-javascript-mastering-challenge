// function doMath(a,b,callback){
//     let result = a+b;
//     return callback(result);
// }

// function output(value){
//     return value
// }
// let result = doMath(10,20,output)
// console.log(result);
// function doMath(a, b, callback) {
//     if (a < 0 || b < 0) {
//         return console.log("Only positive numbers!");
//     }
//     let result = a + b;
//     callback(result);
// }

// function output(result) {
//     console.log(result);
// }

// doMath(-5, 20, output);
// doMath(10, 20, output);

// Normal way — you already know this
// const doMath = (a, b, callback) => {
//     let result = a + b;
//     callback(result);
// }

// const output= (result)=> {
//     console.log(result);
// }

// doMath(10, 20, output);

function getStudent(name,marks, callback) {
  let student = { name: name, marks: marks};
  callback(student);
}
function checkGrade(student,callback) {
  let grade;
  if (student.marks >= 90) {
    grade = "A";
  } else if (student.marks >= 75) {
    grade = "B";
  } else {
    grade = "C";
  }
  student.grade = grade;
  callback(student);
}
function printResult(student){
    console.log(`${student.name} scored ${student.marks} marks and got Grade ${student.grade}`);
    
}
getStudent("Manikandan",35, function(student) {
    checkGrade(student, function(result) {
        printResult(result);
    });
});