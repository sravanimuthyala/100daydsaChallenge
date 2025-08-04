// You’re building a feature for a finance dashboard that analyzes daily profit/loss patterns. 
// You're given an array of integers representing daily net changes.
// Your task is to find all unique triplets (i, j, k) such that:
// arr[i] + arr[j] + arr[k] == 0  and i != j != k
function triplets(arr){
    if(arr.length<3) return [];
arr.sort((a,b)=>a-b);
let result=[];
for(let i=0;i<arr.length-2;i++){
    if(i>0 && arr[i]==arr[i-1]) continue;
    let left=i+1;
    let right=arr.length-1;
    while(left<right){
      let  sum=arr[i]+arr[left]+arr[right];
      if(sum==0){
        result.push([arr[i], arr[left], arr[right]]);
        while(left<right && arr[left]==arr[left+1]) left=left+1;
        while(left<right && arr[right]==arr[right-1]) right=right-1;
        left=left+1;
        right=right-1;
      }
      else if(sum<0)
        {
            left=left+1
        }
        else{
            right=right-1;
        }
    }
}
return result;
}
console.log(triplets([-1, 0, 1, 2, -1, -4]));//output:[ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
