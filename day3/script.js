// 🧠 1. Detect and Merge Duplicate Product Entries (Advanced Cleanup)
let inventory = [
  { id: 101, name: 'Laptop' },
  { id: 102, name: 'Mobile' },
  { id: 103, name: 'laptop' },
  { id: 104, name: 'Tablet' },
  { id: 105, name: 'MOBILE' },
  { id: 106, name: 'Camera' }
];
let arr = [];
let updatedInventory = inventory.filter(item => {
  let lowerName = item.name.toLowerCase();
  if (arr.includes(lowerName)) {
    return false;
  } else {
    arr.push(lowerName);
    return true;
  }
});
console.log(updatedInventory);
// 🧠 2. Group Transactions by Category and Sum Amounts
let transactions = [
  { category: 'Food', amount: 120 },
  { category: 'Transport', amount: 50 },
  { category: 'Food', amount: 80 },
  { category: 'Shopping', amount: 300 },
  { category: 'Transport', amount: 70 },
];

let result = transactions.reduce((acc, curr) => {
  if (acc[curr.category]) {
    acc[curr.category] += curr.amount;
  } else {
    acc[curr.category] = curr.amount;
  }
  return acc;
}, {});

console.log(result);
