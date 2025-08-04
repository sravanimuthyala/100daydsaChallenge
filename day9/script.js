// ✅ Q1. Remove Duplicate Emails (Like Gmail cleanup)
// You're building an email cleanup feature. Given a sorted list of email IDs, remove all duplicates in-place and return the list of unique emails.
let emails = ["ali@gmail.com", "ali@gmail.com", "sara@gmail.com", "sara@gmail.com", "zayn@gmail.com"];
let cleanedemails=[];
emails.forEach((email)=>{
if(cleanedemails.includes(email)===false){
    cleanedemails.push(email);
}
})
console.log(cleanedemails);
// ✅ Q2. Playlist Duration Matcher (Music App Feature)
// You’re building a music app. Users want to create a 2-song playlist that exactly matches their commute time.
// You're given an array of song durations (in minutes), and a targetDuration.
// Find one pair of songs (different songs) that exactly add up to the target.
function songs(arr,target){
arr.sort((a,b)=>a-b);
let left=0;
let right=arr.length-1;
while(left<right){
    let sum=arr[left]+arr[right];
    if(sum===target){
        return [arr[left],arr[right]]
    }
    else if(sum<target){
        left+=1;
    }
    else{
        right+=1;
    }
}
}
console.log(songs([3, 5, 8, 2, 7, 4],10))
