// Sub Array

function subArray(arr) {
    for (let start = 0; start < arr.length;start++){
        let str = "";
        for (let end = start; end < arr.length;end++){
            str += arr[end] + " ";
            console.log(str);
        }
    }
}
subArray([1, 2, 3, 4, 5]);