// 🔹 1. Insert New Delivery Order
// You are managing a food delivery dashboard. Orders are stored in an array sorted by delivery time. A new order comes in,
//  and you need to insert it in the correct position to keep the array sorted by delivery time.

let Input=
[
  { orderId: 1, deliveryTime: "12:00" },
  { orderId: 2, deliveryTime: "12:30" }
]
let neworder={ orderId: 3, deliveryTime: "12:15" }
Input.splice(1,0,neworder);
console.log(Input);

// 🔹 2. Remove Inactive Users 
// You are building a social media cleanup tool. Given an array of user accounts with an isActive boolean flag, remove all users who are inactive.

let Users=
[{ username: "ali", isActive: true },
  { username: "sara", isActive: false },
  { username: "john", isActive: true }
]
let activeUsers=Users.filter((user)=>{
    return user.isActive===true;
});
console.log(activeUsers);

// 🔹 3. Movie Pair Watch Time 
// You and your friend have exactly targetTime minutes to watch two movies. You're given an array of movie durations.
//  Find if there are two different movies you can watch back-to-back within the exact targetTime.

// let movieDurations = [90, 85, 75, 60, 120, 150, 125]  
// targetTime = 250
function findMoviePair(movieDurations,targetTime){
movieDurations.sort((a, b) => a - b);
let left=0;
let right=movieDurations.length-1;
while(left<right){
let sum=movieDurations[left]+movieDurations[right];
if(sum===targetTime){
  return [movieDurations[left],movieDurations[right]];
}
else if(sum<targetTime){
  left+=1;
}
else{
  right-=1;
}
}
return 'No valid pair found';
}
console.log(findMoviePair([90, 85, 75, 60, 120, 150, 125],250));
