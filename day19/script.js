function hasUniqueWindow(pages, k) {
    if (k > pages.length) return false;
    if (k === 1) return true;
    let left = 0;
    let windowArr = [];
    for (let right = 0; right < pages.length; right++) {
        while (windowArr.includes(pages[right])) {
            windowArr.shift(); 
            left++;
        }
        windowArr.push(pages[right]);
        if (windowArr.length === k) {
            return true;
        }
    }
    return false;
}

console.log(hasUniqueWindow(["home", "about", "products", "home", "cart", "checkout"], 3)); // Output: true
