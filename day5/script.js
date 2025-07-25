// 🔎 Problem 1: Separate Phone Numbers
const phoneNumbers = [
  "+919876543210",
  "+14085551234",
  "+918888777666",
  "+12345678901",
  "+917654321098"
];
let indianNumbers=phoneNumbers.filter((num)=>{
   return num.startsWith('+91');
})
let usNumbers=phoneNumbers.filter((no)=>{
    return no.startsWith('+1');
})
console.log('indianNumbers:',indianNumbers);
console.log('usNumbers:',usNumbers);

// ✨ Problem 2: Insert Product in Cart
let cart = [101, 102, 104];
let newProduct = 103;
cart.splice(1,0,newProduct);
console.log(cart);

// 💼 Problem 3: Insert Student in Waiting List
let waitingList = ["Ali", "John", "Sara"];
let newStudent = "Aarav";
waitingList.push(newStudent);
console.log(waitingList);
