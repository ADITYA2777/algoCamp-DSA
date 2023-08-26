
let str = "javascript";

let freqMap = {};

for (const char of str) {
    if (freqMap[char]) {
        // it will be same word is update
        freqMap[char] += 1;
    } else {
        freqMap[char] = 1;
    }
}
console.log(freqMap);