// 🔍 Problem Statement:
// You are working on a website analytics dashboard. You receive hourly visitor counts for a website as an array visitors[], where each element represents the number of users visiting the site in that hour.

// Your task is to find the minimum number of visitors in any k consecutive hours.

// 📥 Input:

// ▫ visitors[]: an array of integers representing visitor counts

// ▫ k: an integer (number of consecutive hours)
function minimunVisitors(visitors,k){
    let min=Infinity;
    for(let i=0;i<=visitors.length-k;i++){
        let sum=0;
        for(let j=i;j<i+k;j++){
          sum+=visitors[j];
        }
        if(sum<min) min=sum;
    }
    console.log(min);
}
minimunVisitors([120, 80, 100, 90, 150, 110, 70],3)
