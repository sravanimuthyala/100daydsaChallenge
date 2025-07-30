// ✅ Q1. Count Pairs with Given Sum
// You're given a sorted array of integers and a target sum.
// Find how many unique pairs exist such that the sum of the pair equals the target.
let validpairs=[];
function countPairs(arr,target){
     
let left=0;
let right=arr.length-1;
while(left<right){
    let sum=arr[left]+arr[right];
    if(target===sum) {
        validpairs.push([arr[left],arr[right]]);
        left+=1;
        right-=1;
    }
}
}
countPairs([1, 2, 3, 4, 5, 6, 7],8);
console.log(validpairs.length);//output:3

// ✅ Q2. Move Zeroes to End
// You're given an array. Move all 0s to the end while maintaining the order of non-zero elements.
// Do it in-place, using two pointers.

function Move0s(arr){
let l=0;

for(let i=0;i<arr.length;i++){
if(arr[i]!==0){
arr[l]=arr[i];
l+=1;
}
}
arr.fill(0,l,arr.length);
return arr;
}
console.log(Move0s([0, 1, 0, 3, 12]));//output:[ 1, 3, 12, 0, 0 ]
