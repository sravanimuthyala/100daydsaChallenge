//100 Days Of Code
//Day 24
//Problem Statement:Given a string s, find the length of the longest substring without repeating characters.
//Input: s = "abcabcbb"  Output: 3  Explanation: The answer is "abc", with length 3.
function substring(str){
    let substr=new Set();
    let left=0;
    let maxlength=0;
    for(let right=0;right<str.length;right++){
        while(substr.has(str[right])){
            substr.delete(str[left]);
            left++
        }
        substr.add(str[right]);
        maxlength=Math.max(maxlength,substr.size)
    }
    return maxlength;
}
console.log(substring("abcabcbb"))
