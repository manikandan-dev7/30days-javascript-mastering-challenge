<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 id="heading">I am original</h1>
    <p id="para">This is a paragraph</p>

    <script>
       let heading = document.getElementById("heading")
       heading.textContent = "JS chnaged me!";
       let para = document.querySelector("#para");
       para.textContent = "DOM is powerful"
    </script>
</body>
</html> -->

<!--
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1 id="heading">Original Text</h1>
    <button id="btn">Click Me</button>
    <script>
      let heading = document.getElementById("heading");
      let btn = document.getElementById("btn");
      btn.addEventListener("click", () => {
        heading.textContent = "Button was Clicked!";
      });
    </script>
  </body>
</html>-->

<!-- <!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1 id="count">count: 0</h1>
    <button id="btn">Click Me</button>

    <script>
      let num = 0;
      let btn = document.getElementById("btn");
      let count = document.getElementById("count");
      btn.addEventListener("click", () => {
        num++;
        count.textContent = `count: ${num} `;
      });
    </script>
  </body>
</html> -->

<!--
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <p id="para">This is the paragraph</p>
    <button id="btn">Hide</button>

    <script>
      let para = document.getElementById("para");
      let btn = document.getElementById("btn");
      let visible = true;

      btn.addEventListener("click", () => {
        visible = !visible;
        para.style.display = visible ? "block" : "none";
        btn.textContent = visible ? "hide" : "show" 
      });
    </script>
  </body>
</html> -->
<!--
<!DOCTYPE html>
<html>
<body>
  <h1>Products</h1>
  <button id="btn">Show Expensive</button>
  <div id="list"></div>

  <script>
    let products = [
      { name: "Phone", price: 10000 },
      { name: "Shirt", price: 500 },
      { name: "Laptop", price: 55000 },
      { name: "Book", price: 300 },
      { name: "Watch", price: 12000 }
    ];

    let list = document.getElementById("list");
    let btn = document.getElementById("btn");
    let showAll = true;

    // ← OUTSIDE click listener — so it can be called anytime
    function displayProducts(arr) {
      list.innerHTML = "";       // clears old list first
      arr.map((item) => {
        let p = document.createElement("p");
        p.textContent = `${item.name} - ₹${item.price}`;
        list.appendChild(p);
      });
    }

    displayProducts(products);   // show all on page load

    btn.addEventListener("click", () => {
      showAll = !showAll;        // flip first

      if (showAll) {
        displayProducts(products);          // show everything
        btn.textContent = "Show Expensive";
      } else {
        let expensive = products.filter((item) => {
          return item.price > 1000;         // filter condition
        });
        displayProducts(expensive);         // show filtered
        btn.textContent = "Show All";
      }
    });
  </script>
</body>
</html>-->

<!-- <!DOCTYPE html>
 <html lang="en">
 <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
 </head>
 <body>
    <div id="list"></div>
        <script>
            let list = document.getElementById("list")
            let names = ["Mani", "Kumar", "Raj"];

            const displayName = (arr) => {
                list.innerHTML = "";
                arr.map((item) => {
                    let p = document.createElement("p");
                    p.textContent = item;
                    list.appendChild(p)
                })
            }
            displayName(names)
        </script>
   
      </body>
 </html> -->

<!-- <!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <button id="btn">Show Expensive</button>
    <div id="list"></div>
    <script>
      let products = [
        { name: "Phone", price: 10000 },
        { name: "Shirt", price: 500 },
        { name: "Laptop", price: 55000 },
        { name: "Book", price: 300 },
        { name: "Watch", price: 12000 },
      ];

      let list = document.getElementById("list");
      let btn = document.getElementById("btn");
      let showAll = true;

      const displayProducts = (arr) => {
        list.innerHTML = "";
        arr.map((item) => {
          let p = document.createElement("p");
          p.textContent = `${item.name}-${item.price}`;
          list.appendChild(p);
        });
      };

      btn.addEventListener("click", () => {
        showAll = !showAll;
        if (showAll) {
          displayProducts(products);
          btn.textContent = "show expenses";
          console.log("buttonclicked1");
        } else {
          let expensive = products.filter((item) => {
            return item.price > 1000;
          });
          displayProducts(expensive);
          btn.textContent = "showall";
        }
      });

      displayProducts(products);
    </script>
  </body>
</html> -->

<!-- <!DOCTYPE html>
<html>
<body>
  <div id="box"></div>

  <script>
    let box = document.getElementById("box");
    //creating para
    let p = document.createElement("p");
    p.textContent = "I am learning DOM"
    box.appendChild(p)
    //pushing p into div
  </script>
