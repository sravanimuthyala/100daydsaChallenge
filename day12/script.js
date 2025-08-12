// 📊 Problem Statement:
// You are analyzing website traffic logs. The array visits contains the number of users who visited the site on each day. 
// You are asked to find the maximum number of visitors in any k consecutive days.

// 📥 Input:

// visits = [10, 20, 30, 40, 50, 60, 70]  
// k = 3

function findMaxSum(arr,k){
    let max=0;
  for(let i=0;i<=arr.length-k;i++){
    let sum=0;
for(let j=i;j<=i+k-1;j++){
sum+=arr[j];
}
if(sum>max) max=sum;
  }
  console.log("The max sum of any 3 consecutive days is",max);//180
}
findMaxSum([10, 20, 30, 40, 50, 60, 70],3);
