// 🧩 Challenge: Count Occurrences of Anagrams
// Given a string txt and a pattern string pat, your task is to count how many times an anagram of pat appears in txt as a substring.
function countAnagrams(txt, pat) {
    let m = pat.length;
    let n = txt.length;
    let count = 0;
    function sortString(str) {
        return str.split("").sort().join("");
    }

    let sortedPat = sortString(pat);
    for (let i = 0; i <= n - m; i++) {
        let sub = txt.substring(i, i + m);
        if (sortString(sub) === sortedPat) {
            count++;
        }
    }

    return count;
}
console.log(countAnagrams("forxxorfxdofr","for")); // Output: 3
