
let arr = ["abc", "hello", "a", "z", "abc", "c", "z"]
let obj = {}



for (const element of arr) {
    if (!obj[element]) {
        
        obj[element] = true
    }
}

for (const key in obj) {
   console.log(key);
}
