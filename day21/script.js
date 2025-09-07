// 📈 Problem Statement:
// You’re building a productivity tracker. The user has a record of their daily productivity over the past few weeks.
//  Each day is marked as: 1 → productive  0 → unproductive
// You’re allowed to take a break for up to k unproductive days, 
// and you want to find the maximum streak of days that can be considered productive by flipping up to k zeros.
// 📥 Input Example:
// days = [1, 0, 1, 1, 0, 0, 1, 1, 1, 0]  
// k = 2
function longestProductiveStreak(days, k) {
    let left = 0, maxLen = 0, zeros = 0;

    for (let right = 0; right < days.length; right++) {
        if (days[right] === 0) zeros++;

        while (zeros > k) {
            if (days[left] === 0) zeros--;
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}
console.log(longestProductiveStreak([1, 0, 1, 1, 0, 0, 1, 1, 1, 0], 2)); 
// Output: 7
