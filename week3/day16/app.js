// DATA
let expenses = [];

// 1. DOM elements
let nameInput = document.getElementById("nameInput");
let number = document.getElementById("amountInput");
let categoryInput = document.getElementById("categoryInput");
let totalDisplay = document.getElementById("totalDisplay");
let avgDisplay = document.getElementById("avgDisplay");
let highDisplay = document.getElementById("highDisplay");
let countDisplay = document.getElementById("countDisplay");
let expenseList = document.getElementById("expenseList");
let tipDisplay = document.getElementById("tipDisplay");

// 2. addExpense()
function addExpense() {
  let val = nameInput.value.trim();
  let amt = number.value.trim();
  let category = categoryInput.value.trim();

  if (val == "") {
    alert("It must be a Name");
  } else if (val.length < 3) {
    alert("Name is too Short");
  } else if (!isNaN(val)) {
    alert("Name must be letters");
  } else if (amt == "") {
    alert("Enter a valid amount");
  } else if (isNaN(amt)) {
    alert("Amount must be a number");
  } else if (category == "") {
    alert("Enter a valid category");
  } else if (category.length < 3) {
    alert("Category is too short");
  } else if (!isNaN(category)) {
    alert("Category must be letters");
  } else {
    expenses.push({ name: val, amount: Number(amt), category: category });
    nameInput.value = "";
    number.value = "";
    categoryInput.value = "";
    render();
  }
}

// 3. deleteExpense()
function deleteExpense(index) {
  expenses.splice(index, 1);
  render();
}

// 4. render()
function render() {
  expenseList.innerHTML = "";

  expenses.forEach((el, index) => {
    let li = document.createElement("li");
    li.textContent = `${el.name} — ₹${el.amount} (${el.category})`;

    let btn = document.createElement("button");
    btn.textContent = "X";
    btn.onclick = function () {
      deleteExpense(index);
    };

    li.append(btn);
    expenseList.append(li);
  });

  // total
  let total = expenses.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);
  totalDisplay.textContent = `₹${total}`;

  // average
  let average = expenses.length > 0 ? (total / expenses.length).toFixed(2) : 0;
  avgDisplay.textContent = `₹${average}`;

  // highest
  let highest = expenses.reduce((acc, curr) => {
    return acc > curr.amount ? acc : curr.amount;
  }, 0);
  highDisplay.textContent = `₹${highest}`;

  // count
  countDisplay.textContent = expenses.length;
}
// 5. showAll() — shows every expense
function showAll() {
  // expenseList.innerHTML = ""
  expenseList.innerHTML = "";
  // expenses.forEach → create li + delete btn → append
  expenses.forEach((el) => {
    let li = document.createElement("li");
    li.textContent = `${el.name} — ₹${el.amount} (${el.category})`;

    let btn = document.createElement("button");
    btn.textContent = "X";
    btn.onclick = function () {
      deleteExpense(index);
    };
    render();
  });
}

// 6. showAboveAverage() — shows only expenses above average amount
function showAboveAverage() {
  // step 1: calculate total using reduce
  let total = expenses.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  // step 2: calculate average = total / expenses.length
  let average = total / expenses.length;
  // step 3: filter expenses where el.amount > average
  let highest = expenses.reduce((acc, curr) => {
    return acc > curr.amount ? acc : curr.amount;
  }, 0);
  console.log();

  // step 4: expenseList.innerHTML = ""
  expenseList.innerHTML = "";
  // step 5: filtered array forEach → create li → append
  expenses.forEach((el,index) => {
    let li = document.createElement("li");
    li.textContent = `${el.name} — ₹${el.amount} (${el.category})`;

    let btn = document.createElement("button");
    btn.textContent = "X";
    btn.onclick = function () {
      deleteExpense(index);
    };
    li.append(btn);
    expenseList.append(li);
    console.log(li);
  });
}

// 7. showUnique() — shows one item per unique category using Set
function showUnique() {
  // step 1: get all categories → expenses.map(el => el.category)
  let categories = expenses.map((el) => el.category);
  let removeDuplicates = [...new Set(categories)];
  // step 2: remove duplicates → [...new Set(categories)]
  // step 3: expenseList.innerHTML = ""
  expenseList.innerHTML = "";
  // step 4:  forEach → create li → append
  removeDuplicates.forEach((el) => {
    let li = document.createElement("li");
    li.textContent = removeDuplicates;
    console.log(categories);
    console.log(removeDuplicates);
    expenseList.append(li);
  });
}

// 8. randomTip() — shows a random money tip
function randomTip() {
  // step 1: make an array of 5 tip strings
  let tip =['hi have a nice day' , 'see you again','good bye seeya','thank you welcome again','pleasure to meet you']
  // step 2: pick random index using Math.floor + Math.random
  let pickRandom = (Math.floor(Math.random()*5))
  // step 3: tipDisplay.  textContent = tips[randomIndex]
  tipDisplay.textContent =  tip[pickRandom]

  console.log(tip[pickRandom])
}
