function Swap(arr,i,j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function sepraret(arr) {
    let i = 0;
    let j = arr.length - 1;
    while (i <= j) {
        
        if (arr[i]==1) {
            Swap(arr, i, j)
            j--
        } else {
            i++
        }
    }

}
let arr = [0,1,0,0,1,0,1,0,1,0,0,0];
sepraret(arr)
console.log(arr);
