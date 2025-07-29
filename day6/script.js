//  Q1. Add Product to Cart
// You’re working on an e-commerce site. Insert a new product ID 105 at the end of the cart array.
let cart = [101, 102, 103, 104];
cart.push(105);
console.log(cart);

// Q2. Remove Sold Out Item
// Given a cart with product IDs, remove the product 103 from it.
cart = [101, 102, 103, 104];
console.log(cart.filter((b)=>b!==103));

// Q3. Insert at Specific Position
// Insert "banana" at the 2nd index in this fruits array:
let fruits = ["apple", "orange", "grapes"];
fruits.splice(2,0,'banana');
console.log(fruits);


// Q4. Print All Students
// Traverse the students array and print a message like:
// “Hello, <studentName>!” for each name.
let students = ["Ali", "Zara", "John"];
students.forEach((student)=>{
    console.log("Hello,",student+"!");})

// Q5. Delete First Item from Queue
// You are simulating a queue. Remove the first item from this list of orders:
let orders = ["order1", "order2", "order3"];
orders.shift("order1");
console.log(orders);
