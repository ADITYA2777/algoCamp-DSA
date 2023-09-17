
let grid = [[2, 3, 4, 5,], [7, 8, 9, 6], [2, 3, 5, 1], [ 2, 7, 9, 4]]

// console.log(grid);

// let cerate 2d array  of 5*6(5 row and 6 columns) and every chell should be 0

let arr = Array(5); // outer 
for (let i = 0; i < 5; i++){
    let inner = Array(6).fill(0);
    // arr[i]= inner
}

// console.log(arr);


let sam = Array(7);
for (let i = 0; i < 7; i++){
    let inner = Array(5).fill(Math.floor(Math.random()*10));
    sam[i] = inner;
}
// console.log(sam);


let matrix = Array(5);
for (let i = 0; i < 5;i++){
    let inside = Array(6).fill(0)
    matrix[i] = inside;

}
console.log(matrix);