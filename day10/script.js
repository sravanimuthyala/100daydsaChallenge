// You're building a calendar integration tool. Two people share their schedules in the form of sorted busy time intervals (start and end times).
//  You need to merge both their busy slots into a single calendar and combine any overlapping or touching intervals.

// 📝 Input Example:

let userA = [[9, 11], [13, 15], [18, 20]];
let userB = [[10, 12], [14, 16], [17, 18]];

let arr = [...userA, ...userB];
arr.sort((a, b) => a[0] - b[0]);
let merged = [];

for (let interval of arr) {
  if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
    merged.push(interval);
  } else {
    merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1]);
  }
}

console.log(merged); //output: [ [ 9, 12 ], [ 13, 16 ], [ 17, 20 ] ]