</body>
</html> -->
<!-- <!doctype html>
<html>
  <body>
    <div id="box"></div>

    <script>
      let box = document.getElementById("box");
      let fruits = ["Apple", "Mango", "Banana", "Fig", "Watermelon"];

      // if fruit name length > 5 → create <p> and show it
      // if not → skip it

      const showFruits = (arr) => {
        // write here
       
        // Task — loop through fruits
        arr.map((item) => {
          // if fruit name length > 5 → create <p> and show it

          if (item.length >= 5) {
             let p = document.createElement("p");
            console.log(item);
            p.textContent = item;
            box.append(p);
          }
          // if not → skip it
        });
      };
      showFruits(fruits);
    </script>
  </body>
</html> -->
<!-- <!doctype html>
<html>
  <body>
    <div id="box"></div>

    <script>
      let box = document.getElementById("box");

      let students = [
        { name: "Mani", score: 80 },
        { name: "Raj", score: 45 },
        { name: "Kumar", score: 72 },
        { name: "Senthil", score: 35 },
        { name: "Arun", score: 90 },
      ];

      let filterVal = (arr) => {
        let filtered = arr.filter((item) => {
          // step 1 — filter students with score >= 60
          return item.score >= 60;
        });
        return filtered;
      };
      let filtered = filterVal(students);
      filtered.map((el) => {
        // step 2 — loop through filtered students
        let p = document.createElement("p");
        // step 3 — create <p> for each → show name and score
        p.textContent = `${el.name}-${el.score}`;
        // Expected → Mani 80, Kumar 72, Arun 90
        box.append(p);
      });
    </script> 
    <script>
      let box = document.getElementById("box");

      let students = [
        { name: "Mani", score: 80 },
        { name: "Raj", score: 45 },
        { name: "Kumar", score: 72 },
        { name: "Senthil", score: 35 },
        { name: "Arun", score: 90 },
      ];

      // Task:
      // step 1 — filter students with score >= 60
     let filteredVal = students.filter((item) => {
     return item.score >=60
     })
      // step 2 — loop through filtered students
      filteredVal.map((item) => {
        let p = document.createElement("p");
        p.textContent = `${item.name}-${item.score}`
        box.append
      })
      // step 3 — create <p> for each → show name and score
      // Expected → Mani 80, Kumar 72, Arun 90
    </script>
  </body>
</html> -->
<!-- 
<!doctype html>
<html>
  <body>
    <h2>Students</h2>
    <button id="btn">Show Passed</button>
    <div id="box"></div>

    <script>
      let box = document.getElementById("box");
      let btn = document.getElementById("btn");
      let showAll = true;

      let students = [
        { name: "Mani", score: 80 },
        { name: "Raj", score: 45 },
        { name: "Kumar", score: 72 },
        { name: "Senthil", score: 35 },
        { name: "Arun", score: 90 },
      ];

      // step 1 — write display function (clears box, loops arr, createElement)
      let mapped = (arr) => {
        box.innerHTML = "";
        arr.map((el) => {
          let p = document.createElement("p");
          p.textContent = `${el.name}-${el.score}`;
          box.append(p);
        });
      };

      // step 2 — call display on page load with all students

      btn.addEventListener("click", () => {
        showAll = !showAll;
        // step 3 — btn click → flip showAll → if/else → display right array
        if (showAll) {
          mapped(students);
          btn.textContent = "showpassed";
        } else {
          let passed = students.filter((item) => {
            return item.score > 50;
          });
          mapped(passed);
          btn.textContent = "showall";
        }
      });
      mapped(students);
    </script>
  </body>
</html> -->
<!-- <!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Page description" />
    <title>Page Title</title>
  </head>
  <body>
    <input id="myinput" type="text" />
    <button id="btn">Submit</button>
    <div id="list"></div>
    <script>
    //   let input = document.getElementById("myinput");
    //   let btn = document.getElementById("btn");
    //   let list = document.getElementById("list");
    //   btn.addEventListener("click", () => {
    //     let name = input.value;
    //     let p = document.createElement("p");
    //     p.textContent = name;
    //     console.log(name);
    //     list.append(p);
    //   });
    </script>
  </body>
</html> -->

<!-- <!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <input id="myinput" type="text" />
    <button id="addbtn">ADD</button>
    <ul id="list"></ul>
    <script>
      let input = document.getElementById("myinput");
      let add = document.getElementById("addbtn");
      let list = document.getElementById("list");
      add.addEventListener("click", () => {
        let names = input.value;
        if(names === "") return;
        let li = document.createElement("li");
        let del = document.createElement("button");
        del.textContent = "remove";
        li.textContent = names;
        console.log(names);
        del.addEventListener("click", () => {
          li.remove();
        });
        li.append(del);
        list.append(li);
      });
    </script>
  </body>
</html> -->
