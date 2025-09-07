// 🇮🇳 Problem: Find the Indian Flag in the Parade
// Scenario: During an Independence Day parade, different colored flags are being waved one after another.
// You are given an array colors[], where each element is a string representing the color of a flag in order.
// Your task is to find the shortest continuous segment in colors that contains at least one "orange", one "white", and one "green" the three colors of the Indian flag.
// If no such segment exists, return -1.
function shortestIndianFlagSegment(colors) {
    let left = 0;
    let minLength = Infinity;
    const count = { orange: 0, white: 0, green: 0 };

    for (let right = 0; right < colors.length; right++) {
        const color = colors[right];
        if (count.hasOwnProperty(color)) {
            count[color]++;
        }

        // Shrink window while it still contains all three colors
        while (count.orange > 0 && count.white > 0 && count.green > 0) {
            minLength = Math.min(minLength, right - left + 1);

            const leftColor = colors[left];
            if (count.hasOwnProperty(leftColor)) {
                count[leftColor]--;
            }
            left++;
        }
    }
    return minLength === Infinity ? -1 : minLength;
}
console.log(shortestIndianFlagSegment(["blue", "orange", "white", "blue", "green", "orange"])); // Output: 3
