//1. Generate Invoice Report   //Hint : Use Map & Reduce
let items = [
  { name: "Pen", qty: 3, price: 10 },
  { name: "Notebook", qty: 2, price: 50 },
  { name: "Bag", qty: 1, price: 400 }
];

let Invoice=items.map((item) => {return{
  name:item.name,
total:(item.qty)*(item.price)}
});
console.log(Invoice);
//output:[
//   { name: 'Pen', total: 30 },
//   { name: 'Notebook', total: 100 },
//   { name: 'Bag', total: 400 }
// ]

//2. Detect Duplicate Entries 
let users = ['Ali', 'Sara', 'Zoya', 'Ali', 'Zara', 'Sara'];
let duplicate=users.filter((user,index)=>{
  if(users.indexOf(user)!=users.lastIndexOf(user)&&(users.indexOf(user)===index)){
  
    return user;
  }
})
console.log(duplicate);
//output:[ 'Ali', 'Sara' ]

//3. Find Most Sold Product
let orders = [
  { product: 'Pen', qty: 10 },
  { product: 'Notebook', qty: 5 },
  { product: 'Pen', qty: 15 },
  { product: 'Bag', qty: 1 },
  { product: 'Notebook', qty: 10 }
];

let freqMap = orders.reduce((acc, item) => {
  acc[item.product] = (acc[item.product] || 0) + item.qty;
  return acc;
}, {});

let maxProduct = '';
let maxQty = 0;

for (let product in freqMap) {
  if (freqMap[product] > maxQty) {
    maxQty = freqMap[product];
    maxProduct = product;
  }
}
console.log(maxProduct); 
//output:Pen
