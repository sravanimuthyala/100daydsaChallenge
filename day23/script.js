//100 Days Code DSA
//Day-23
//Problem: Minimum Window of Required Ingredients
//Scenario:
//You’re working on an inventory management system for a restaurant. 
// The chef gives you a list of required ingredients for a dish, 
// and you have a list of ingredients available over several deliveries in sequence.
//You need to figure out the shortest continuous sequence of deliveries that contains 
// all the required ingredients at least once.
//Input:  deliveries = ["tomato", "onion", "bread", "lettuce", "tomato", "cheese", "onion"]  
//required = ["tomato", "cheese", "onion"]  
//Output: 3 
function minwindow(deliveries) {
    let minlength = Infinity;
    let tomatocount = 0;
    let cheesecount = 0;
    let onioncount = 0;
    let left = 0;
    for (let right = 0; right < deliveries.length; right++) {
        if (deliveries[right] == 'tomato') tomatocount++;
        if (deliveries[right] == 'cheese') cheesecount++;
        if (deliveries[right] == 'onion') onioncount++;
        while (tomatocount >= 1 && cheesecount >= 1 && onioncount >= 1) {
            minlength = Math.min(minlength, right - left + 1);
            if (deliveries[left] == 'tomato') tomatocount--;
            if (deliveries[left] == 'cheese') cheesecount--;
            if (deliveries[left] == 'onion') onioncount--;
            left++
        }
    }
    if(minlength==Infinity) return -1;
    else return minlength;
}
console.log(minwindow(["tomato", "onion", "bread", "lettuce", "tomato", "cheese", "onion"]));
