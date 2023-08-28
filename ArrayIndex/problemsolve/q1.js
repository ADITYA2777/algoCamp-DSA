

// reverse 
const arr = [1, 3, 4, 6, 7, 4];

function swap(arr,i,j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let i = 0;
let j = arr.length - 1;

while (i<=j) {
    swap(arr, i, j)
    i += 1;
    j -= 1;
}
console.log(arr);