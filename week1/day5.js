// const greet = (name,callback)=>{
//     console.log("hello" + name);
//     callback()
// }
// // const sayBye = ()=>{
// //     console.log("Goodbye!");
// // }
// greet("Manikandan",function(){
//     console.log("goodbye");
    
// })

// const calculate =(a,b,callback)=>{
//     let result = a*b;
//     callback(result)
// }

// calculate(10,5,(result)=>{
//     console.log(result);
// })

// const greetUser = (name, age, anonymous)=>{
//     let message = `${name} is ${age} years old`;
//     anonymous(message)
// }

// greetUser("manikandan", 21, (anonymous)=>{
//     console.log(anonymous);
// })

// const doTask = (taskName,callback)=>{
//     let output = `Starting: ${taskName}`
//     callback(output)
// }

// doTask("Gym workout",(output)=>{
//     console.log(output);
// })

const filterNumbers = (numbers, callback) => {  // step 1 filterNumbers([1,5,12,3,18,7,20], (num) => { return num > 10 })
    let result = [] ; // step4 receives pushed no's
    for(let i = 0; i < numbers.length; i++){
        if(callback(numbers[i])){   //step 2  num > 10; numbers[2]=12; 12>10 so push 
            result.push(numbers[i]); // step 3 numbers[i] = numbers[index0,index1] ==> 12
        }
    }
    return result // step 5 replace in filterNumbers([1,5,12,3,18,7,20],(numbers)=>{ return numbers > 10; }) so output = result's array
}

let output = filterNumbers([1,5,12,3,18,7,20],(num)=>{  //step 6
    return num > 10; // 12>10 so return true
})
 
console.log(output); //step7