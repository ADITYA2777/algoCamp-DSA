
// Print all Element into 2d Array
// no of rows = grid.length
function display(grid) {
    // print all row line by row
    let str = "";
    for (let i = 0; i < grid.length;i++){
        for (let j = 0; j < grid[i].length; j++){

            str += grid[i][j] + " "; // grid[i][j] ---> element at ith row  and jth col 
            // console.log(str);

       }
    }
    console.log(str);
}

let grid = [[1, 2, 3], [5, 6, 7], [8, 9, 0], [10, 11, 12]];
display(grid)