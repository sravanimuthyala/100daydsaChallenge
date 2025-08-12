// Problem:
// "Longest Subarray with Sum ≤ K"
// Given an integer array nums and an integer k, return the length of the longest subarray whose sum is less than or equal to k.
// Input: nums = [2, 1, 5, 1, 3, 2], k = 8  
// Output: 3 
function longestSubarray(nums, k) {
    let maxLen = 0;

    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;
        for (let j = i; j < n; j++) {
            currentSum += nums[j];
            if (currentSum <= k) {
                maxLen = Math.max(maxLen, j - i + 1);
            }
        }
    }

    return maxLen;
}
console.log(longestSubarray([2, 1, 5, 1, 3, 2], 8)); // ✅ Output: 3
