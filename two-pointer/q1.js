
// sum of two
let nums = [2, 7, 11, 15];
let sumofTwo = function (arr, target) {
    for (let i = 0; i <= arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                return [i, j]
            };
        };

    };

};
console.log(sumofTwo(nums));