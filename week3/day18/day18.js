//async javascript

//synchronous javascript
//Your whole page freezes for 5 seconds. User can't click anything. That's bad.
console.log("1");
// imagine this takes 5 seconds
console.log("2");
console.log("3");
// Output: 1 ... (5 sec wait) ... 2, 3

//asynchronous javascript
//Synchronous = wait for me. Asynchronous = don't wait, I'll call you back.
console.log("1");
setTimeout(() => {
  console.log("2"); // runs after 2 seconds
}, 2000);
console.log("3");

// Output: 1, 3, 2

//Example1 - basic
setTimeout(() => {
  console.log("Hello after 3 seconds");
}, 3000);

//Example 2 — with a named function:
function greet() {
  console.log("Good morning!");
}

setTimeout(greet, 2000); // pass the function, don't call it
// //Example 3 — clearTimeout (cancel it):
let timer = setTimeout(() => {
  console.log("This will never run");
}, 5000);

clearTimeout(timer); // cancelled before 5 seconds

// setTimeout never runs in the middle of synchronous code. Even with 0, JS finishes all current synchronous lines first, then comes back to the timer.

// 0ms doesn't mean "run now" — it means "run as soon as current code is done."

// That's the event loop in simple terms. Synchronous code always finishes first, async callbacks wait their turn.
console.log("start");

setTimeout(() => {
  console.log("timer done");
}, 0);

console.log("end");

let count = 0;

let interval = setInterval(() => {
  count++;
  console.log(count);

  if (count === 5) {
    clearInterval(interval); // stops after 5 times
  }
}, 1000);

// prints 1, 2, 3, 4, 5 then stops
let broke = setInterval(() => {
  num += 10;
  console.log(num);
  if (num === 30) {
    clearInterval(broke);
  }
}, 1000);

// callbacks in async

// A callback is just a function passed into another function.
// In async, the callback is the function you pass to setTimeout / setInterval — it runs later, not immediately.

function wishMorning(){
    console.log("hello sunShine");
}
setTimeout(wishMorning,4000)

function fetchData(callback) {
  setTimeout(() => {
    console.log(1);

    let data = "User: Manikandan";
     console.log("1");
    callback(data); // done! now call the callback with result
  }, 2000);
}

fetchData((data) => {
   console.log(2);
  console.log(data); // prints after 2 seconds
});

//callbackhell concept5
setTimeout(() => {
  console.log("Step 1 done");
  setTimeout(() => {
    console.log("Step 2 done");
    setTimeout(() => {
      console.log("Step 3 done");
      setTimeout(() => {
        console.log("Step 4 done");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
// This is callback hell — nested callbacks inside callbacks inside callbacks. Looks like a pyramid. Hard to read, hard to debug, hard to maintain.
// This is exactly why Promises were invented. Same logic, clean flat code.


//promises concept64
//   A Promise is an object that represents a task that will finish in the future — either successfully or with an error.
// Three states:
// Pending Resolved Rejected

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data ready after 2 seconds!");
  }, 2000);
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let foodArrived = false; // change to true and see difference

    if (foodArrived) {
      resolve("Biryani delivered!");
    } else {
      reject("Order cancelled!");
    }
  }, 2000);
});

myPromise
  .then((result) => {
    console.log(result); // runs when foodArrived = true
  })
  .catch((error) => {
    console.log(error); // runs when foodArrived = false
  });