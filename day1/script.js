//1.Remove Discontinued Products
let products=['Laptop','Mobile','Tablet','Camera','Watch',];
products.splice(2,2);
console.log(products);
//output:[ 'Laptop', 'Mobile', 'Watch' ]

// 2. Add New Students in Between
let students = ['Ali', 'Sara', 'Zoya'];
students.splice(1,0,'Nina','Omar');
console.log(students);
//output:[ 'Ali', 'Nina', 'Omar', 'Sara', 'Zoya' ]

// 3. Extract Top Performers
let scores = ['Zainab', 'Ali', 'Farhan', 'Nida', 'Ayaan'];
let Toppers=scores.slice(0,3);
console.log(Toppers);
//output:[ 'Zainab', 'Ali', 'Farhan' ]

//4. Show Last 2 Days’ Sales
let sales=[220,300,280,150,400,390,310]
console.log(sales.slice(5));
//output:[ 390, 310 ]

//5. Get All Users Who Are Active
let users = [
  {name: 'Ahmed', active: true},
  {name: 'Mira', active: false},
  {name: 'John', active: true},
];
let ActiveUsers=users.filter(user => user.active===true);
console.log(ActiveUsers);
//output:[ { name: 'Ahmed', active: true }, { name: 'John', active: true } ]

//6. Block Short Phone Numbers
let phoneNumbers = ['1234567890', '12345', '9876543210', '678901234'];
phoneNumbers=phoneNumbers.filter(digits => digits.length===10);
console.log(phoneNumbers);
//output:[ '1234567890', '9876543210' ]

//7. Convert Price to With Tax
let prices = [100, 200, 300];
let priceWithTax=prices.map(price =>price+( price*18/100));
console.log(priceWithTax);
//output:[ 118, 236, 354 ]

//8. Append “.com” to Website Names
let sites = ['google', 'amazon', 'microsoft'];
sites=sites.map(txt => txt+'.com');
console.log(sites);
//output:[ 'google.com', 'amazon.com', 'microsoft.com' ]

//9. Calculate Total Cart Price
let cart = [499, 1299, 299, 799];
let total=cart.reduce((acc,curr)=> acc+curr,0);
console.log(total);
//output:2896


//10. Count Frequency of Votes
let votes = ['A', 'B', 'A', 'C', 'B', 'A'];
let FrequencyOfVotes=votes.reduce((acc,num) => {
  acc[num]=(acc[num]||0)+1;
  return acc;
},{});
console.log(FrequencyOfVotes);
 //output:{ A: 3, B: 2, C: 1 }
