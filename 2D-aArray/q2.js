// Assining the  value of 2d array

let arr = Array(5);
for (let i = 0; i < 5;i++){
    let inner = Array(6).fill(0);
    arr[i]= inner
}
arr[0][0]=11
arr[0][4]=112
console.log(arr[0][4]);
console.log(arr);