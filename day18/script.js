// Problem:
// "Longest Subarray with Sum ≤ K"
// Given an integer array nums and an integer k, return the length of the longest subarray whose sum is less than or equal to k.

// Input:  nums = [4, 2, 1, 7, 8, 1, 2, 8, 1], k = 8  
// Output: 3  
function longestSubarray(nums, k) {
    let left = 0;
    let currentSum = 0;
    let maxLen = 0;

    for (let right = 0; right < nums.length; right++) {
        currentSum += nums[right];
        while (currentSum > k) {
            currentSum -= nums[left];
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

console.log(longestSubarray([4, 2, 1, 7, 8, 1, 2, 8, 1], 8)); // Output: 3
